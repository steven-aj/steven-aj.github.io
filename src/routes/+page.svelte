<script>
   import { onMount } from "svelte";
   import { fade } from "svelte/transition";
   import App from "$lib/store";
   import ProfileCard from "$components/ProfileCard.svelte";
   import PostCard from "$components/PostCard.svelte";

   export let data;
   let quoteReady;
   $: quoteReady;
   let { meta, profile, quotes, content, posts } = data;

   function randomQuote(quoteSection) {
      const list = quoteSection.querySelectorAll("blockquote");
      const show = Math.floor(Math.random() * list.length);
      let counter = 0;

      for (let item of list) {
         item.classList.add("hidden");
         if (counter === show) item.classList.remove("hidden");
         counter++;
      }

      quoteSection.classList.remove("!hidden");
   }

   function init() {
      App.setHero(false);
      App.showBackButton(false);
   }

   onMount(init);
</script>

<svelte:head>
   <meta name="title" content={meta.title} />
   <meta name="author" content={meta.author} />
   <meta name="keywords" content={meta.keywords} />
   <meta name="description" content={meta.description} />
</svelte:head>

<!-- <main> -->
<section>
   <ProfileCard {profile} />
</section>

<section class="quotes !hidden" in:fade use:randomQuote>
   {#each quotes as quote}
      <blockquote>{quote}</blockquote>
   {/each}
</section>

<section class="posts">
   <h2>Recent Posts</h2>
   <div class="grid">
      {#each posts as post}
         <PostCard {post} />
      {/each}
   </div>
</section>

<!-- </main> -->

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
      @apply flex items-center justify-center max-w-3xl w-full mx-auto;
      height: 300px;
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
