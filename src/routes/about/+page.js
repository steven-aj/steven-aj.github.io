import { Pages } from "$lib/api";

export async function load({ params }) {
	const page = await Pages.get('about');
	const { meta, content } = page;

	return { meta, content };
}