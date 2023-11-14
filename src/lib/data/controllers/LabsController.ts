import { sortByDate, filterPublished } from "../shared/utils";
import LabItem from "../models/LabItem";

export default class LabsController {
   private markdownEntries = Object.entries(import.meta.glob('/src/content/labs/*.md'));

   public async getAll() {
      const labs: LabItem[] = await Promise.all(
         this.markdownEntries.map(LabItem.createFromPromise)
      ).then(filterPublished);

      return labs;
   }

   public async getRecent(count = 6) {
      const labs: LabItem[] = await this.getAll();
      return labs.slice(0, count);
   }

   public async getFeatured() {
      const labs: LabItem[] = (await this.getAll()).filter(lab => lab.featured);
      return labs;
   }
}