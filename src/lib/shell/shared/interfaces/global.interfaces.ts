import type MenuItem from "../../models/MenuItem"

declare global {
   interface Array<T> {
      toMenuItems: () => MenuItem[]
   }
}

export {}