<script>
   export let tag;
</script>

<a href={`/blog/tags/${tag}`}>
   <article class="card">
      <header>
         <h3>{tag}</h3>
      </header>
   </article>
</a>