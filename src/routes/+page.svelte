<script>
   import { onMount } from "svelte";
   import { fade } from "svelte/transition";
   import Shell from "$lib/shell";
   import LabCard from "$components/LabCard.svelte";
   import ProfileCard from "$components/ProfileCard.svelte";
   import PostCard from "$components/PostCard.svelte";
   import EmptyNotice from "$components/EmptyNotice.svelte";

   export let data;
   let { meta, profile, quotes, content, posts, labs } = data;

   function randomQuote(quoteSection) {
      // let counter = 0;
      const list = quoteSection.getElementsByTagName("blockquote");
      const random = Math.floor(Math.random() * list.length);

      quoteSection
         .querySelector(`blockquote[data-index="${random}"]`)
         .classList.remove("!invisible", "!hidden");
   }

   function init() {
      Shell.setHero(false);
      Shell.showBackButton(false);
   }

   onMount(init);
</script>

<svelte:head>
   <meta name="title" content={meta.title} />
   <meta name="author" content={meta.author} />
   <meta name="keywords" content={meta.keywords} />
   <meta name="description" content={meta.description} />
</svelte:head>

{#if labs.length}
   <section class="posts">
      <h2>Featured Labs</h2>
      <div
         class="snap-x justify-center scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto px-4 py-10"
      >
         {#each labs as lab}
            <LabCard {lab} />
         {/each}
      </div>
   </section>
{/if}

{#if posts.length}
   <section class="posts">
      <h2>Recent Posts</h2>
      <div class="grid">
         {#each posts as post}
            <PostCard {post} />
         {/each}
      </div>
   </section>
{/if}

<section class="quotes" use:randomQuote>
   {#each quotes as quote, i}
      <blockquote data-index={i} class="!invisible !hidden">{quote}</blockquote>
   {/each}
</section>

<section>
   <ProfileCard {profile} />
</section>

<!-- <section class="content">
   <svelte:component this={content} />
</section> -->

<style lang="postcss">
   @keyframes fade {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }

   main {
      @apply flex flex-col gap-10;
   }

   section.quotes {
      @apply flex flex-col items-center justify-center max-w-3xl h-48 md:h-56 w-full mx-auto;
   }

   section.quotes blockquote {
      @apply italic font-serif text-3xl text-center text-slate-500/50 leading-10 border-0 shadow-none;
      transition: all;
      animation: fade 1s;
   }

   section.posts h2 {
      @apply text-center md:text-start text-3xl text-slate-500 my-8;
   }

   section.posts .grid {
      @apply md:grid-cols-2 lg:grid-cols-4 gap-8 self-center px-4;
   }
</style>
