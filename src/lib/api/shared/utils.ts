export async function filterPublished(posts: any) {
   return posts.filter((post: any) => post.published)
}

export function sortByDate(posts: any) {
   return posts.sort((a: any, b: any) => b.date - a.date)
}