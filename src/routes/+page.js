import { Posts, Daily } from "$lib/api";

export async function load({ parent, url }) {
	const posts = await Posts.getRecent(8);
	const meta = await parent();

	// @ts-ignore
	const page = await import('$markdown/home.md');
	const { title, description, keywords } = page.metadata;
	const content = page.default;

	const dailyEntries = await Daily.getRecent();
	const daily = await import(`$markdown/daily/${dailyEntries[0].path}.md`);
	
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
			meta: daily.metadata,
			content: daily.default
		}
	};
}