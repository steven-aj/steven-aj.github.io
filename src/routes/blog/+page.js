import { Posts } from "$lib/api";

export async function load({ parent }) {
	const meta = await parent();

   return {
      meta,
      posts: await Posts.getAll(),
      tags: await Posts.getTags()
   };
}