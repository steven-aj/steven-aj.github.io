<script>
   import BlogPosts from '$components/posts/BlogPosts.svelte';

   export let data;

   let { meta, content, posts } = data;
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

<BlogPosts title={false} {posts} glow={false} card={false} />

<style>

</style>
