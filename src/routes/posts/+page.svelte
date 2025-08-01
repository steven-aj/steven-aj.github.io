<script>
   import RecentPosts from '$components/posts/RecentPosts.svelte';

   export let data;

   let { posts, meta } = data;
</script>

<svelte:head>
   <title>{data.title}/Posts</title>
   <meta name="title" content={data.title} />
   <meta name="author" content={data.author} />
   <meta name="keywords" content={data.keywords} />
   <meta name="description" content={data.description} />
</svelte:head>

<RecentPosts title="Recent Posts" {posts} />

<style>

</style>
