import type { IPostItem, IPostMeta } from "../shared/interfaces";

export default class PostItem implements IPostItem {

   type: string;
   path: string;
   meta: IPostMeta;

   constructor(post: IPostItem) {
      this.type = post.type;
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

   public hasCategory(str: string) {
      return this.meta.category.includes(str);
   }


   public hasTag(str: string) {
      return this.meta.tags.includes(str);
   }

   static async create([path, resolver]: Array<any>) {
      const { metadata } = await resolver();
      const slug = path.split('markdown')[1].slice(0, -3);

      return new PostItem({
         type: 'blog',
         path: slug,
         meta: metadata
      });
   }
}