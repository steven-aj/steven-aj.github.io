<script>
   export let tag;
</script>

<a href={`/blog/tag/${tag}`}>
   <article class="card">
      <header>
         <h3>{tag}</h3>
      </header>
   </article>
</a>

<style lang="postcss">
   a {
      @apply flex !w-fit;
   }

   article {
      @apply w-fit;
   }
</style>
