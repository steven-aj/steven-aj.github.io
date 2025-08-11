import { News, Posts } from "$lib/api";

export async function load({ parent }) {
   const meta = await parent();
   // @ts-ignore
   const newsDoc = await import('$markdown/news.md');
   // @ts-ignore
   const blogDoc = await import('$markdown/blog.md');

   return {
      meta: meta,
      news: {
         meta: newsDoc.metadata,
         content: newsDoc.default,
         posts: await News.getRecent(),
         tags: await News.getTags()
      },
      blog: {
         meta: blogDoc.metaData,
         content: blogDoc.default,
         posts: await Posts.getRecent(),
         tags: await Posts.getTags()
      }
   };
}