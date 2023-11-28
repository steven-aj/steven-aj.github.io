import { Posts } from "$lib/api";

export async function load() {
   return {
      posts: await Posts.getAll(),
      tags: await Posts.getTags(),
      recent: await Posts.getRecent()
   };
}
