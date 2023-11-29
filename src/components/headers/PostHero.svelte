<script>
   export let meta;
</script>

<header class="hero" style={`background-image: url(${meta.cover});`}>
   <div class="content">
      <h1>{meta.title}</h1>
      <div class="tags">
         {#each meta.tags as tag}
            <a class="primary badge" href={`/blog/tags/${tag}`}>{tag}</a>
         {/each}
      </div>
      <time>Published {new Date(meta.date).toLocaleDateString()}</time>
   </div>
</header>

<style lang="postcss">
   header {
      /* Container */
      @apply relative flex flex-col;

      /* Sizing */
      @apply h-96;

      /* Paddings */
      @apply p-0;

      /* Margins */
      @apply mt-0;

      /* Alignments */
      @apply items-center justify-end;

      /* Background */
      @apply bg-cover bg-center;

      /* Border */
      @apply rounded-tl-lg rounded-tr-lg;
   }

   header .content {
      /* Sizing */
      @apply w-full;

      /* Margins */
      @apply my-0;

      /* Paddings */
      @apply py-10 px-4;

      /* Typography */
      @apply text-center;

      /* Background */
      @apply backdrop-blur-2xl backdrop-brightness-50;
   }

   header h1 {
      @apply my-0 text-neutral-200;
   }

   header time {
      @apply opacity-50 text-neutral-100 text-xs italic font-serif;
   }

   header .tags {
      /* Container */
      @apply flex flex-row flex-wrap;

      /* Alignments */
      @apply justify-center items-center;

      /* Margins */
      @apply my-4 gap-2;

      /* Paddings */
      @apply p-2;
   }
</style>
