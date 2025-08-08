<script lang="ts">
   export let data;
   const { meta, entries } = data;
</script>

<svelte:head>
   <title>{data.title}/Blog</title>
   <meta name="title" content={data.title} />
   <meta name="author" content={data.author} />
   <meta name="keywords" content={data.keywords} />
   <meta name="description" content={data.description} />
</svelte:head>

<article>
   <h2>This Month</h2>

   {#if entries.length}
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
   {/if}
</article>

<style>
   section:not(:first-child) {
      margin: 4rem 0;
   }
</style>
