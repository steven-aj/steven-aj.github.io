<script>
   import { faStar } from "@fortawesome/free-solid-svg-icons";
   import SvelteFa from "svelte-fa";
   export let lab;
</script>

<!-- <a title={lab.title} href={lab.path}> -->
   <article title={lab.title} class="card">
      <section>
         {#if lab.featured}
            <span title="Featured Lab" class="featured-badge">
               <SvelteFa icon={faStar} />
            </span>
         {/if}
         <h1>{lab.title}</h1>
         <p class="description">
            {#if lab.description}
               {lab.description}
            {/if}
         </p>
      </section>

      <footer>
         <p class="label" aria-hidden="true">{lab.language}</p>
         <a title="View Lab" href={lab.path}>Read More</a>
      </footer>
   </article>
<!-- </a> -->

<style lang="postcss">
   a {
      /* Container */
      @apply contents;
   }

   article {
      /* Container */
      @apply flex flex-col;

      /* Margins */
      @apply m-0;
   }

   article section {
      /* Container */
      @apply contents;

      /* Alignments */
      @apply items-center justify-center;
   }

   article section h1 {
      @apply text-xl my-4;
   }

   article section * {
      /* Margins */
      @apply m-auto;

      /* Typography */
      @apply text-center;
   }

   article section p.description {
      @apply leading-6 text-center opacity-90;
      color: var(--color) !important;
   }

   article footer p.label {
      @apply m-0;
   }

   article footer a {
      @apply p-4;
   }
</style>
