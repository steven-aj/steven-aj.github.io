<script>
	import { beforeUpdate } from "svelte";
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

<nav>
	{#if meta.demo}
		<a
			role="button"
			class="variant-filled-primary"
			target="_blank"
			href={meta.demo}>Demo</a
		>
	{/if}
	{#if meta.repo}
		<a
			role="button"
			class={meta.demo ? "variant-soft-secondary" : "variant-filled-primary"}
			target="_blank"
			href={meta.repo}>Repo</a
		>
	{/if}
</nav>

<section>
	<svelte:component this={content} />
</section>

<style>

</style>
