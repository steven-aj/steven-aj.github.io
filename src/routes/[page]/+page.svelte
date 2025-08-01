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

<section class="container">
   <svelte:component this={content} />
</section>
