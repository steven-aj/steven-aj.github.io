<script>
   import { scale } from "svelte/transition";

   export let store;
</script>

{#if $store.hero}
   <div
      class="hero"
      data-cover={$store.hero.cover ? "true" : "false"}
      style={`background-image: ${
         $store.hero.cover ? `url(${$store.hero.cover})` : ""
      };`}
   >
      <div class="content">
         <!-- {#key $store.hero} -->
            <h1 in:scale>{$store.hero.title}</h1>
         <!-- {/key} -->

         {#if $store.hero.description}
            <p class="description">{$store.hero.description}</p>
         {/if}

         {#if $store.hero.tags}
            <div class="tags">
               {#each $store.hero.tags as tag}
                  <a
                     class="chip variant-filled-secondary"
                     title={tag}
                     href={`/blog/tags/${tag}`}>{tag}</a
                  >
               {/each}
            </div>
         {/if}

         {#if $store.hero.date}
            <time>{$store.hero.date}</time>
         {/if}
      </div>
   </div>
{/if}

<style>
   
</style>
