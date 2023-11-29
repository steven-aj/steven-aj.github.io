import { Pages, Posts, Labs } from "$lib/api";

export async function load() {
	const { meta, content } = await Pages.get('home');
	const labs = await Labs.getFeatured();
	const posts = await Posts.getRecent(9);

	return {
		labs,
		posts,
		meta,
		content: content,
		quotes: meta.quotes,
		profile: meta
	};
}