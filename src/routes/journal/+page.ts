import { Daily } from "$lib/api";

async function getJournalEntries() {
   const entries = await Daily.getCurrentMonth();
   // const latestDaily = await import(`../lib/markdown/daily/${daily.year}/${daily.doc}`);

   return await Promise.all(
      entries.map(
         async (item) => await import(`$markdown/daily/${item.path}.md`)
            .then(markdown => ({
               meta: markdown.metadata,
               content: markdown.default
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