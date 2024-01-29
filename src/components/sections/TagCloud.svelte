<script>
   import { createEventDispatcher } from "svelte";

   export let tags;

   let dispatch = createEventDispatcher();
</script>

<section>
   <h2>Tag Cloud</h2>
   {#if tags.length}
      <div class="tags">
         {#each tags as tag}
            <a class="chip" href={`/journal/tags/${tag}`} on:click={() => dispatch('select')}>{tag}</a>
         {/each}
      </div>
   {/if}
</section>