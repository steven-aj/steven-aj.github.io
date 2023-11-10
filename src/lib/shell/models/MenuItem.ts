import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { IMenuItem } from "../shared/interfaces/app.interfaces";

export default class MenuItem implements IMenuItem {
   public readonly anchor: string;
   public readonly label: string;
   public readonly icon: IconDefinition;

   constructor(item: IMenuItem) {
      for (let key in item) {
         this[key] = item[key];
      }
   }

   public isActive(routeId) {
      if (this.label === "Home") {
         return this.anchor === routeId;
      } else return routeId.includes(this.anchor);
   }
}