<script>
	export let data;

	let { meta, content } = data;
</script>

<time>{new Date(meta.date).toLocaleDateString('en-US', { dateStyle: "full" })}</time>

<h2>{meta.title}</h2>

<section>
	<svelte:component this={content} />
</section>

<style>
	/* .cover {
		margin-bottom: 1.5rem;
	} */

	h2 {
		width: fit-content;
		text-align:center;
		/* padding: 2rem 0; */
		/* border-top: thick solid var(--border); */
	}

	time {
		margin-top: 2rem;
		padding: 0.5rem 1rem;
		text-align: center;
	}
</style>
