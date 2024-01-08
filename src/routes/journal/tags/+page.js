import { Posts } from "$lib/api";

export async function load() {
   return {
      tags: await Posts.getTags()
   };
}