import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface IToolbar {
   back?: boolean;
}

export interface IHero {
   title: string;
   date?: string;
   description?: string;
   tags?: string[];
   cover?: string;
}

export interface IAppStore {
   loading: boolean;
   hero?: IHero;
   toolbar?: IToolbar;
}

export interface IMenuItem {
   anchor: string;
   label: string;
   icon: IconDefinition;
}

export interface IMainMenu {
   lead: IMenuItem[];
   trail: IMenuItem[];
}