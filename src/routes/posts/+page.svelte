<script>
   import NewsPosts from "$components/posts/NewsPosts.svelte";
   import NewsGrid from "$components/posts/NewsGrid.svelte";
   import BlogPosts from "$components/posts/BlogPosts.svelte";

   export let data;

   let { meta, news, blog } = data;
</script>

<svelte:head>
   <title>{data.title}/Posts</title>
   <meta name="title" content={data.title} />
   <meta name="author" content={meta.author} />
   <meta name="keywords" content={meta.keywords} />
   <meta name="description" content={meta.description} />
</svelte:head>

<section>
   <h2>Recent News</h2>
   <svelte:component this={news.content} />
   <NewsGrid title={false} {news} />
   <a class="btn card" href="/news">All News</a>
</section>

<section>
   <h2>Recent Entries</h2>
   <svelte:component this={blog.content} />
   <BlogPosts title={false} posts={blog.posts} glow={false} card={false} />
   <a class="btn card" href="/blog">All Entries</a>
</section>

<style>
   section {
      margin: 2rem 0;
   }

   section .btn {
      display: flex;
      flex-direction: row;
      max-width: 233px;
      width: 100%;
      justify-content: center;
      margin: 3rem auto 0 auto;
      background-color: var(--background);
      padding: 1rem;
      font-size: large;
      color: var(--orange);
      text-transform: uppercase;
   }

   section .btn:hover,
   section .btn:active {
      background-color: var(--background-alt);
      box-shadow: 4px 6px 0 var(--deep-purple);
      scale: 1.03;
   }
</style>
