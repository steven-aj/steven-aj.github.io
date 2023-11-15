<script>
   import { faStar } from "@fortawesome/free-solid-svg-icons";
   import SvelteFa from "svelte-fa";
   export let lab;
</script>

<a title={lab.title} href={lab.path}>
   {#if lab.featured}
      <span title="Featured Lab" class="featured-badge">
         <SvelteFa icon={faStar} />
      </span>
   {/if}
   <article class="card">
      <section>
         <h2>{lab.title}</h2>
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
      @apply relative flex max-w-sm w-full snap-center;
   }

   a span.featured-badge {
      @apply badge variant-filled-secondary absolute p-2 -top-2 right-4 z-10;
   }

   article {
      @apply w-full overflow-hidden;
   }

   article:hover {
      @apply shadow-lg;
   }

   article header {
      @apply flex flex-col p-0;
   }

   article header img {
      @apply max-w-3xl w-full h-auto;
   }

   article h2 {
      @apply text-xl my-4;
   }

   article .tags {
      @apply flex flex-row justify-between items-center;
   }

   article footer time {
      @apply my-2 text-surface-500 text-xs;
   }
</style>
