<script>
   import { scale, slide } from "svelte/transition";

   export let store;
</script>

{#if $store.hero}
   <div
      class="hero"
      data-cover={$store.hero.cover ? "true" : "false"}
      data-bg={$store.hero.cover}
      style={`background-image: ${
         $store.hero.cover ? `url(${$store.hero.cover})` : ""
      };`}
   >
      <div class="content">
         <h2 in:scale>{$store.hero.title}</h2>

         {#if $store.hero.description}
            <p class="description">{$store.hero.description}</p>
         {/if}

         {#if $store.hero.date}
            <time>{$store.hero.date}</time>
         {/if}

         {#if $store.hero.categories}
            <div class="categories">
               {#each $store.hero.categories as category}
                  <a
                     class="chip variant-filled-secondary"
                     title={category}
                     href={`/blog/category/${category}`}>{category}</a
                  >
               {/each}
            </div>
         {/if}
      </div>
   </div>
{/if}

<style lang="postcss">
   /**********************************
   * Default Styles
   **********************************/
   .hero {
      @apply relative 
      w-full
      h-full
      items-center
      justify-center
      bg-cover
      bg-center
      bg-no-repeat
      shadow-inner;
      min-height: 400px;
   }

   .hero .content {
      /* Position */
      @apply relative;

      /* Gradient Direction */
      @apply bg-gradient-to-br;

      /* Color Stops */
      @apply from-surface-900/70 via-surface-900/90 to-surface-900;
   }

   .hero h2 {
      /* Size */
      @apply max-w-2xl w-full;

      /* Typography */
      @apply font-bold text-5xl;
      line-height: 130%;

      /* Decoration */
      @apply drop-shadow-lg;

      /* Gradient */
      @apply bg-clip-text text-transparent box-decoration-clone;
      /* Direction */
      @apply bg-gradient-to-br;
      /* Color Stops */
      @apply from-primary-600 via-primary-700 to-primary-800;
   }

   .hero p.description {
      @apply text-center;
   }

   .hero time {
      /* Typography */
      @apply text-xs italic text-slate-500;

      /* Decoration */
      @apply drop-shadow-lg;
   }

   /**********************************
   * Hero WITH a Cover
   **********************************/
   .hero[data-cover="true"] .content {
      /* Size */
      @apply w-full h-full;

      /* Alignment */
      @apply gap-6 p-4;
      
   }

   .hero[data-cover="true"] h2 {
      /* Size */
      @apply lg:max-w-5xl;

      /* Position */
      @apply absolute bottom-10 left-6;

      /* Typography */
      @apply text-start;
   }

   .hero[data-cover="true"] time {
      /* Position */
      @apply absolute bottom-6 right-4;

      /* Typography */
      @apply text-xs italic text-slate-500;

      /* Decoration */
      @apply drop-shadow-lg;
   }

   .hero[data-cover="true"] p.description {
      /* Position */
      @apply absolute left-10 bottom-4;
   }

   .hero[data-cover="true"] .categories {
      /* Position */
      @apply absolute top-4 left-4;

      /* Decoration*/
      @apply space-x-2;
   }

   /**********************************
   * Hero WITHOUT a Cover
   **********************************/
   .hero[data-cover="false"] .content {
      @apply flex 
      flex-col 
      items-center 
      justify-center
      gap-6
      py-12
      px-4;
   }

   .hero[data-cover="false"] h2 {
      /* Typography */
      @apply text-center;
   }
</style>
