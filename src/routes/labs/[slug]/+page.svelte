<script>
	import { beforeUpdate } from "svelte";
	import App from "$lib/shell";

	export let data;

	let { meta, content } = data;

	function init() {
		App.showBackButton(true);
		App.setHero({
			title: meta.title,
			description: meta.description,
			cover: meta.screenshot
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
