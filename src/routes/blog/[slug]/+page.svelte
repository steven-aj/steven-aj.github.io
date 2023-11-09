<script>
	import { beforeUpdate } from "svelte";
	import App from "$lib/store";

	export let data;

	let { title, date, categories, cover, content } = data;

	function init() {
		App.showBackButton(true);
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
