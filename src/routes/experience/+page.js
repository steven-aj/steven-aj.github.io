import { Pages } from "$lib/api";

export async function load() {
	const { meta, content } = await Pages.get('experience');

	return {
		meta,
		content
	};
}