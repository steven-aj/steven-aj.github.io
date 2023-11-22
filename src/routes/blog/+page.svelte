<script>
   import { beforeUpdate } from "svelte";
   import { fade } from "svelte/transition";
   // import { Drawer, getDrawerStore } from "@skeletonlabs/skeleton";
   import Shell from "$lib/shell";
   import PostCard from "$components/cards/PostCard.svelte";
   import EmptyNotice from "$components/sections/EmptyNotice.svelte";
   import TagCloud from "$components/sections/TagCloud.svelte";

   export let data;

   // let drawer = getDrawerStore();

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

<!-- <Drawer position="right" width="max-w-md w-full">
   <TagCloud {tags} on:select={() => drawer.close()} />
</Drawer> -->

<main class="container" in:fade>
   {#if data}
      {#if posts.length}
         <section class="container posts" transition:fade>
            <header>
               <h1>Blog</h1>
               <button
                  class="btn variant-filled-secondary"
                  on:click={openTagCloud}>Tag Cloud</button
               >
            </header>
            <div class="row">
               {#each posts as post}
                  <PostCard {post} />
               {/each}
            </div>
         </section>
      {:else}
         <EmptyNotice />
      {/if}
   {/if}
</main>

<style>
</style>
