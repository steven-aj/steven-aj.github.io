import { sortByDate, filterPublished } from "../shared/utils";
import LabItem from "../models/LabItem";

export default class LabsController {
   private markdownEntries = Object.entries(import.meta.glob('/src/content/labs/*.md'));

   public async getAll() {
      const posts: LabItem[] = await Promise.all(
         this.markdownEntries.map(LabItem.createFromPromise)
      ).then(filterPublished).then(sortByDate);

      return posts;
   }

   public async getRecent(count = 6) {
      const posts: LabItem[] = await this.getAll();
      return posts.slice(0, count);
   }
}