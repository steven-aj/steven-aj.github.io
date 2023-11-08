export interface IHero {
   title: string;
   date?: string;
   description?: string;
   categories?: string[];
   cover?: string;
}

export interface IAppStore {
   hero?: IHero;
   categories?: string[];
}