<script>
   import { onMount } from "svelte";
   import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
   import SvelteFa from "svelte-fa";
   import App from "$lib/store";
   import PostCard from "$components/PostCard.svelte";

   export let data;
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

<main>
   <section class="card">
      <img class="headshot" alt="headshot" src={profile.cover} />
      <div class="content">
         <h2>{profile.title}</h2>
         <p class="tagline">{profile.tagline}</p>
         <div class="contact-options">
            {#if profile.email}
               <a
                  role="button"
                  title="Email me"
                  href={`mailto:${profile.email}`}
               >
                  <SvelteFa icon={faEnvelope} />
               </a>
            {/if}
         </div>
      </div>
   </section>

   <section class="quotes" use:randomQuote>
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
</main>

<style lang="postcss">
   main {
      @apply flex flex-col gap-10;
   }

   section.card {
      @apply lg:grid
      lg:grid-cols-2
      md:flex 
      md:flex-col
      md:items-center 
      md:justify-center 
      max-w-2xl 
      w-full 
      mx-auto
      shadow-2xl
      p-8;
   }

   section.card img.headshot {
      @apply mx-auto
      border-8
      border-solid 
      border-primary-500;
      width: 150px;
      height: auto;
      border-radius: 50%;
   }

   section.card .content {
      @apply flex flex-col items-center lg:items-start my-4;
   }

   section.card h2 {
      @apply h2;
   }

   section.card .tagline {
      @apply text-slate-500;
   }

   section.card .content .contact-options {
      @apply grid grid-flow-col my-2;
   }

   section.card .contact-options a[role="button"] {
      @apply variant-soft-primary
      w-fit
      p-2
      my-4 
      rounded-lg
      hover:variant-filled-secondary
      hover:shadow-lg;
   }

   section.quotes {
      @apply flex items-center justify-center max-w-3xl w-full mx-auto;
      height: 300px;
   }

   section.quotes blockquote {
      @apply italic font-serif text-3xl text-center text-slate-500/50 leading-10;
   }

   section.posts {
      @apply flex flex-col w-full gap-4 px-8;
   }

   section.posts h2 {
      @apply text-2xl text-slate-500;
   }

   section.posts .grid {
      @apply md:grid-cols-2 lg:grid-cols-3 gap-4 self-center px-4;
   }
</style>
