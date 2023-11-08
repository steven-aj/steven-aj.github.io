export async function load({ params }) {

	const post = await import(`../../../content/posts/${params.slug}.md`);
	const { title, date, categories, cover } = post.metadata;
	const content = post.default;

	return {
      title,
		date,
		categories,
		cover,
		content,
	};
}