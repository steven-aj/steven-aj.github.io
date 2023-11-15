<script>
	import { beforeUpdate } from "svelte";
	import Shell from "$lib/shell";

	export let data;

	let { title, date, tags, cover, content } = data;

	function init() {
		Shell.showBackButton(true);
		Shell.setHero({
			title,
			date,
			tags,
			cover,
		});
	}

	beforeUpdate(init);
</script>

<section>
	<svelte:component this={content} />
</section>

<style lang="postcss">
	section {
		@apply py-16;
	}
</style>
