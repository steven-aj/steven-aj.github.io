import { News } from "$lib/api";

export async function load({ parent }) {
   // const meta = await parent();
   // @ts-ignore
   const page = await import('$markdown/news.md');
   // const { title, description, keywords } = page.metadata;
   
   return {
      meta: page.metadata,
      content: page.default,
      news: await News.getAll(),
      tags: await News.getTags()
   };
}