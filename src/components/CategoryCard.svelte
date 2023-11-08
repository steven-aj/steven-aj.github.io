<script>
   export let category;
</script>

<a href={`/blog/category/${category}`}>
   <article class="card">
      <header>
         <h3>{category}</h3>
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