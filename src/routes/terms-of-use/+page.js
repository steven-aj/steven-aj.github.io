import { Pages } from "$lib/api";

export async function load() {
   const { meta, content } = await Pages.get('terms-of-use');
   return { meta, content };
}