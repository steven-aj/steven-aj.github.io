<script>
   export let post;
</script>

<article>
   <section>
      <a href={post.path}>
         <h1>{post.title}</h1>
      </a>
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

<style lang="postcss">
   article {
      @apply m-0;
   }

   section {
      @apply flex m-0 p-0 h-full w-full items-center justify-center;
   }

   section h1 {
      @apply text-2xl m-auto text-center;
   }
</style>
