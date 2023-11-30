import { Pages, Posts } from "$lib/api";

export async function load() {
   const page = await Pages.get('blog');

   return {
      meta: page.meta,
      content: page.content,
      posts: await Posts.getAll(),
      tags: await Posts.getTags(),
      recent: await Posts.getRecent()
   };
}
