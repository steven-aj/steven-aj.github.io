<script>
   import { beforeUpdate } from "svelte";
   import { fade } from "svelte/transition";
   import Shell from "$lib/shell";
   import PostCard from "$components/PostCard.svelte";
   import EmptyNotice from "$components/EmptyNotice.svelte";

   export let data;

   let { posts, tags } = data;
   let ready = false;

   function init() {
      Shell.showBackButton(false);
      Shell.setHero(false);
      setTimeout(() => (ready = true), 100);
   }

   beforeUpdate(init);
</script>

{#if ready}
      {#if data}
         {#if tags.length}
            <section class="tags">
               <h2>Tags:</h2>
               {#each tags as tag}
                  <a class="chip" href={`/blog/tag/${tag}`}>{tag}</a>
               {/each}
            </section>
         {/if}

         {#if posts.length}
            <section class="posts" transition:fade>
               <div class="grid">
                  {#each posts as post}
                     <PostCard {post} />
                  {/each}
               </div>
            </section>
         {:else}
            <EmptyNotice />
         {/if}
      {/if}
{/if}

<style lang="postcss">
   .tags {
      @apply flex flex-row gap-2 overflow-y-auto mt-4 mb-6 py-4;
   }

   .tags h2 {
      @apply text-slate-500/50;
   }

   .tags a.chip {
      @apply variant-filled-secondary 
      hover:variant-filled-tertiary;
   }
</style>
