import { Daily } from "$lib/api";

export async function load({ parent, url }) {
   const meta = await parent();
   const dailyEntriesArr = await Daily.getCurrentMonth();
   const entries: any[] = [];

   dailyEntriesArr.forEach(async (item) => {
      const entry = await import(`$markdown/daily/${item.path}.md`).then(mdsvex => ({
         meta: mdsvex.metadata,
         content: mdsvex.default
      }));

      entries.push(entry);
   });

   return {
      meta: {
         author: meta.author
      },
      entries
   };
}