import Page from "../models/Page";

export default class PageController {
   private pageEntries = Object.entries(import.meta.glob('/src/content/*.md'));

   public async getAll() {
      const pages: Page[] = await Promise.all(
         this.pageEntries.map(Page.createFromPromise)
      );

      return pages;
   }

   public async get(path) {
      const page: Page = (await this.getAll()).filter(page => page.path === path)[0];

      if (page) return page;
      else throw new Error(`Page path not found: ${path}`)
   }
}