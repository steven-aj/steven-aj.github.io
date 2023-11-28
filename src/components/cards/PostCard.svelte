<script>
   export let post;
</script>

<a class="card" href={post.path}>
   <article>
      <section style={`${post.cover ? `background-image: url(${post.cover});` : ''}`}>
         <h1>{post.title}</h1>
      </section>
   
      <footer>
         {#if post.tags}
            <div class="tags">
               <span>
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
   a.card {
      @apply contents h-full;
   }

   article {
      @apply relative m-0;
   }
   
   section {
      @apply rounded-lg overflow-hidden bg-cover bg-center bg-blend-multiply m-0 p-0 h-full w-full;
      box-shadow: inset 0rem 0rem 0.5rem rgba(0,0,0, 0.75);
   }

   section h1 {
      @apply flex p-4 backdrop-blur-lg backdrop-brightness-50 text-neutral-200 text-xl w-full h-full items-center justify-center m-auto text-center self-center;
      transition: opacity 1s;
   }

   article footer .tags {
      @apply space-x-2;
   }

   article footer time {
      @apply text-neutral-500;
   }
</style>
