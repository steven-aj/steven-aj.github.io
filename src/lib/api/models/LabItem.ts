import { ILabItem, ILabMeta } from "../shared/interfaces/lab.interfaces";

export default class LabItem implements ILabItem {
   path: string;
   meta: ILabMeta;
   content: any;

   constructor(post: ILabItem) {
      this.path = post.path;
      this.meta = post.meta;
      this.content = post.content;
   }

   static async createFromPromise([path, resolver]) {
      const lab = await resolver();
      const labPath = path.slice(18, -3);
   
      return new LabItem({
         path: `/labs/${labPath}`,
         meta: lab.metadata,
         content: lab.default
      });
   }

   public get published() {
      return this.meta.status === 'published';
   }

   public get featured() {
      return this.meta.featured === 'true';
   }

   public get title() {
      return this.meta.title;
   }

   public get language() {
      return this.meta.language;
   }

   public get description() {
      return this.meta.description;
   }

   public get repo() {
      return this.meta.repo;
   }

   public get demo() {
      return this.meta.demo;
   }
}