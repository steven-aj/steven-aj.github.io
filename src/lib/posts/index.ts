import type PostItem from "./models/PostItem";
import { toPostItem, sortByDate } from "./shared/utils";
import uniq from "lodash/uniq";

class Posts {
   private markdownEntries = Object.entries(import.meta.glob('/src/content/posts/*.md'));

   constructor() { }

   public async getAll() {
      const posts: PostItem[] = await Promise.all(
         this.markdownEntries.map(toPostItem)
      ).then(sortByDate);

      return posts;
   }

   public async filterCategory(category: string) {
      const byCategory = (post: PostItem) => post.hasCategory(category);

      var posts = await this.getAll()
         .then(posts => posts.filter(byCategory));

      return posts;
   }

   public async getCategories() {
      const toCategory = (post: PostItem) => post.categories;

      var categories: PostItem[]|string[] = await this.getAll();
      categories = categories.map(toCategory).flat(1);

      return uniq(categories);
   }

   public async getRecent() {
      const posts: PostItem[] = await this.getAll();
      return posts.slice(0, 6);
   }
}

export default new Posts();