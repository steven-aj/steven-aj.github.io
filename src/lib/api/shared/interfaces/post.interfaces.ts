enum EnumPostStatus {
   published = "published",
   draft = "draft",
   review = "review"
}

export interface IPostMeta {
   status: EnumPostStatus;
   title: string;
   date: string;
   author: string;
   excerpt?: string;
   cover?: string;
   tags: string;
}

export interface IPostItem {
   path: string;
   meta: IPostMeta;
   content: any;
}