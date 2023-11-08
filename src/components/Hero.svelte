<script>
   // import { base } from "$app/paths";
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
      <div class="content">
         <h2 in:scale>{$store.hero.title}</h2>

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
   </div>
{/if}

<style lang="postcss">
   .hero {
      @apply relative 
      w-full
      h-full
      items-center
      justify-center
      bg-auto
      bg-left
      bg-fixed
      bg-no-repeat
      shadow-inner
      !bg-slate-500;
      height: 300px;
   }

   .hero .content {
      @apply flex 
      flex-col 
      items-center 
      justify-center
      gap-6
      w-full 
      h-full 
      bg-surface-600/60;
   }

   .hero h2 {
      @apply font-serif text-5xl drop-shadow-md;
   }

   .hero time {
      @apply text-xs italic;
   }

   .hero .categories {
      @apply flex flex-row flex-wrap space-x-2;
   }
</style>
