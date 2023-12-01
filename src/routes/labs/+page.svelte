<script>
   import { onMount } from "svelte";
   import App from "$lib/shell";
   import LabCard from "$components/cards/LabCard.svelte";
   import EmptyNotice from "$components/sections/EmptyNotice.svelte";
   import { fade } from "svelte/transition";

   export let data;

   let { meta, content, labs } = data;

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
   <meta name="author" content={meta.author} />
   <meta name="keywords" content={meta.keywords} />
   <meta name="description" content={meta.description} />
   <title>{meta.title} | {meta.author}</title>
</svelte:head>

<h1 class="page-heading">{meta.title}</h1>

<main class="container-fluid" in:fade>
   {#if labs.length}
      <section id="labs" class="labs container">
         <div class="grid">
            {#each labs as lab}
               <LabCard {lab} />
            {/each}
         </div>
      </section>
   {:else}
      <EmptyNotice showIcon={false} title={false} />
   {/if}
</main>