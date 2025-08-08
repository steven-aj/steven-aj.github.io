<script>
   export let data;

   const { meta, entries } = data;
</script>

<article>
   <h2>This Month</h2>

   {#each entries as entry}
      <section class="journal card">
         <h3>
            {new Date(entry.meta.date).toLocaleDateString("en-US", {
               dateStyle: "full",
            })}
         </h3>
         <div>
            <svelte:component this={entry.content} />
         </div>
      </section>
   {/each}
</article>

<style>
   section:not(:first-child ){
      margin: 4rem 0;
   }
</style>
