<script>
   import { faStar } from "@fortawesome/free-solid-svg-icons";
   import SvelteFa from "svelte-fa";
   export let lab;
</script>

<a title={lab.title} href={lab.path}>
   <article class="card">
      <section>
         {#if lab.featured}
            <span title="Featured Lab" class="featured-badge">
               <SvelteFa icon={faStar} />
            </span>
         {/if}
         <h2>{lab.title}</h2>
         <p class="!text-neutral-500 text-center">
            {#if lab.description}
               {lab.description}
            {/if}
         </p>
      </section>

      <footer>
         <p aria-hidden="true">{lab.language}</p>
      </footer>
   </article>
</a>

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

   article section * {
      /* Margins */
      @apply m-auto;

      /* Typography */
      @apply text-center
   }
</style>
