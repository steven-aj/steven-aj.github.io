import { Pages, Posts, Labs } from "$lib/api";

export async function load() {
	const { meta, content } = await Pages.get('home');
	const labs = await Labs.getFeatured();
	const posts = await Posts.getRecent(9);
	const hero = await Posts.getRecent(1);

	console.log(hero);

	return {
		meta,
		hero: hero[0],
		content: content,
		posts,
		labs,
		profile: meta
	};
}