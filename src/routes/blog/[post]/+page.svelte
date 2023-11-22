<script>
	import { beforeUpdate } from "svelte";
	import Shell from "$lib/shell";

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

<section>
	<svelte:component this={content} />
</section>

<style>
	
</style>
