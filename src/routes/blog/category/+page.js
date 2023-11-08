import Posts from '$lib/posts';

export async function load() {
   return {
      categories: await Posts.getCategories()
   };
}