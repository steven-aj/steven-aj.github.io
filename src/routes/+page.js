import { sortByDate } from "$api/shared/utils.js";
import { News, Posts, Daily } from "$lib/api";

// @ts-ignore
export async function load({ parent, url }) {
	const meta = await parent();
	// @ts-ignore
	const page = await import('$markdown/home.md');
	const { title, description, keywords } = page.metadata;

	const posts = await Posts.getRecent(4);
	const news = await News.getRecent(8);
	const recentEntries = sortByDate([...posts, ...news]);

	const latestDaily = await Daily.getLatest();
	const daily = await import(`$markdown/daily/${latestDaily.path}.md`);


	return {
		content: page.default,
		posts: recentEntries,
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