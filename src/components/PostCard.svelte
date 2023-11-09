<script>
   export let post;
</script>

<a title={post.title} href={post.path}>
   <article class="card">
      {#if post.cover}
         <header>
            <img alt={post.title} src={post.cover} />
         </header>
      {/if}

      <section>
         {#if post.categories}
            <div class="categories">
               <span class="badge variant-filled-secondary">
                  {post.categories[0]}
               </span>
               <span class="text-xs text-slate-500/50">
                  +{post.categories.length - 1} more
               </span>
            </div>
         {/if}
         <h3>{post.title}</h3>
         {#if post.excerpt}
            <blockquote>{post.excerpt}</blockquote>
         {/if}
      </section>

      <footer>
         <time>{post.date}</time>
      </footer>
   </article>
</a>

<style lang="postcss">
   a {
      @apply flex !w-fit;
   }

   article {
      @apply overflow-hidden;
   }

   article:hover {
      @apply shadow-2xl;
   }

   article header {
      @apply flex flex-col p-0;
   }

   article h3 {
      @apply text-xl my-4;
   }

   article .categories {
      @apply flex flex-row justify-between items-center;
   }

   article footer time {
      @apply my-2 text-surface-500 text-xs;
   }
</style>
