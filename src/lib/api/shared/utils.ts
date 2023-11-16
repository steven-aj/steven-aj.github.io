export async function filterPublished(posts) {
   return posts.filter(post => post.published)
}

export function sortByDate(posts) {
   // @ts-expect-error
   return posts.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();
}