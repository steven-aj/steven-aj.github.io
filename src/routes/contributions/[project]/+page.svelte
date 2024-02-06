<script>
	import { beforeUpdate } from "svelte";
	// import ContributionHero from "$components/headers/ContributionHero.svelte";
	import App from "$lib/shell";

	export let data;

	let { meta, content } = data;

	function init() {
		App.showBackButton(true);
		App.setHero({
			title: "Contribution: " + meta.title,
			description: meta.description,
			cover: meta.screenshot,
		});
	}

	beforeUpdate(init);
</script>

<main>
	<!-- <ContributionHero {meta} /> -->

	<section class="container">
		<svelte:component this={content} />
	</section>
</main>
