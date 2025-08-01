<script lang="ts">
	import { onMount } from "svelte";
	import { fly, slide } from "svelte/transition";

	export let data;

	let { meta, content } = data;

	let time: string | null = null;

	onMount(() => {
		time = "Posted: " + new Date(meta.date).toLocaleDateString("en-US", {
			dateStyle: "full",
		});
	});
</script>

<svelte:head>
	<title>{data.title}/Posts/{meta.title}</title>
	<meta name="title" content={data.title} />
	<meta name="author" content={data.author} />
	<meta name="keywords" content={`${data.keywords},${meta.tags}`} />
	<meta name="description" content={data.description} />
</svelte:head>

{#key time}
	<time transition:slide={{ axis: "x", delay: 100 }}>{time}</time>
{/key}

<h2>{meta.title}</h2>

<section>
	<svelte:component this={content} />
</section>

<style>
	h2 {
		display: flex;
		align-self: center;
	}

	h2 {
		width: fit-content;
		text-align: center;
	}

	time {
		display: flex;
		margin-top: 2rem;
		padding: 0.5rem 1rem;
		text-align: center;
		border-radius: 0 16px 16px 0;
		color: var(--text-muted);
		width: fit-content;
		background-color: var(--background);
		border: thin solid var(--deep-purple);
		opacity: 0.8;
		box-shadow: 3px 2px 0 var(--pink);
		border-left: 12px solid var(--border);
		overflow: hidden;
	}
</style>
