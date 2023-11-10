<script>
   import { onMount } from "svelte";
   import { fade } from "svelte/transition";
   import Shell from "$lib/shell";
   import ProfileCard from "$components/ProfileCard.svelte";
   import PostCard from "$components/PostCard.svelte";
   import EmptyNotice from "$components/EmptyNotice.svelte";

   export let data;
   let { meta, profile, quotes, content, posts } = data;

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

<section>
   <ProfileCard {profile} />
</section>

<section class="quotes" use:randomQuote>
   {#each quotes as quote, i}
      <blockquote data-index={i} class="!invisible !hidden">{quote}</blockquote>
   {/each}
</section>

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
      @apply flex flex-col items-center justify-center max-w-3xl h-60 md:h-64 w-full mx-auto;
   }

   section.quotes blockquote {
      @apply italic font-serif text-3xl text-center text-slate-500/50 leading-10;
      transition: all;
      animation: fade 1s;
   }

   section.posts h2 {
      @apply text-center md:text-start text-2xl text-slate-500 my-4;
   }

   section.posts .grid {
      @apply md:grid-cols-2 lg:grid-cols-3 gap-4 self-center px-4;
   }
</style>
