import { Pages, Contributions } from "$lib/api";

export async function load() {
	const { meta, content } = await Pages.get('contributions');

	return {
		content,
		meta,
		contributions: await Contributions.getAll()
	};
}