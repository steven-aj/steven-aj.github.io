<script>
   export let data;

   let { meta, content } = data;
</script>

<svelte:head>
   <title>{data.title}/{meta.title}</title>
   <meta name="title" content={meta.title} />
   <meta name="author" content={meta.author} />
   <meta name="keywords" content={meta.keywords} />
   <meta name="description" content={meta.description} />
</svelte:head>

<h2>{@html meta.title}</h2>

<article class="glow">
   <svelte:component this={content} />
</article>
