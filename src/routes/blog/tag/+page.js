import { Posts } from "$lib/data";

export async function load() {
   return {
      tags: await Posts.getTags()
   };
}