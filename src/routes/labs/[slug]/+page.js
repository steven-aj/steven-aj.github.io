export async function load({ params }) {

	const post = await import(`../../../content/labs/${params.slug}.md`);
	const { title, description, language, repo, demo, screenshot} = post.metadata;
	const content = post.default;

	return {
		content,
		meta: {
			title,
			description,
			language,
			repo,
			demo,
			screenshot,
		},
	};
}