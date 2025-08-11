import { redirect } from '@sveltejs/kit';

export async function load({ parent, params }) {
	const meta = await parent();
	const post = await import(`$markdown/blog/${params.category}/${params.post}.md`);

	if (!post.metadata.published) redirect(307, '/oops/307.html');

	return {
		meta: {
			...post.metadata,
			author: meta.author
		},
		content: post.default
	};
}