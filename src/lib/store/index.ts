import { writable, type Writable } from "svelte/store";
import type { IAppStore, IHero } from "./shared/interface";

class App {
   public readonly store: Writable<IAppStore>;

   constructor() {
      this.store = writable({
         hero: undefined,
         categories: undefined
      });
   }

   public setHero(hero: IHero) {
      this.store.update(state => {
         state.hero = hero ? hero : undefined;
         return state;
      });
   }

   public setCategories(list: string[]) {
      this.store.update(state => {
         state.categories = list.length ? list : undefined;
         return state;
      });
   }
}

export default new App();