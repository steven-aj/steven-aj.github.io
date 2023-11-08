import { IPostItem, IPostMeta } from "../shared/interfaces";

export default class PostItem implements IPostItem {
   path: string;
   meta: IPostMeta;

   constructor(post: IPostItem) {
      this.path = post.path;
      this.meta = post.meta;
   }

   public get title() {
      return this.meta.title;
   }

   public get date() {
      return this.meta.date;
   }

   public get excerpt() {
      return this.meta.excerpt;
   }

   public get cover() {
      return this.meta.cover;
   }

   public get categories() {
      return this.meta.categories;
   }

   public hasCategory(str: string) {
      return this.meta.categories.includes(str);
   }
}