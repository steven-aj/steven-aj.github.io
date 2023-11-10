import PostItem from "../models/PostItem";

export async function toPostItem([path, resolver]) {
   const { metadata } = await resolver();
   const postPath = path.slice(19, -3);

   return new PostItem({
      path: `/blog/${postPath}`,
      meta: metadata
   });
}

export async function filterPublished(posts) {
   return posts.filter(post => post.published)
}

export function sortByDate(posts) {
   return posts.sort((a, b) => a.date - b.date)
}