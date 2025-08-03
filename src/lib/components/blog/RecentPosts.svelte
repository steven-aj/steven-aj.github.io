<script lang="ts">
   import Censor, { cleanDocument } from "$lib/services/Censor";
    import { onMount } from "svelte";

   let { title, posts, glow } = $props();

   glow = glow === null ? false : glow;

   onMount(() => cleanDocument());
</script>

{#if posts.length}
   <h2>{title}</h2>
   <article id="RecentPosts" class={`card ${glow ? "glow" : ""}`}>
      <!-- <ul> -->
      {#each posts as post}
         <a href={post.path} aria-label="Blog Post Link">
            <span itemprop="category">{post.category}</span>
            <span class="title">{@html Censor.cleanProfanity(post.title)}</span>
            <span itemprop="date">
               {post.date.toLocaleDateString("en-US", {
                  dateStyle: "full",
               })}
            </span>
         </a>
      {/each}
      <!-- </ul> -->
   </article>
{/if}

<style>
   a {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      color: var(--light-blue);
      border-radius: 1rem 0 1rem 0;
      border-left: thick solid;
      border-right: thick solid;
      border-color: transparent;
   }

   a:active,
   a:hover {
      /* color: var(--purple); */
      text-decoration: none;
      border-color: var(--orange);
   }

   a span {
      hyphens: auto;
      text-align: justify;
      word-wrap: break-word;
   }

   a > span.title {
      font-size: x-large;
   }
   a:active > span.title,
   a:hover > span.title {
      font-weight: bolder;
      text-shadow: 0 0 9px var(--blue);
   }

   a > span[itemprop="category"] {
      display: flex;
      flex-direction: row;
      color: var(--text-muted);
      text-transform: uppercase;
      font-size: medium;
      opacity: 0.25;
      text-decoration: none;
   }

   a:active span[itemprop="category"],
   a:hover span[itemprop="category"] {
      color: var(--links);
      opacity: 1;
      text-decoration: none !;
   }

   a > span[itemprop="date"] {
      display: flex;
      flex-direction: row;
      color: var(--text-muted);
      opacity: 0.5;
      font-size: medium;
      text-decoration: none;
      margin-top: 0.1rem;
   }
</style>
