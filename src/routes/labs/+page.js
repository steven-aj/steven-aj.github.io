import { Pages, Labs } from "$lib/data";

export async function load() {
	const { meta, content } = await Pages.get('labs');

	return {
      content,
		meta,
      labs: await Labs.getAll()
	};
}