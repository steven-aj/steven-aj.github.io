<script lang="ts">
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";
	import Censor, { cleanDocument } from "$lib/services/Censor.js";

	export let data;

	let { meta, content } = data;

	let time: string | null = null;

	onMount(() => {
		time =
			"Posted: " +
			new Date(meta.date).toLocaleDateString("en-US", {
				dateStyle: "full",
			});

		cleanDocument();
	});
</script>

<svelte:head>
	<title>{data.title}/Posts/{meta.title}</title>
	<meta name="title" content={data.title} />
	<meta name="author" content={data.author} />
	<meta name="keywords" content={`${data.keywords},${meta.tags}`} />
	<meta name="description" content={data.description} />
</svelte:head>

{#if time !== null}
	<time hidden={!time} in:slide={{ axis: "x", duration: 100, delay: 500 }}
		>{time}</time
	>
{/if}

<h2>{@html Censor.cleanProfanity(meta.title)}</h2>

<section>
	<svelte:component this={content} />
</section>

<style>
	h2 {
		padding-left: 0;
		width: fit-content;
	}

	section {
		color: var(--text-main);
	}

	time {
		display: block;
		max-width: fit-content;
		overflow: hidden;
		white-space: nowrap;
		margin: 2rem 0;
		padding: 0.5rem 1rem;
		border-radius: 0 16px 16px 0;
		opacity: 0.8;
		color: var(--text-main);
		background-color: var(--background);
		border-top: thin solid var(--deep-purple);
		border-left: medium solid var(--deep-purple);
		box-shadow: 3px 2px 0 var(--pink);
	}
</style>
