<script>
   let { news } = $props();
</script>

<h2>Recent News</h2>
<div class="grid">
   {#each news.posts as article}
      <a href={article.path}>
         <article>
            <span class={`category ${article.category}`}
               >{article.category}</span
            >
            <h3>{article.title}</h3>
            <span class="date">{article.dateStr}</span>
         </article>
      </a>
   {/each}
</div>

<style>
   .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
   }

   .grid a {
      flex: 1 1 fit-content;
      justify-content: center;
      align-items: center;
      background-color: var(--background);
      padding: 1rem;
   }

   .grid a article h3 {
      text-align: center;
      font-size: 15pt;
      color: var(--pink);
   }

   .grid a:hover,
   .grid a:active {
      box-shadow: 4px 6px 0 var(--deep-purple);
   }

   .grid a:hover article h3,
   .grid a:active article h3 {
      color: var(--purple);
      text-shadow: 1px 2px 6px var(--purple);
   }

   .grid a article span {
      opacity: 0.5;
   }

   .grid a:hover article .category,
   .grid a:active article .category {
      opacity: 1;
   }

   .grid a article .category {
      text-transform: uppercase;
   }

   .category.alert {
      color: var(--yellow);
   }

   .category.open-source {
      color: var(--blue);
   }

   .grid a article .date {
      display: flex;
      color: var(--text-muted);
      justify-content: flex-end;
   }
</style>