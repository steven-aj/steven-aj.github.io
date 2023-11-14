import { IPage } from "../shared/interfaces/page.interfaces";

export default class Page implements IPage {
   path: string;
   meta: any;
   content: any;

   constructor(page: IPage) {
      this.path = page.path;
      this.content = page.content;
      this.meta = page.meta;
   }

   public get title() {
      return this.meta.title;
   }

   public get description() {
      return this.meta.description;
   }

   static async createFromPromise([path, resolver]) {
      const page = await resolver();
      const pagePath = path.split('/').reverse()[0].slice(null, -3);

      console.dir(page.metadata);

      return new Page({
         path: pagePath,
         meta: page.metadata,
         content: page.default
      });
   }
}