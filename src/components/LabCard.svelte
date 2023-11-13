<script>
   export let lab;
</script>

<a title={lab.title} href={lab.path}>
   <article class="card">
      <section>
         <h3>{lab.title}</h3>
         {#if lab.description}
            <blockquote>{lab.description}</blockquote>
         {/if}
      </section>

      <footer>
         <time>{lab.language}</time>
      </footer>
   </article>
</a>

<style lang="postcss">
   a {
      @apply flex max-w-sm w-full;
   }

   article {
      @apply w-full overflow-hidden;
   }

   article:hover {
      @apply shadow-2xl;
   }

   article header {
      @apply flex flex-col p-0;
   }

   article header img {
      @apply max-w-3xl w-full h-auto;
   }

   article h3 {
      @apply text-xl my-4;
   }

   article .tags {
      @apply flex flex-row justify-between items-center;
   }

   article footer time {
      @apply my-2 text-surface-500 text-xs;
   }
</style>
