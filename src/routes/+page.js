import Posts from "$lib/posts";

export async function load({ params }) {
	const page = await import(`../content/home.md`);
	const posts = await Posts.getRecent();
	const { title, cover, email, description, tagline, keywords } = page.metadata;
	const content = page.default;

	return {
		meta: {
			title,
			author: title,
			description,
			keywords
		},
		profile: {
			title, 
			cover,
			tagline,
			email
		},
		content, posts
	};
}