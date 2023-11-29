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

   let { posts, tags, recent } = data;
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

<h1 class="page-heading">Blog</h1>

<main class="container-fluid" in:fade>
   <aside>
      <section id="tags">
         <h2>Tag Cloud</h2>
         <div class="wrapper">
            {#each tags as tag}
               <a class="primary badge" href={`/blog/tags/${tag}`}>{tag}</a>
            {/each}
         </div>
      </section>

      <section id="recent">
         <h2>Recent Posts</h2>
         <div class="wrapper">
            <ul>
               {#each recent as post}
                  <li>
                     <a href={post.path}>{post.title}</a>
                  </li>
               {/each}
            </ul>
         </div>
      </section>
   </aside>
   
   {#if data}
      {#if posts.length}
         <section id="posts" class="container-fluid" transition:fade>
            {#each posts as post}
               <PostCard {post} />
            {/each}
         </section>
      {:else}
         <EmptyNotice />
      {/if}
   {/if}
</main>

<style lang="postcss">
   main {
      /* Container */
      @apply flex flex-col-reverse lg:grid lg:grid-cols-12;

      /* Spacing */
      @apply gap-2;
   }

   main aside {
      /* Container */
      @apply flex flex-col col-span-2 lg:block;

      /* Paddings */
      @apply px-4;
   }

   main aside button {
      @apply lg:hidden;
   }

   main aside h2 {
      @apply text-lg opacity-50;
   }

   main aside section#tags {
      @apply items-center;
   }

   main aside section#tags .wrapper {
      /* Container */
      @apply flex flex-wrap;

      /* Alignments */
      @apply justify-center;

      /* Spacing */
      @apply gap-2;
   }

   main aside section#tags .badge {
      @apply hover:no-underline;
   }

   main aside section#recent {
      @apply flex flex-col;
   }

   main aside section#recent .wrapper {
      @apply contents space-y-4;
   }

   section#posts {
      /* Container */
      @apply flex flex-col md:grid md:grid-cols-2 md:col-span-10;

      /* Margins */
      @apply gap-4;
   }
</style>
