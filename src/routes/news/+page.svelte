<script>
   import NewsPosts from '$components/posts/NewsPosts.svelte';

   export let data;

   let { meta, content, news } = data;
   console.log(meta);
</script>

<svelte:head>
   <title>{data.title}/Blog</title>
   <meta name="title" content={data.title} />
   <meta name="author" content={meta.author} />
   <meta name="keywords" content={meta.keywords} />
   <meta name="description" content={meta.description} />
</svelte:head>

<h2>{meta.title}</h2>

<svelte:component this={content} />

<NewsPosts title={false} {news} glow={true} card={true} />

<style>

</style>
