<script>
   export let contribution;
</script>

<a title={contribution.title} href={contribution.path} class="card" aria-label="article">
   <article class="custom" role="contentinfo">
      <section
         style={`${contribution.screenshot ? `background-image: url(${contribution.screenshot});` : ""}`}
      >
         <div class="backdrop">
            <h1>{contribution.title}</h1>
            <div class="tags" role="presentation" aria-hidden="true">
               <a
                  aria-hidden="true"
                  title={`More contributions tagged "${contribution.skills[0]}"`}
                  href={`/contributions/skills/${contribution.skills[0]}`}
                  class="badge primary"
               >
                  {contribution.skills[0]}
               </a>
               <span title={contribution.skills.slice(1, contribution.skills.length)} aria-hidden="true" class="text-xs text-neutral-400">
                  +{contribution.skills.length - 1} more
               </span>
            </div>
            <a class="employer-link" title={`While at ${contribution.employer}`} href={contribution.employerUrl} target="_blank" aria-hidden="true">{contribution.employer}</a>
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
      @apply bg-cover bg-center bg-top bg-blend-multiply;

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
      @apply backdrop-blur-sm backdrop-brightness-50;

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

      /* Typography */
      @apply text-neutral-200 text-xl text-center;

      /* Effects */
      @apply hover:text-neutral-100 focus:text-neutral-100;
      transition: opacity 1s, color 1s;
   }

   section .tags {
      @apply absolute bottom-1 left-2 space-x-1;
   }

   section a.employer-link {
      @apply absolute bottom-1 right-2 text-xs;
   }
</style>
