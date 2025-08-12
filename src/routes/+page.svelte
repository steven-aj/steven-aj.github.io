<script>
   // import PostCard from "$components/PostCard.svelte";
   import BlogPosts from "$components/posts/BlogPosts.svelte";
   import MicroJournal from "$components/activities/MicroJournal.svelte";

   export let data;
   let { meta, content, posts, daily } = data;
</script>

<svelte:head>
   <title>{data.title}/{meta.title}</title>
   <meta name="title" content={meta.title} />
   <meta name="author" content={meta.author} />
   <meta name="keywords" content={meta.keywords} />
   <meta name="description" content={meta.description} />
</svelte:head>

<section>
   <article>
      <h2>{meta.title}</h2>
      <div class="glow card">
         <svelte:component this={content} />
      </div>
   </article>
</section>

<BlogPosts title="Recent Posts" {posts} glow={false} card={false} />

<MicroJournal title="Journal Page" card={true} {daily} />
