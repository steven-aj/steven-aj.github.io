export async function load({ parent, params }) {
	const meta = await parent();
	const post = await import(`$markdown/blog/${params.category}/${params.post}.md`);
	console.log(params.category);
	console.log(params.post);
	const content = post.default;

	return {
		meta: {
			...post.metadata,
			author: meta.author
		},
		content,
	};
}