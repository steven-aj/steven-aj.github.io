<script>
   import { beforeUpdate } from "svelte";
   import Shell from "$lib/shell";
   import PostCard from "$components/PostCard.svelte";

   export let data;

   let { category, posts } = data;

   function init() {
      Shell.setHero(false);
      Shell.showBackButton(true);
   }

   beforeUpdate(init);
</script>

<h2>Tag: {category}</h2>

<section class="posts">
   <div class="grid">
      {#each posts as post}
         <PostCard {post} />
      {/each}
   </div>
</section>

<style lang="postcss">
   h2 {
      @apply text-2xl text-slate-500/50 uppercase mb-4;
   }
</style>
