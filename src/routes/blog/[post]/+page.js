import { Posts } from "$lib/data";

export async function load({ params }) {
	const { post } = params;
	const { meta, content } = await Posts.get(post);
	// const post = await import(`../../../content/singles/${params.post}.md`);
	// const { title, date, tags, cover } = post.metadata;
	// const content = post.default;

	return { meta, content };
}