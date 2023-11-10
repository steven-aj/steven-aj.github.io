<script>
   export let lab;
</script>

<a title={lab.title} href={lab.path}>
   <article class="card">
      {#if lab.meta.screenshot}
         <header>
            <img alt={`Screenshot of ${lab.meta.title}`} src={lab.meta.screenshot} />
         </header>
      {/if}

      <section>
         <h3>{lab.title}</h3>
         {#if lab.description}
            <blockquote>{lab.description}</blockquote>
         {/if}
      </section>

      <footer>
         <time>{lab.language}</time>
      </footer>
   </article>
</a>

<style lang="postcss">
   article {
      @apply overflow-hidden;
   }

   article:hover {
      @apply shadow-2xl;
   }

   article header {
      @apply flex flex-col p-0;
   }

   article h3 {
      @apply text-xl my-4;
   }

   article .tags {
      @apply flex flex-row justify-between items-center;
   }

   article footer time {
      @apply my-2 text-surface-500 text-xs;
   }
</style>
