<script>
   import { onMount } from "svelte";
   import { fade } from "svelte/transition";
   import App from "$lib/shell";
   import ContributionCard from "$components/cards/ContributionCard.svelte";
   import EmptyNotice from "$components/sections/EmptyNotice.svelte";

   export let data;

   let { meta, content, contributions } = data;

   function init() {
      App.showBackButton(false);
      App.setHero({
         title: meta.title,
         date: `Last updated: ${meta.date}`,
         cover: meta.cover,
         description: meta.description,
      });
   }

   onMount(init);
</script>

<svelte:head>
   <meta name="title" content={meta.title} />
   <!-- <meta name="author" content={meta.author} /> -->
   <!-- <meta name="keywords" content={meta.keywords} /> -->
   <!-- <meta name="description" content={meta.description} /> -->
   <title>{meta.title} | {meta.author}</title>
</svelte:head>

<h1 class="page-heading">{meta.title}</h1>

<main class="container-fluid" in:fade>
   {#if contributions.length}
      <section id="labs" class="labs container">
         <div class="grid">
            {#each contributions as contribution}
               <ContributionCard {contribution} />
            {/each}
         </div>
      </section>
   {:else}
      <EmptyNotice showIcon={false} title={false} />
   {/if}
</main>