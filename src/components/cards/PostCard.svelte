<script>
   export let post;
</script>

<a title={post.title} class="card" href={post.path}>
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
      /* Container */
      @apply contents;

      /* Sizing */
      @apply h-full;
   }

   article {
      /* Container */
      @apply relative;

      /* Margins */
      @apply m-0;
   }
   
   section {
      /* Container */
      @apply overflow-hidden;

      /* Sizing */
      @apply h-full w-full;

      /* Margins */
      @apply m-0;

      /* Paddings */
      @apply p-0;

      /* Background */
      @apply bg-cover bg-center bg-blend-multiply;

      /* Border */
      @apply rounded-lg;
      box-shadow: inset 0rem 0rem 0.5rem rgba(0,0,0, 0.75);
   }

   section h1 {
      /* Container */
      @apply flex;

      /* Sizing */
      @apply w-full h-full;

      /* Alignments */
      @apply items-center justify-center self-center;

      /* Margins */
      @apply m-auto;

      /* Paddings */
      @apply p-4;

      /* Typography */
      @apply text-neutral-200 text-xl text-center;

      /* Background */
      @apply backdrop-blur-lg backdrop-brightness-50;
      
      /* Effects */
      transition: opacity 1s;
   }

   article footer .tags {
      @apply space-x-2;
   }

   article footer time {
      @apply text-neutral-500;
   }
</style>
