export async function load({ params }) {

	const post = await import(`../../../content/singles/${params.post}.md`);
	const { title, date, tags, cover } = post.metadata;
	const content = post.default;

	return {
      title,
		date,
		tags,
		cover,
		content,
	};
}