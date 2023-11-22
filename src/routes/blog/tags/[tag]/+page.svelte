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

<style>

</style>
