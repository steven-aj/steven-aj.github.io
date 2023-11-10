<script>
	import { beforeUpdate } from "svelte";
	import Shell from "$lib/shell";

	export let data;

	let { title, date, categories, cover, content } = data;

	function init() {
		Shell.showBackButton(true);
		Shell.setHero({
			title,
			date,
			categories,
			cover,
		});
	}

	beforeUpdate(init);
</script>

<article>
	<svelte:component this={content} />
</article>

<style lang="postcss">
	article {
		@apply py-8;
	}
</style>
