<script lang="ts">
    import MicroJournal from "$components/activities/MicroJournal.svelte";

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

<div>
   <h2>This Month</h2>

   {#if entries.length}
      {#each entries as daily}
         <MicroJournal title={false} {daily} card={true} />
      {/each}
   {/if}
</div>

<style>
   div {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      /* margin: 4rem 0; */
   }
</style>
