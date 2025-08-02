<script lang="ts">
   import { goto } from "$app/navigation";

   let { title, posts, glow } = $props();

   glow = glow === null ? false : glow;
</script>

{#if posts.length}
   <h2>{title}</h2>
   <article id="RecentPosts" class={`card ${glow ? "glow" : ""}`}>
      <!-- <ul> -->
      {#each posts as post}
         <a href={post.path}>
            <span itemprop="category">{post.category}</span>
            <span class="title">{post.title}</span>
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
      align-items: flex-start;
      width: 100%;
      padding: 1rem 0;
      color: var(--blue);
   }

   a:active,
   a:hover {
      color: var(--links);
      text-decoration: none;
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
      text-decoration: underline;
      font-size: x-large;
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
      color: var(--purple);
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
