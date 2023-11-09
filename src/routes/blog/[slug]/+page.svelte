<script>
	import App from "$lib/store";
	import { beforeUpdate } from "svelte";

	export let data;

	let { title, date, categories, cover, content } = data;

	function init() {
		App.setHero({
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
