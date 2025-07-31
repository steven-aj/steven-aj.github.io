export interface IPostMeta {
   published: boolean;
   title: string;
   date: string;
   category: string;
   excerpt?: string;
   // cover?: string;
   tags: string;
}

export interface IPostItem {
   path: string;
   meta: IPostMeta;
}