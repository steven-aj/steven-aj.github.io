import { Pages } from "$lib/data";

export async function load() {
	const { meta, content } = await Pages.get('experience');

	return {
		meta,
		content
	};
}