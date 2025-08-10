<script lang="ts">
   import Censor, { cleanDocument } from "$lib/services/Censor";
   import { onMount } from "svelte";

   let { title, posts, card, glow } = $props();

   glow = glow ? "glow" : "";
   card = card ? "card" : "";

   onMount(() => cleanDocument());
</script>

{#if posts.length}
   <article id="RecentPosts">
      {#if title}
         <h2>{title}</h2>
      {/if}
      <section class={`${card} ${glow}`}>
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
      </section>
   </article>
{/if}

<style>
   section {
      border-bottom: thin dotted var(--border);
   }
   a {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      border-radius: 1rem 0 1rem 0;
   }

   a:active,
   a:hover {
      text-decoration: none;
   }

   a span {
      hyphens: auto;
      text-align: justify;
      word-wrap: break-word;
   }

   a > span.title {
      font-size: x-large;
      color: var(--pink);
   }

   a:active > span.title,
   a:hover > span.title {
      font-weight: bolder;
      color: var(--pink);
      text-shadow: 0 0 5px var(--pink);
   }

   .category {
      display: flex;
      flex-direction: row;
      color: var(--text-muted);
      text-transform: uppercase;
      font-size: medium;
      text-decoration: none;
   }

   a:active .category,
   a:hover .category {
      text-decoration: none !;
   }

   .category.tutorial {
      color: var(--green);
   }

   .category.news {
      color: var(--orange);
   }

   .category.rant {
      color: var(--purple);
   }

   .category.meta {
      color: var(--yellow);
   }

   .category.gaming {
      color: var(--light-blue);
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
