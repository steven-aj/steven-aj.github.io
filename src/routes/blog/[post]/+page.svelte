<script>
	import { beforeUpdate } from "svelte";
	import Shell from "$lib/shell";
	import { page } from "$app/stores";
	import { fade } from "svelte/transition";

	export let data;

	$: ({ meta, content } = data);
</script>

<svelte:head>
   <meta name="title" content={meta.title} />
   <meta name="author" content={meta.author} />
   <meta name="keywords" content={meta.keywords} />
</svelte:head>


{#key content}
	<main in:fade>
		<section class="container">
			<svelte:component this={content} />
		</section>
	</main>
{/key}

<style>
</style>
