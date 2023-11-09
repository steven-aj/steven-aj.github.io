export async function load({ params }) {
	const page = await import(`../../content/experience.md`);

	const { title, author, description, cover, date, keywords } = page.metadata;
	const content = page.default;

	return {
		meta: {
			title,
         date,
			author,
			description,
			cover,
			keywords
		},
		content
	};
}