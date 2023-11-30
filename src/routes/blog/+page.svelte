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

   let { meta, content, posts, tags, recent } = data;
   let ready = false;

   function init() {
      Shell.showBackButton(false);
      Shell.setHero(false);
      setTimeout(() => (ready = true), 100);
   }

   beforeUpdate(init);
</script>

<svelte:head>
   <title>{meta.title}</title>
   <meta name="title" content={meta.title} />
   <meta name="author" content={meta.author} />
   <meta name="keywords" content={meta.keywords} />
   <meta name="description" content={meta.description} />
</svelte:head>

<h1 class="page-heading">{meta.title}</h1>

<div class="content">
   <aside>
      <section id="tags">
         <h2>Tag Cloud</h2>
         <div class="wrapper">
            {#each tags as tag}
               <a
                  title={`Posts tagged "${tag}"`}
                  class="primary badge"
                  href={`/blog/tags/${tag}`}>{tag}</a
               >
            {/each}
         </div>
      </section>

      <section id="recent">
         <h2>Recent Posts</h2>
         <div class="wrapper">
            <ul class="list-none p-0">
               {#each recent as post}
                  <li>
                     <a title={`Blog Post: ${post.title}`} href={post.path}>{post.title}</a>
                  </li>
               {/each}
            </ul>
         </div>
      </section>
   </aside>

   <main class="container-fluid" in:fade>
      {#if data}
         {#if posts.length}
            {#each posts as post}
               <PostCard {post} />
            {/each}
         {:else}
            <EmptyNotice />
         {/if}
      {/if}
   </main>
</div>

<style lang="postcss">
   div.content {
      /* Container */
      @apply flex flex-col-reverse lg:grid lg:grid-cols-12;

      /* Spacing */
      @apply gap-2;
   }

   aside {
      /* Container */
      @apply flex flex-col col-span-2 lg:block;

      /* Paddings */
      @apply px-4;
   }

   aside button {
      @apply lg:hidden;
   }

   aside h2 {
      @apply text-lg opacity-50;
   }

   aside section#tags {
      @apply items-center;
   }

   aside section#tags .wrapper {
      /* Container */
      @apply flex flex-wrap;

      /* Alignments */
      @apply justify-center;

      /* Spacing */
      @apply gap-2;
   }

   aside section#tags .badge {
      @apply hover:no-underline;
   }

   aside section#recent {
      @apply flex flex-col;
   }

   aside section#recent .wrapper {
      @apply contents space-y-4;
   }

   main {
      /* Container */
      @apply flex flex-col md:grid md:grid-cols-2 md:col-span-10;

      /* Margins */
      @apply gap-4;
   }
</style>
