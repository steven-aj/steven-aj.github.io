import { Posts } from "$lib/data";

export async function load() {
	const posts = await Posts.getRecent(6);
	
	const page = await import(`../content/home.md`);
	const { title, author, cover, quotes, email, description, tagline, keywords } = page.metadata;
	const content = page.default;

	return {
		meta: {
			title,
			author,
			description,
			keywords
		},
		profile: {
			title,
			cover,
			tagline,
			email
		},
		quotes,
		content,
		posts
	};
}