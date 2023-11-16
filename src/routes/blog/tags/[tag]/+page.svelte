<script>
   import { beforeUpdate } from "svelte";
   import Shell from "$lib/shell";
   import PostCard from "$components/cards/PostCard.svelte";

   export let data;

   let { tag, posts } = data;

   function init() {
      Shell.setHero(false);
      Shell.showBackButton(true);
   }

   beforeUpdate(init);
</script>


<section class="posts">
   <header>
      <h1>Tagged: {tag}</h1>
   </header>
   <div class="grid">
      {#each posts as post}
         <PostCard {post} />
      {/each}
   </div>
</section>

<style lang="postcss">
   /* header {
      @apply relative flex flex-col md:flex-row md:justify-between my-6 p-4;
   } */

   /* header h2 {
      @apply text-4xl text-slate-500/50;
   } */
</style>
