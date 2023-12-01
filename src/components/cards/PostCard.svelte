<script>
   export let post;
</script>

<a title={post.title} href={post.path} class="card" aria-label="article">
   <article class="custom" role="contentinfo">
      <section
         style={`${post.cover ? `background-image: url(${post.cover});` : ""}`}
      >
         <div class="backdrop">
            <h1>{post.title}</h1>
            <div class="tags" role="presentation" aria-hidden="true">
               <a
                  aria-hidden="true"
                  title={`More posts tagged "${post.tags[0]}"`}
                  href={`/blog/tags/${post.tags[0]}`}
                  class="badge primary"
               >
                  {post.tags[0]}
               </a>
               <span title={post.tags.slice(1, post.tags.length)} aria-hidden="true" class="text-xs text-neutral-400">
                  +{post.tags.length - 1} more
               </span>
            </div>
            <time title={`Published on ${post.date}`} role="presentation" aria-hidden="true">{post.date}</time>
         </div>
      </section>
   </article>
</a>

<style lang="postcss">
   a.card {
      /* Container */
      @apply contents;

      /* Sizing */
      @apply h-full;
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

      /* Effects */
      @apply hover:hover:shadow-xl;
      transition: box-shadow 1s;
   }

   section .backdrop {
      /* Container */
      @apply relative flex flex-col;

      /* Sizing */
      @apply w-full h-full;

      /* Alignments */
      @apply items-center justify-center self-center;

      /* Margins */
      @apply m-auto;

      /* Paddings */
      @apply px-4 py-10;

      /* Background */
      @apply backdrop-blur-lg backdrop-brightness-50;

      /* Effects */
      @apply hover:backdrop-brightness-0 focus:backdrop-brightness-0;
      transition: opacity 1s, background-color 1s, backdrop-filter 1s;
   }

   section h1 {
      /* Container */
      @apply flex;

      /* Sizing */
      @apply w-full h-full;

      /* Alignments */
      @apply items-center justify-center self-center;

      /* Margins */
      @apply m-auto my-6;

      /* Paddings */
      /* @apply p-4; */

      /* Typography */
      @apply text-neutral-200 text-xl text-center;

      /* Effects */
      @apply hover:text-neutral-100 focus:text-neutral-100;
      transition: opacity 1s, color 1s;
   }

   section .tags {
      @apply absolute bottom-1 left-2 space-x-1;
   }

   section time {
      @apply absolute bottom-1 right-2 text-xs text-neutral-500;
   }
</style>
