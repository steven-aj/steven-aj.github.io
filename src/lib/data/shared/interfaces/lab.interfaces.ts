import { EnumStatus, EnumFeatured } from "./enums";

export interface ILabMeta {
   status: EnumStatus;
   featured: EnumFeatured;
   title: string;
   language: string;
   description: string;
   repo: string;
   demo: string;
}

export interface ILabItem {
   path: string;
   meta: ILabMeta;
}