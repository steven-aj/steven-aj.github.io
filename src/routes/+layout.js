export const prerender = true;

export async function load() {
   const page = await import(`../content/site.md`);
	const { title, author, description, keywords } = page.metadata;
	// const content = page.default;

   return {
      title,
      author,
      description,
      keywords
   }
}