import Posts from '$lib/posts';

export async function load() {
   return {
      posts: await Posts.getAll(),
      categories: await Posts.getCategories()
   };
}