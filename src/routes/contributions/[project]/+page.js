import { Contributions } from "$lib/api";

export async function load({ params }) {
	const { project } = params;
	const { meta, content } = await Contributions.get(project);

	return { meta, content };
}