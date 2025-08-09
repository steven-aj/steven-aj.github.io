import { Posts, Daily } from "$lib/api";

// @ts-ignore
export async function load({ parent, url }) {
	const posts = await Posts.getRecent(8);
	const meta = await parent();

	// @ts-ignore
	const page = await import('$markdown/home.md');
	const { title, description, keywords } = page.metadata;

	const latestDaily = await Daily.getLatest();
	const daily = await import(`$markdown/daily/${latestDaily.path}.md`);

	return {
		content: page.default,
		posts: posts,
		meta: {
			title,
			description,
			keywords,
			author: meta.author
		},
		daily: {
			meta: daily.metadata,
			content: daily.default
		}
	};
}