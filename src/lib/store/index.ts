import { writable, type Writable } from "svelte/store";
import type { IAppStore, IHero, IToolbar } from "./shared/interface";

class App {
   public readonly store: Writable<IAppStore>;

   constructor() {
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

export default new App();