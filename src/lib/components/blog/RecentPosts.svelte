<script lang="ts">
   import Censor, { cleanDocument } from "$lib/services/Censor";
   import { onMount } from "svelte";

   let { title, posts, glow } = $props();

   glow = glow === null ? false : glow;

   onMount(() => cleanDocument());
</script>

{#if posts.length}
   <article id="RecentPosts">
      <h2>{title}</h2>
      <section class={`card ${glow ? "glow" : ""}`}>
         <!-- <ul> -->
         {#each posts as post}
            <a href={post.path} aria-label="Blog Post Link">
               <span class={`category ${post.category.toLowerCase()}`}>
                  {post.category}
               </span>
               <span class="title">
                  {@html Censor.cleanProfanity(post.title)}
               </span>
               <span class="date">
                  {post.date.toLocaleDateString("en-US", {
                     dateStyle: "full",
                  })}
               </span>
            </a>
         {/each}
         <!-- </ul> -->
      </section>
   </article>
{/if}

<style>
   a {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      /* color: var(--light-blue); */
      border-radius: 1rem 0 1rem 0;
      /* border-left: thick solid; */
      /* border-right: thick solid; */
      /* border-color: transparent; */
   }

   a:active,
   a:hover {
      /* color: var(--purple); */
      text-decoration: none;
      /* border-color: var(--orange); */
   }

   a span {
      hyphens: auto;
      text-align: justify;
      word-wrap: break-word;
   }

   a > span.title {
      font-size: x-large;
      color: var(--light-purple);
   }

   a:active > span.title,
   a:hover > span.title {
      font-weight: bolder;
      color: var(--blue);
      text-shadow: 0 0 5px var(--blue);
   }

   .category {
      display: flex;
      flex-direction: row;
      color: var(--text-muted);
      text-transform: uppercase;
      font-size: medium;
      text-decoration: none;
      opacity: 0.6;
   }

   a:active .category,
   a:hover .category {
      opacity: 1;
      text-decoration: none !;
   }

   .category.tutorial {
      color: var(--green);
   }

   .category.news {
      color: var(--orange);
   }

   .category.rant {
      color: var(--red);
   }

   .category.meta {
      color: var(--yellow);
   }

   a > .date {
      display: flex;
      flex-direction: row;
      text-decoration: none;
      margin-top: 0.1rem;
      color: var(--off-white);
      opacity: 0.6;
      font-size: 0.875em;
   }
</style>
