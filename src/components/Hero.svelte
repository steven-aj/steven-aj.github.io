<script>
   import { scale } from "svelte/transition";

   export let store;
</script>

{#if $store.hero}
   <div
      class="hero"
      data-cover={$store.hero.cover ? "true" : "false"}
      style={`background-image: ${
         $store.hero.cover ? `url(${$store.hero.cover})` : ""
      };`}
   >
      <div class="content">
         <!-- {#key $store.hero} -->
            <h1 in:scale>{$store.hero.title}</h1>
         <!-- {/key} -->

         {#if $store.hero.description}
            <p class="description">{$store.hero.description}</p>
         {/if}

         {#if $store.hero.tags}
            <div class="tags">
               {#each $store.hero.tags as tag}
                  <a
                     class="chip variant-filled-secondary"
                     title={tag}
                     href={`/blog/tags/${tag}`}>{tag}</a
                  >
               {/each}
            </div>
         {/if}

         {#if $store.hero.date}
            <time>{$store.hero.date}</time>
         {/if}
      </div>
   </div>
{/if}

<style lang="postcss">
   /**********************************
   * Default Styles
   **********************************/
   .hero {
      /* Container */
      @apply relative;

      /* Sizing */
      @apply w-full h-full;

      /* Decoration */
      @apply shadow-inner;
   }

   .hero .content {
      /* Size */
      @apply w-full h-full;

      /* Position */
      @apply relative;

      /* Decoration */
      @apply variant-glass-surface;
   }

   .hero h1 {
      /* Size */
      @apply max-w-2xl w-full;

      /* Typography */
      @apply font-bold text-5xl;
      line-height: 130%;
   }

   .hero p.description {
      @apply text-center;
   }

   .hero .tags .chip {
      @apply shadow-lg;
   }

   .hero time {
      /* Typography */
      @apply text-xs italic;

      /* Decoration */
      @apply drop-shadow-lg;
   }

   /**********************************
   * WITH Cover
   **********************************/
   .hero[data-cover="true"] {
      /* Background (Cover) */
      @apply bg-fixed bg-cover bg-center bg-no-repeat bg-blend-exclusion bg-surface-100-800-token;
   }

   .hero[data-cover="true"] .content {
      /* Container */
      @apply relative flex flex-col items-center justify-center;

      /* Inner Alignment */
      @apply md:gap-6 p-4;

      /* Gradient Direction */
      @apply bg-gradient-to-t;

      /* Color Stops */
      @apply from-surface-900 via-surface-900/70 to-surface-900/10;

      min-height: 384px;
   }

   .hero[data-cover="true"] h1 {
      /* Container */
      @apply lg:max-w-5xl;

      /* Position */
      @apply m-auto md:absolute md:bottom-10 md:left-6;

      /* Spacing */
      @apply my-4 md:my-0;

      /* Typography */
      @apply text-center break-words md:text-start md:break-normal;
   }

   .hero[data-cover="true"] p.description {
      /* Position */
      @apply relative md:absolute md:left-10 md:bottom-4;
   }

   .hero[data-cover="true"] .tags {
      /* Container */
      @apply flex flex-row flex-wrap;

      /* Position */
      @apply relative items-center justify-center md:absolute md:top-4 md:left-4;

      /* Spacing */
      @apply my-4 md:my-0 gap-2;
   }

   .hero[data-cover="true"] time {
      /* Position */
      @apply relative md:absolute md:bottom-6 md:right-6;

      /* Spacing */
      @apply my-4 md:my-0;

      /* Typography */
      @apply text-slate-200;
   }

   /**********************************
   * WITHOUT Cover
   **********************************/
   .hero[data-cover="false"] {
      @apply shadow-inner;
   }

   .hero[data-cover="false"] .content {
      /* Container */
      @apply flex flex-col;

      /* Alignment */
      @apply justify-center items-center;

      /* Sizing */
      @apply min-h-max;

      /* Spacing */
      @apply gap-6 px-4 py-12;
   }

   .hero[data-cover="false"] h1 {
      /* Typography */
      @apply text-center;
   }

   .hero[data-cover="false"] time {
      @apply text-slate-500;
   }
</style>
