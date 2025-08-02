export async function load({ params, route }) {
	// @ts-ignore
	const page = await import(`$markdown/${params.page}.md`);

	const { title, author, description, date, keywords } = page.metadata;
	const content = page.default;

	return {
		meta: {
			title,
			date,
			author,
			description,
			keywords
		},
		content
	};
}