<script>
	import { fade } from "svelte/transition";

	export let data;

	$: ({ meta, content } = data);

	function downloads(container) {
		const anchors = container.getElementsByTagName('a');
		if (anchors.length) {
			for (let link of anchors) {
				if (link.href.includes('/downloads/')) {
					link.setAttribute('download', true);
				}
			}
		}
	}
</script>

<svelte:head>
   <meta name="title" content={meta.title} />
   <meta name="author" content={meta.author} />
   <meta name="keywords" content={meta.keywords} />
</svelte:head>


{#key content}
	<main in:fade>
		<section class="container" use:downloads>
			<svelte:component this={content} />
		</section>
	</main>
{/key}

<style>
</style>
