import Page from "../models/Page";

export default class PageController {
   private pageEntries = Object.entries(import.meta.glob('/src/content/*.md'));
   private legalEntries = Object.entries(import.meta.glob('/src/content/legal/*.md'));

   public async getAll() {
      const pages: Page[] = await Promise.all(
         this.pageEntries.map(Page.createFromPromise)
      );

      return pages;
   }

   public async getLegal() {
      const pages: Page[] = await Promise.all(
         this.legalEntries.map(Page.createFromPromise)
      );

      return pages;
   }

   public async get(path) {
      const pages: Page[]|Page = path.includes('/legal/') ? await this.getLegal() : await this.getAll();

      if (pages) return pages.filter(page => page.path === path)[0];
      else throw new Error(`Page path not found: ${path}`)
   }
}