<script>
   import {base} from '$app/paths';
   import { beforeUpdate } from "svelte";
   import App from "$lib/store";
   import PostCard from "$components/PostCard.svelte";
   import { slide } from "svelte/transition";

   export let data;

   let { posts, categories } = data;

   function init() {
      App.setHero(false);
   }

   beforeUpdate(init);
</script>

<main>
   {#if data}
      {#if categories}
         <section class="categories">
            <h2>Tags:</h2>
            {#each categories as category}
               <a class="chip" href={`${base}/blog/category/${category}`}>{category}</a
               >
            {/each}
         </section>
      {/if}

      <div class="grid" transition:slide>
         {#each posts as post}
            <PostCard {post} />
         {/each}
      </div>
   {/if}
</main>

<style lang="postcss">
   .categories {
      @apply flex flex-row gap-2 overflow-y-auto mt-4 mb-6;
   }

   .categories h2 {
      @apply text-slate-500/50;
   }

   .categories a.chip {
      @apply variant-filled-tertiary 
      hover:variant-filled-secondary;
   }

   .grid {
      @apply grid-cols-3 lg:grid-cols-5;
   }
</style>
