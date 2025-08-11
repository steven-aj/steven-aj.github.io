import type { IPostItem, IPostMeta } from "../shared/interfaces";

export default class NewsItem implements IPostItem {
   path: string;
   meta: IPostMeta;

   constructor(post: IPostItem) {
      this.path = post.path;
      this.meta = post.meta;
   }

   public get published() {
      return this.meta.published;
   }

   public get title() {
      return this.meta.title;
   }

   public get date(): Date {
      return new Date(this.meta.date);
   }

   public get dateStr(): String {
      return this.date.toLocaleDateString("en-US", {
         dateStyle: "full",
      });
   }

   public get category() {
      return this.meta.category;
   }

   // public get excerpt() {
   //    return this.meta.excerpt;
   // }

   public get tags() {
      return this.meta.tags;
   }

   public hasTag(str: string) {
      return this.meta.tags.includes(str);
   }

   static async create([path, resolver]: Array<any>) {
      const { metadata } = await resolver();
      const slug = path.split('markdown')[1].slice(0, -3);

      return new NewsItem({
         path: slug,
         meta: metadata
      });
   }
}