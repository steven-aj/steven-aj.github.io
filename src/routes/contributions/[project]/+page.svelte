<script>
	import { beforeUpdate } from "svelte";
	import LabHero from "$components/headers/LabHero.svelte";
	import App from "$lib/shell";

	export let data;

	let { meta, content } = data;

	function init() {
		App.showBackButton(true);
		App.setHero({
			title: "Lab: " + meta.title,
			description: meta.description,
			cover: meta.screenshot,
		});
	}

	beforeUpdate(init);
</script>

<main>
	<LabHero {meta} />

	<section class="container">
		<svelte:component this={content} />
	</section>
</main>
