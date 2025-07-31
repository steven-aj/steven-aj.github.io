<script lang="ts">
    import { goto } from "$app/navigation";

    export let title: string;
   export let posts;
</script>

{#if posts.length}
   <section id="RecentPosts">
      <h2>{title}</h2>
      <!-- <ul> -->
         {#each posts as post}
            <a href={post.path}>
               <span itemprop="category">{post.category}</span>
               <span class="title">{post.title}</span>
               <span itemprop="date">{post.date.toLocaleDateString('en-US', { dateStyle: "full" })}</span>
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
      padding: 0 1rem;
   }

   a:hover {
      text-decoration: none;
      background-color: var(--background);
      border-right: thick solid var(--border);
      border-bottom: thin solid var(--border);
   }

   a > span.title {
      color: var(--links);
      font-size: x-large;
   }

   a:hover > span.title {
      text-decoration: underline;
      color: var(--links);
      font-size: x-large;
   }

   a > span[itemprop="category"] {
      display: flex;
      flex-direction: row;
      color: var(--text-muted);
      margin-bottom: -0.5rem;
      text-transform: uppercase;
      font-size: medium;
   }

   a:hover span[itemprop="category"] {
      color: var(--code);
   }
   
   a > span[itemprop="date"] {
      display: flex;
      flex-direction: row;
      color: var(--text-muted);
      opacity: 0.5;
      font-size: medium;
   }

</style>