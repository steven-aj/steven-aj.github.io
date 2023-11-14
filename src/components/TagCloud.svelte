<script>
   import { createEventDispatcher } from "svelte";

   export let tags;

   let dispatch = createEventDispatcher();
</script>

<h2>Tag Cloud</h2>
<section class="tags">
   {#if tags.length}
      {#each tags as tag}
         <a class="chip" href={`/blog/tags/${tag}`} on:click={() => dispatch('select')}>{tag}</a>
      {/each}
   {/if}
</section>

<style lang="postcss">
   h2 {
      @apply text-2xl m-4 text-surface-400-500-token;
   }

   .tags {
      @apply flex gap-2 flex-wrap m-4;
   }

   .tags a.chip {
      @apply variant-filled-secondary
      hover:variant-filled-tertiary;
   }
</style>
