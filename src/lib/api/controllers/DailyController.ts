import DailyItem from "../models/DailyItem";
import { sortByDate, filterPublished } from "../shared/utils";
import uniq from "lodash/uniq";

export default class DailyController {
   private markdownEntries = Object.entries(import.meta.glob('/src/lib/markdown/daily/*.md'));

   async getAll() {
      const daily: DailyItem[] = await Promise.all(
         this.markdownEntries.map(DailyItem.create)
      ).then(filterPublished).then(sortByDate);

      return daily;
   }

   public async filterTag(tag: string) {
      const byTag = (daily: DailyItem) => daily.hasTag(tag);

      var daily = await this.getAll()
         .then(daily => daily.filter(byTag));

      return daily;
   }

   public async getTags() {
      const toTag = (daily: DailyItem) => daily.tags;

      var tags: DailyItem[] | string[] = await this.getAll();
      tags = tags.map(toTag).flat(1);

      return uniq(tags);
   }

   public async getRecent(count = 1) {
      const daily: DailyItem[] = await this.getAll();
      return daily.slice(0, count);
   }

   static async create([path, resolver]: any[]) {
      const { metadata } = await resolver();
      const dailyPath = path.slice(19, -3);
   
      return new DailyItem({
         path: dailyPath,
         meta: metadata
      });
   }
}