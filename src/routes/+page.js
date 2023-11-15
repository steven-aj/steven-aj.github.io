import { Pages, Posts, Labs } from "$lib/data";

export async function load() {
	const { meta, content } = await Pages.get('home');
	const labs = await Labs.getFeatured();
	const posts = await Posts.getRecent(8);

	return {
		labs,
		posts,
		meta,
		content: content,
		quotes: meta.quotes,
		profile: meta
	};
}