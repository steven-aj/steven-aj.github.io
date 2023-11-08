<script>
   import CategoryCard from "$components/CategoryCard.svelte";

   export let data;

   let { categories } = data;
</script>

<div class="grid">
   {#each categories as category}
      <CategoryCard {category} />
   {/each}
</div>

<style lang="postcss">
   .grid {
      @apply grid-cols-5;
   }
</style>
