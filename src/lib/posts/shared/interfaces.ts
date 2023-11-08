export interface IPostMeta {
   title: string;
   date: string;
   excerpt?: string;
   cover?: string;
   categories: string;
}

export interface IPostItem {
   path: string;
   meta: IPostMeta;
}