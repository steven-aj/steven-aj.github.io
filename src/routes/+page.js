import { Posts, Daily } from "$lib/api";

export async function load({ parent, url }) {
	const posts = await Posts.getRecent(8);
	const meta = await parent();

	// @ts-ignore
	const page = await import('$markdown/home.md');
	const { title, description, keywords } = page.metadata;
	const content = page.default;

	const daily = await Daily.getLatest();
	const latestDaily = await import(`$markdown/daily/${daily.path}.md`);
	
	return {
		meta: {
			title,
			description,
			keywords,
			author: meta.author
		},
		content,
		posts,
		daily: {
			meta: latestDaily.metadata,
			content: latestDaily.default
		}
	};
}