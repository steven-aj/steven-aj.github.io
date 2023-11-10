import "../interfaces/global.interfaces";
import MenuItem from "../../models/MenuItem";

Array.prototype.toMenuItems = function(): MenuItem[] {
   return this.map(item => new MenuItem(item));
}