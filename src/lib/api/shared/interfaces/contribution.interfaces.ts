export interface IContributionMeta {
   title: string;
   url: string;
   screenshot: string;
   employer: string;
   employerUrl: string;
   location: string;
   skills: string[];
   significance: number;
}

export interface IContributionItem {
   path: string;
   meta: IContributionMeta;
   content: any;
}