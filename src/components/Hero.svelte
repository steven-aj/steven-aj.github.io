<script>
   import { scale, slide } from "svelte/transition";

   export let store;
</script>

{#if $store.hero}
   <div
      class="hero"
      style={`background-image: ${
         $store.hero.cover ? `url(${$store.hero.cover})` : ""
      };`}
   >
      <!-- {#key $store.hero} -->
         <div class="content">
            <h2 in:scale>{$store.hero.title}</h2>

            {#if $store.hero.description}
               {$store.hero.description}
            {/if}

            {#if $store.hero.date}
               <time>{$store.hero.date}</time>
            {/if}

            {#if $store.hero.categories}
               <div class="categories">
                  {#each $store.hero.categories as category}
                     <a
                        class="chip variant-filled-secondary"
                        href={`/blog/category/${category}`}>{category}</a
                     >
                  {/each}
               </div>
            {/if}
         </div>
      <!-- {/key} -->
   </div>
{/if}

<style lang="postcss">
   .hero {
      @apply relative 
      w-full
      h-full
      items-center
      justify-center
      bg-cover
      bg-center
      bg-fixed
      bg-no-repeat
      shadow-inner;
      min-height: 300px;
   }

   .hero .content {
      @apply flex 
      flex-col 
      items-center 
      justify-center
      gap-6
      py-12
      w-full 
      h-full
      bg-surface-500/70;
   }

   .hero h2 {
      @apply max-w-2xl w-full text-center font-serif text-5xl drop-shadow-sm;
      line-height: 130%;
   }

   .hero time {
      @apply text-xs italic text-slate-200/50;
   }

   .hero .categories {
      @apply flex flex-row flex-wrap space-x-2;
   }
</style>
