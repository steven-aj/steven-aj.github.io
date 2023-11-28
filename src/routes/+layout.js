import { Pages } from "$lib/api";

export const prerender = true;

export async function load() {
   const { meta } = await Pages.get('site-meta');

   return { meta }
}