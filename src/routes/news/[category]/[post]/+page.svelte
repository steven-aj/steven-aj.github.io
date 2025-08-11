<script lang="ts">
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";
	import Censor, { cleanDocument } from "$lib/services/Censor.js";

	export let data;

	let { meta, content } = data;

	let time: string | null = null;

	onMount(() => {
		const date = new Date(meta.date);
		date.setUTCHours(12);
		time = "Posted: " + date.toLocaleDateString("en-US", {
			dateStyle: "full"
		});

		cleanDocument();
	});
</script>

<svelte:head>
	<title>{data.title}/News/{meta.title}</title>
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

<article>
	<h2>{@html Censor.cleanProfanity(meta.title)}</h2>
	
	<section>
		<svelte:component this={content} />
	</section>
</article>

<style>
	h2 {
		padding: 0;
	}
	
	section {
		position: relative;
		margin-top: 2rem;
	}

	time {
		display: flex;
		align-self: flex-end;
		max-width: fit-content;
		overflow: hidden;
		white-space: nowrap;
		margin: 0 0 2rem 0;
		padding: 0.5rem 1rem;
		border-radius: 16px 0 0 16px;
		opacity: 0.8;
		color: var(--text-main);
		background-color: var(--background);
		border-top: thin solid var(--deep-purple);
		border-right: medium solid var(--deep-purple);
		box-shadow: -3px 2px 0 var(--pink);
	}
</style>
