import { Pages } from "$lib/api";

export const prerender = true;

export async function load({ setHeaders }) {
   setHeaders({'cache-control': 'max-age=120'});
   
   const { meta } = await Pages.get('site-meta');

   return { meta }
}