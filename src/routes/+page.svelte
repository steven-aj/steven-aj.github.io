<script>
   // import PostCard from "$components/PostCard.svelte";
   import RecentPosts from '$components/RecentPosts.svelte';

   export let data;

   let { meta, content, posts } = data;
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

<hr />

<RecentPosts title="Recent Posts" {posts} />

<style>
   hr {
      border: thin dashed var(--border);
      width: 77%;
      margin: 2rem auto;
   }
</style>
