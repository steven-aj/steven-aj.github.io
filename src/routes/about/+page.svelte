<script>
   import { onMount } from "svelte";
   import Shell from "$lib/shell";
    import { fade } from "svelte/transition";

   export let data;

   let { meta, content } = data;

   function init() {
      Shell.showBackButton(false);
      Shell.setHero({
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
</svelte:head>

<main class="container" in:fade>
   <section>
      <svelte:component this={content} />
   </section>
</main>
