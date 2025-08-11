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

   public async filterByCategory(category: string) {
      const byCategory = (post: PostItem) => post.hasCategory(category);

      var posts = await this.getAll()
         .then(posts => posts.filter(byCategory));

      return posts;
   }

   public async filterByTag(tag: string) {
      const byTag = (post: PostItem) => post.hasTag(tag);

      var posts = await this.getAll()
         .then(posts => posts.filter(byTag));

      return posts;
   }

   public async getCategories() {
      const toCategory = (post: PostItem) => post.category;

      var categories: PostItem[] | string[] = await this.getAll()
      categories = categories.map(toCategory);

      return uniq(categories);
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
}