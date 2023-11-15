<script>
   export let post;
</script>

<a title={post.title} href={post.path}>
   <article class="card">
      {#if post.cover}
         <header>
            <img src={post.cover} alt={post.title} />
         </header>
      {/if}

      <section>
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
      @apply shadow-lg;
   }

   article header {
      @apply flex flex-col p-0;
   }

   article header img {
      @apply brightness-75;
   }

   article h3 {
      @apply text-xl my-4;
   }

   article .tags {
      @apply flex flex-row justify-between items-center;
   }

   article footer time {
      @apply my-2 text-slate-500 text-xs;
   }
</style>
