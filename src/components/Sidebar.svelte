<script>
   import { slide } from "svelte/transition";

   export let store;

   function toUpperCase(category) {
      return category.charAt(0).toUpperCase() + category.substring(1);
   }
</script>

{#if $store.categories}
   <div class="sidebar" transition:slide={{ axis: "x", duration: 200 }}>
      <h3>Categories</h3>
      <ul>
         {#each $store.categories as category}
            <li>
               <a href={`/blog/category/${category}`}
                  >{toUpperCase(category)}</a
               >
            </li>
         {/each}
      </ul>
   </div>
{/if}

<style lang="postcss">
   .sidebar {
      @apply flex flex-col w-full h-full border-l-2 border-solid border-surface-500/10 p-4;
   }

   .sidebar h3 {
      @apply text-surface-400;
   }

   .sidebar ul {
      @apply space-y-2 my-4 px-4;
   }

   .sidebar ul a {
      @apply text-tertiary-500 text-sm;
   }
</style>
