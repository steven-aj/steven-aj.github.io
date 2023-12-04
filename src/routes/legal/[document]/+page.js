import { Pages } from "$lib/api";

export async function load({params}) {
   let { document } = params;
   const { meta, content } = await Pages.get(`/legal/${document}`);
   return { meta, content };
}