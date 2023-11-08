// import type PostItem from "./models/PostItem";
// import { toPostItem, sortByDate } from "./shared/utils";
import uniq from "lodash/uniq";

class Pages {
   private markdownEntries = Object.entries(import.meta.glob('/src/content/*.md'));

   constructor() { }

   public async getAll() {
      const posts: any[] = await Promise.all(
         this.markdownEntries.map(console.log)
      )

      return posts;
   }
}

export default new Pages();