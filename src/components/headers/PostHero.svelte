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
      @apply relative flex flex-col mt-0 p-0 items-center justify-end h-96 bg-cover bg-center bg-fixed rounded-tl-lg rounded-tr-lg;
   }

   header .content {
      @apply backdrop-blur-2xl backdrop-brightness-50 py-10 px-4 my-0 w-full text-center;
   }

   header h1 {
      @apply my-0 text-neutral-200;
   }

   header time {
      @apply opacity-50 text-neutral-100 text-xs italic font-serif;
   }

   header .tags {
      @apply flex flex-row flex-wrap my-4 gap-2 p-2 justify-center items-center;
   }
</style>
