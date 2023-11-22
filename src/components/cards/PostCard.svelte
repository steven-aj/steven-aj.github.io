<script>
   export let post;
</script>

<!-- <a role="button" title={post.title} href={post.path}> -->
<article class="col-6">
   {#if post.cover}
      <header>
         <h1>{post.title}</h1>
      </header>
   {/if}

   <section>
      {#if post.excerpt}
         {post.excerpt}
      {/if}
   </section>

   <footer>
      {#if post.tags}
         <div class="tags">
            <span class="badge variant-filled-secondary">
               {post.tags[0]}
            </span>
            <span class="text-xs text-slate-500/50">
               +{post.tags.length - 1} more
            </span>
         </div>
      {/if}
      <time>{post.date}</time>
   </footer>
</article>

<style>
</style>
