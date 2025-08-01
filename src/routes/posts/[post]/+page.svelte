<script lang="ts">
    import { onMount } from 'svelte';

	export let data;

	let { meta, content } = data;

	let time: string;

	onMount(() => {
		time = new Date(meta.date).toLocaleDateString("en-US", {
			dateStyle: "full",
		});
	})
</script>

<time
	>Posted: {time}</time
>

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
		margin-top: 2rem;
		padding: 0.5rem 1rem;
		text-align: center;
		border-radius: 16px;
		color: var(--blue);
		background-color: var(--background);
		border: thin solid var(--deep-purple);
		opacity: 0.8;
	}
</style>
