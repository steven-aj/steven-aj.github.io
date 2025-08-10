export async function load({ parent, params }) {
	const meta = await parent();
	const post = await import(`$markdown/blog/${params.category}/${params.post}.md`);
	const content = post.default;

	return {
		meta: {
			...post.metadata,
			author: meta.author
		},
		content,
	};
}