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

<section hidden>
   {#if tags.length}
      {#each tags as tag}
         <a class="chip" href={`/blog/tag/${tag}`}>{tag}</a>
      {/each}
   {/if}
</section>

{#if ready}
   {#if data}
      <header>
         <h2>Blog</h2>
         <button class="btn variant-filled-secondary">Tag Cloud</button>
      </header>

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
   header {
      @apply flex flex-col lg:flex-row lg:justify-between my-6;
   }

   header h2 {
      @apply text-4xl text-slate-500/50;
   }

   header button {
      @apply w-full lg:w-fit;
   }

   .tags {
      @apply flex flex-row gap-2 overflow-y-auto mt-4 mb-6 py-4;
   }

   .tags a.chip {
      @apply variant-filled-secondary 
      hover:variant-filled-tertiary;
   }
</style>
