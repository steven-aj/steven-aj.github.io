import { Daily } from "$lib/api";

async function getJournalEntries() {
   const entries = await Daily.getCurrentMonth();

   return await Promise.all(
      entries.map(
         async (item) => await import(`$markdown/daily/${item.path}.md`)
            .then(mdsvex => ({
               meta: mdsvex.metadata,
               content: mdsvex.default
            }))
      )
   );
}

export async function load({ parent, url }) {
   const meta = await parent();
   const entries = await getJournalEntries();

   return {
      meta: {
         author: meta.author
      },
      entries
   };
}