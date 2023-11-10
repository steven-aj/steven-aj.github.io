import { Labs } from "$lib/data";

export async function load() {
   const page = await import(`../../content/labs.md`);

	const { title, author, description, cover, date, keywords } = page.metadata;
	const content = page.default;

	return {
      content,
		meta: {
			title,
         date,
			author,
			description,
			cover,
			keywords
		},
      labs: await Labs.getAll()
	};
}