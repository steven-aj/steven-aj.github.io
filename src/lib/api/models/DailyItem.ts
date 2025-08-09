import type { IDailyItem, IDailyMeta } from "../shared/interfaces";

export default class DailyItem implements IDailyItem {

   path: string;
   meta: IDailyMeta;

   constructor(daily: IDailyItem) {
      this.path = daily.path;
      this.meta = daily.meta;
   }

   public get date(): Date {
      return new Date(this.meta.date);
   }

   public get category() {
      return this.meta.category;
   }

   public get tags() {
      return this.meta.tags;
   }

   public hasTag(str: string) {
      return this.meta.tags.includes(str);
   }

   static async create([path, resolver]: Array<any>) {
      const { metadata } = await resolver();
      const dailyDate = path.split('daily/')[1].slice(0, -3);
            
      return new DailyItem({ 
         path: dailyDate, 
         meta: metadata 
      });
   }
}