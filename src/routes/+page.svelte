<script>
   // import PostCard from "$components/PostCard.svelte";
   import RecentPosts from '$components/posts/RecentPosts.svelte';

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

<h2>{meta.title}</h2>

<article class="glow card">
   <svelte:component this={content} />
</article>

<RecentPosts title="Recent Posts" {posts} glow={false} />

<style>
   article {
      margin: 2rem 0;
   }
</style>
