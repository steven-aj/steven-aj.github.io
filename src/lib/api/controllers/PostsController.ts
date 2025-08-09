import PostItem from "../models/PostItem";
import { sortByDate, filterPublished } from "../shared/utils";
import uniq from "lodash/uniq";

export default class PostsController {
   private markdownEntries = Object.entries(import.meta.glob('/src/lib/markdown/blog/**/*.md'));

   async getAll() {
      const posts: PostItem[] = await Promise.all(
         this.markdownEntries.map(PostItem.create)
      ).then(filterPublished).then(sortByDate);

      return posts;
   }

   public async filterTag(tag: string) {
      const byTag = (post: PostItem) => post.hasTag(tag);

      var posts = await this.getAll()
         .then(posts => posts.filter(byTag));

      return posts;
   }

   public async getTags() {
      const toTag = (post: PostItem) => post.tags;

      var tags: PostItem[] | string[] = await this.getAll();
      tags = tags.map(toTag).flat(1);

      return uniq(tags);
   }

   public async getRecent(count = 6) {
      const posts: PostItem[] = await this.getAll();
      return posts.slice(0, count);
   }

   static async create([path, resolver]: any[]) {
      const { metadata } = await resolver();
      // const postPath = path.split('markdown')[1].slice(0, -3);
   
      return new PostItem({
         path: path,
         meta: metadata
      });
   }
}