<script>
   export let post;
</script>

<a href={post.path}>
   <article>
      <section>
         <h1>{post.title}</h1>
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
</a>

<style lang="postcss">
   a {
      @apply contents h-full;
   }

   article {
      @apply m-0;
   }

   section {
      @apply flex m-0 p-0 h-full w-full items-center justify-center;
   }

   section h1 {
      @apply text-2xl m-auto text-center opacity-50;
      transition: opacity 1s;
   }

   article:hover section h1 {
      @apply !opacity-95;
   }
</style>
