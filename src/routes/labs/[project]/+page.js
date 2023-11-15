import { Labs } from "$lib/data";

export async function load({ params }) {
	const { project } = params;
	const { meta, content } = await Labs.get(project);

	return { meta, content };
}