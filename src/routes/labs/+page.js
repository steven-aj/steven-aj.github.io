import { Labs } from "$lib/data";

export async function load() {
   return {
      labs: await Labs.getAll()
   };
}