<script>
   let { title, news } = $props();
</script>

{#if title}
   <h2>{title}</h2>
{/if}

<div class="grid">
   {#each news.posts as article}
      <a href={article.path}>
         <article>
            <span class={`category ${article.category}`}
               >{article.type}/{article.category}</span
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
      border: medium solid;
      border-color: transparent;
   }

   .grid a article h3 {
      text-align: center;
      font-size: 16pt;
      color: var(--pink);
      font-family: FallingSky;
   }

   .grid a:hover,
   .grid a:active {
      scale: 1.02;
      border-radius: 2rem 0 2rem 0;
      background-color: var(--background-alt);
   }

   .grid a:hover article h3,
   .grid a:active article h3 {
      color: var(--orange);
      text-decoration: underline;
   }

   .grid a:hover article .category,
   .grid a:active article .category {
      opacity: 1;
   }

   .grid a article span {
      opacity: 0.5;
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