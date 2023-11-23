<script>
	import { beforeUpdate } from "svelte";
	import Shell from "$lib/shell";
    import { fade } from "svelte/transition";

	export let data;

	let { meta, content } = data;

	function init() {
		Shell.showBackButton(true);
		Shell.setHero({
			title: meta.title,
			date: meta.date,
			tags: meta.tags,
			cover: meta.cover,
		});
	}

	beforeUpdate(init);
</script>

<main in:fade>
	<section class="container">
		<svelte:component this={content} />
	</section>
</main>

<style>
</style>
