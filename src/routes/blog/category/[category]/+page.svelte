<script>
   import { beforeUpdate } from "svelte";
   import App from "$lib/store";
   import PostCard from "$components/PostCard.svelte";

   export let data;

   let { category, posts } = data;

   function init() {
      App.setHero(false);
   }

   beforeUpdate(init);
</script>

<h2>Category: {category}</h2>

<div class="grid">
   {#each posts as post}
      <PostCard {post} />
   {/each}
</div>

<style lang="postcss">
   h2 {
      @apply text-2xl text-slate-500/50 uppercase mb-4;
   }

   .grid {
      @apply grid-cols-3 lg:grid-cols-5;
   }
</style>
