import { Posts } from "$lib/api";

export async function load({ parent, url }) {

	// @ts-ignore
	const page = await import('$markdown/home.md');
	
	const meta = await parent();
	const posts = await Posts.getRecent(8);
	const { title, description, keywords } = page.metadata;
	const content = page.default;
	
	return {
		meta: {
			title,
			description,
			keywords,
			author: meta.author
		},
		content,
		posts
	};
}