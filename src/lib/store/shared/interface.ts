export interface IToolbar {
   back?: boolean;
}

export interface IHero {
   title: string;
   date?: string;
   description?: string;
   categories?: string[];
   cover?: string;
}

export interface IAppStore {
   hero?: IHero;
   toolbar?: IToolbar;
}