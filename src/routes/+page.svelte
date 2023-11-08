<script>
   import { onMount } from "svelte";
   import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
   import SvelteFa from "svelte-fa";
   import App from "$lib/store";
   import PostCard from "$components/PostCard.svelte";

   export let data;
   let { meta, profile, posts } = data;

   function init() {
      App.setHero(false);
      App.setCategories(false);
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
      <h2>{profile.title}</h2>
      <p class="tagline">{profile.tagline}</p>
      <div class="contact-options">
         {#if profile.email}
            <a role="button" href={`mailto:${profile.email}`}>
               <SvelteFa icon={faEnvelope} />
            </a>
         {/if}
      </div>
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
      @apply flex 
      flex-col 
      items-center 
      justify-center 
      max-w-2xl 
      w-full 
      mx-auto 
      gap-4
      shadow-2xl
      p-8;
   }

   section.card img.headshot {
      @apply border-4 border-solid border-primary-500/50;
      width: 150px;
      height: auto;
      border-radius: 50%;
   }

   section.card h2 {
      @apply h2;
   }

   section.card .tagline {
      @apply text-slate-500;
   }

   section.card .contact-options {
      @apply grid grid-flow-col;
   }

   section.card .contact-options a[role="button"] {
      @apply variant-filled-tertiary 
      p-2 
      rounded-lg
      hover:variant-filled-secondary 
      hover:shadow-lg;
   }

   section.posts {
      @apply flex flex-col w-full gap-4 px-8;
   }

   section.posts h2 {
      @apply text-2xl text-slate-500;
   }

   section.posts .grid {
      @apply grid-cols-5 grid-flow-dense items-center justify-center self-center mx-auto px-4;
   }
</style>
