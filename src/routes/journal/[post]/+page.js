import { Posts } from "$lib/api";

export async function load({ params }) {
	const { post } = params;
	const { meta, content } = await Posts.get(post);
	
	return { meta, content };
}