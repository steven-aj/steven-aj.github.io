import { dev } from '$app/environment';
import { IPostItem, IPostMeta } from "../shared/interfaces/post.interfaces";

export default class PostItem implements IPostItem {
   path: string;
   meta: IPostMeta;
   content: any;

   constructor(post: IPostItem) {
      this.path = post.path;
      this.meta = post.meta;
      this.content = post.content;
   }

   static async create([path, resolver]) {
      const post = await resolver();
      const slug = path.split('/').reverse()[0].slice(null, -3);
      
      return new PostItem({
         path: `/journal/${slug}`,
         meta: post.metadata,
         content: post.default
      });
   }

   public get published() {
      if (dev) {
         return this.meta.status === 'published' || this.meta.status === 'preview';
      }
      else return this.meta.status === 'published';
   }

   public get title() {
      return this.meta.title;
   }

   public get excerpt() {
      return this.meta.excerpt;
   }

   public get date() {
      return new Date(this.meta.date).toLocaleDateString();
   }

   public get cover() {
      return this.meta.cover;
   }

   public get tags() {
      return this.meta.tags;
   }

   public hasCategory(str: string) {
      return this.meta.tags.includes(str);
   }
}