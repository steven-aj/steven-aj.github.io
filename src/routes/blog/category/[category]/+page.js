import Posts from "$lib/posts";

export const load = async ({ fetch, params }) => {
   let { category } = params;

   const posts = await Posts.filterCategory(category)

   return { category, posts };
};