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