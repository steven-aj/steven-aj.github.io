import { Posts } from "$lib/api";

export async function load({ parent }) {
   // const meta = await parent();
   // @ts-ignore
   const page = await import('$markdown/blog.md');
   // const { title, description, keywords } = page.metadata;
   
   return {
      meta: page.metadata,
      content: page.default,
      posts: await Posts.getAll(),
      tags: await Posts.getTags()
   };
}