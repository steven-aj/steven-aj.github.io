<script>
   import { beforeUpdate } from "svelte";
   import App from "$lib/store";
   import PostCard from "$components/PostCard.svelte";
   import { fade } from "svelte/transition";

   export let data;

   let { posts, categories } = data;
   let ready = false;

   function init() {
      App.showBackButton(false);
      App.setHero(false);
      setTimeout(() => (ready = true), 100);
   }

   beforeUpdate(init);
</script>

{#if ready}
   <div transition:fade>
      {#if data}
         {#if categories}
            <section class="categories">
               <h2>Tags:</h2>
               {#each categories as category}
                  <a class="chip" href={`/blog/category/${category}`}
                     >{category}</a
                  >
               {/each}
            </section>
         {/if}

         <section class="posts">
            <div class="grid">
               {#each posts as post}
                  <PostCard {post} />
               {/each}
            </div>
         </section>
      {/if}
   </div>
{/if}

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
</style>
