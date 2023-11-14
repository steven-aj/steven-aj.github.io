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
			cover: meta.screenshot,
		});
	}

	beforeUpdate(init);
</script>

<nav>
	{#if meta.repo}
		<a role="button" target="_blank" href={meta.repo}>Repo</a>
	{/if}
	{#if meta.demo}
		<a role="button" target="_blank" href={meta.demo}>Demo</a>
	{/if}
</nav>

<section>
	<svelte:component this={content} />
</section>

<style lang="postcss">
	nav {
		@apply flex flex-row;

		@apply justify-evenly;

		@apply max-w-sm w-full;

		@apply m-auto;
	}
	article {
		@apply py-8;
	}
</style>
