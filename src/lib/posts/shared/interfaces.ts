enum EnumPostStatus {
   published = "published",
   draft = "draft"
}

export interface IPostMeta {
   status: EnumPostStatus;
   title: string;
   date: string;
   author: string;
   excerpt?: string;
   cover?: string;
   categories: string;
}

export interface IPostItem {
   path: string;
   meta: IPostMeta;
}