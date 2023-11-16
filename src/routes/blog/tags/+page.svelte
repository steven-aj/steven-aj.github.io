<script>
   import TagCard from "$components/cards/TagCard.svelte";

   export let data;

   let { tags } = data;
</script>

<div class="grid">
   {#each tags as tag}
      <TagCard {tag} />
   {/each}
</div>

<style lang="postcss">
   .grid {
      @apply grid-cols-5;
   }
</style>
