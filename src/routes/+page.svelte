<script>
   import { onMount } from "svelte";
   import { fade } from "svelte/transition";
   import Shell from "$lib/shell";
   import LabCard from "$components/cards/LabCard.svelte";
   import ProfileCard from "$components/cards/ProfileCard.svelte";
   import PostCard from "$components/cards/PostCard.svelte";

   export let data;
   let { meta, profile, quotes, content, posts, labs } = data;

   // function randomQuote(quoteSection) {
   //    const list = quoteSection.getElementsByTagName("blockquote");

   //    setInterval(() => {
   //       const random = Math.floor(Math.random() * list.length);
   //       quoteSection
   //          .querySelector(`blockquote[data-index="${random}"]`)
   //          .classList.toggle("!invisible", "!hidden");
   //    }, 3000);
   // }

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

<main in:fade>
   <section class="container">
      <ProfileCard {profile} />
   </section>

   <section class="container text-center my-14">
      <svelte:component this={content} />
   </section>

   <section class="quotes">
      {#each quotes as quote, i}
         <blockquote data-index={i} class="!hidden !invisible">
            {quote}
         </blockquote>
      {/each}
   </section>

   {#if labs.length}
      <section id="labs" class="labs container">
         <h2>Featured Labs</h2>
         <div class="grid">
            {#each labs as lab}
               <LabCard {lab} />
            {/each}
         </div>
         <!-- <a title="View Labs" href="/labs" role="button">View Labs</a> -->
      </section>
   {/if}

   {#if posts.length}
      <section id="posts" class="posts container-fluid">
         <h2 class="text-center md:text-start">Recent Posts</h2>
         <div class="grid">
            {#each posts as post}
               <PostCard {post} />
            {/each}
         </div>
         <!-- <a title="All Posts" href="/blog" role="button">All Posts</a> -->
      </section>
   {/if}
</main>

<style lang="postcss">
   a[role="button"] {
      /* Container */
      @apply flex;

      /* Alignments */
      @apply self-center justify-center;

      /* Sizing */
      @apply max-w-lg w-full;

      /* Margins */
      @apply mx-auto my-10;
   }
</style>
