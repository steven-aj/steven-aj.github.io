<script>
   export let data;
   let { meta, content } = data;
</script>

<svelte:head>
   <meta name="title" content={meta.title} />
   <meta name="author" content={meta.author} />
   <meta name="keywords" content={meta.keywords} />
   <meta name="description" content={meta.description} />
   <title>{meta.title} | {meta.author}</title>
</svelte:head>

<main class="container">
   <time>Last Updated: {new Date(meta.date).toLocaleDateString()}</time>
   <svelte:component this={content} />
</main>

<style lang="postcss">
   main time {
      @apply flex !w-full !text-end !my-8 opacity-75;
   }
</style>