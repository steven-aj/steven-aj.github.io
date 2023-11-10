import type { IAppStore, IHero, IMainMenu, IToolbar } from "./shared/interface";
import { writable, type Writable } from "svelte/store";
import MainMenu from "./constants/MainMenu";

class Shell {
   public readonly store: Writable<IAppStore>;
   public readonly menu: IMainMenu;

   constructor() {
      this.menu = MainMenu;
      this.store = writable({
         toolbar: undefined,
         hero: undefined,
      });
   }

   public setToolbar(toolbar: IToolbar) {
      this.store.update(state => {
         state.toolbar = toolbar ? toolbar : undefined;
         return state;
      })
   }

   public setHero(hero: IHero) {
      this.store.update(state => {
         state.hero = hero ? hero : undefined;
         return state;
      });
   }

   public showBackButton(show: boolean) {
      this.store.update(state => {
         if (state.toolbar) {
            state.toolbar.back = show;
         }
         return state;
      })
   }
}

export default new Shell();