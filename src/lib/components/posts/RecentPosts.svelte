<script lang="ts">
   import { goto } from "$app/navigation";

   let { title, posts, glow } = $props();

   glow = glow === null ? false : glow;
</script>

{#if posts.length}
   <h2>{title}</h2>
   <section id="RecentPosts" class={`card ${glow ? 'glow' : ''}`}>
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
   </section>
{/if}

<style>
   a {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      padding: 1rem 1rem;
      /* margin: 3rem 0; */
      /* gap: 0.33rem; */
      /* border-bottom: thin dotted var(--border); */
   }

   a:hover {
      text-decoration: none;
      /* background-color: var(--background); */
      /* border-right: thick solid var(--border); */
      /* border-bottom: thin solid var(--border); */
   }

   a > span.title {
      /* color: var(--links); */
      font-size: x-large;
      /* line-height: 1.7rem; */
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
      opacity: 0.5;
   }

   a:active span[itemprop="category"],
   a:hover span[itemprop="category"] {
      color: var(--orange);
      opacity: 1;
   }

   a > span[itemprop="date"] {
      display: flex;
      flex-direction: row;
      color: var(--text-muted);
      opacity: 0.5;
      font-size: medium;
   }
</style>
