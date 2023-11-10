import { Posts } from "$lib/data";

export const load = async ({ params }) => {
   const { tag } = params;
   const posts = await Posts.filterTag(tag)

   return { tag, posts };
};