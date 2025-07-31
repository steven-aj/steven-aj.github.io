<script>
   export let post;
</script>

{#if post}
   <article>
      <a href={post.path}>
         {post.title}
      </a>

      <!-- {post.excerpt} -->
   </article>
{/if}

<style>
   article {
      /* display: flex; */
      /* flex-direction: column; */
      /* justify-content: space-between; */
      margin-left: 3rem;
   }

   article::before {
      color: var(--text-muted);
      content: "► ";
   }
</style>
