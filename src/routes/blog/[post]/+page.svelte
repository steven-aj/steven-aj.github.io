<script>
	import { fade } from "svelte/transition";
	import PostHero from "$components/headers/PostHero.svelte";

	export let data;

	$: ({ meta, content } = data);

	function downloads(container) {
		const anchors = container.getElementsByTagName("a");
		const extractTitle = (link) => {
			let fileName = link.href.split('/');
			return fileName[fileName.length-1].split('.')[0];
		}

		if (anchors.length) {
			for (let link of anchors) {
				if (link.href.includes("/downloads/")) {
					link.setAttribute("download", extractTitle(link));
				}
			}
		}
	}
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="title" content={meta.title} />
	<meta name="author" content={meta.author} />
	<meta name="keywords" content={meta.keywords} />
	<meta name="description" content={meta.excerpt} />
</svelte:head>

<main in:fade>
	<PostHero {meta} />

	<section class="container py-10" in:fade use:downloads>
		<svelte:component this={content} />
	</section>
</main>
