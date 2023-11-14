<script>
   import { beforeUpdate } from "svelte";
   import { fade } from "svelte/transition";
   import { Drawer, getDrawerStore } from "@skeletonlabs/skeleton";
   import Shell from "$lib/shell";
   import PostCard from "$components/PostCard.svelte";
   import EmptyNotice from "$components/EmptyNotice.svelte";
   import TagCloud from "$components/TagCloud.svelte";

   export let data;

   let drawer = getDrawerStore();

   let { posts, tags } = data;
   let ready = false;

   function openTagCloud() {
      drawer.open();
   }

   function init() {
      Shell.showBackButton(false);
      Shell.setHero(false);
      setTimeout(() => (ready = true), 100);
   }

   beforeUpdate(init);
</script>

<Drawer position="right" width="max-w-md w-full">
   <TagCloud {tags} on:select={() => drawer.close()}/>
</Drawer>

{#if ready}
   {#if data}
      <header>
         <h2>Blog</h2>
         <button class="btn variant-filled-secondary" on:click={openTagCloud}
            >Tag Cloud</button
         >
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
      @apply relative flex flex-col md:flex-row md:justify-between my-6 p-4;
   }

   header h2 {
      @apply text-4xl text-slate-500/50;
   }

   header button {
      @apply w-full my-6 md:my-0 md:w-fit;
   }
</style>
