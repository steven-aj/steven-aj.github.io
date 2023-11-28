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

<h1 class="container-fluid">Tagged: {tag}</h1>

<main class="container-fluid">
   <section id="posts">
      <div class="grid">
         {#each posts as post}
            <PostCard {post} />
         {/each}
      </div>
   </section>
</main>

<style lang="postcss">
   h1 {
      @apply my-4;
   }
</style>
