<script>
   export let meta;
</script>

<header class="hero container-fluid">
   <h1>{meta.title}</h1>
   <div class="flex flex-row gap-4 my-4">
      {#if meta.demo}
         <a
            title="View a demo"
            role="button"
            class="primary"
            target="_blank"
            href={meta.demo}>Demo</a
         >
      {/if}
      {#if meta.repo}
         <a
            title="Go to the repo"
            role="button"
            class={meta.demo ? "secondary" : "primary"}
            target="_blank"
            href={meta.repo}>Repo</a
         >
      {/if}
   </div>
   <div title={`Build with ${meta.language}`} class="badge">
      Built with {meta.language}
   </div>
</header>

<style lang="postcss">
   header {
      /* Container */
      @apply flex flex-col ;

      /* Alignments */
      @apply items-center justify-center;

      /* Margins */
      @apply gap-2 mb-14;
   }

   header h1 {
      @apply my-0 text-center;
   }
</style>
