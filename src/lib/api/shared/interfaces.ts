/**************
 * Daily
 **************/
export interface IDailyMeta {
   date: string;
   category: string;
   tags: string;
}

export interface IDailyItem {
   path: string;
   meta: IDailyMeta;
}


/**************
 * Posts
 **************/
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