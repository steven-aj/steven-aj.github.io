<script>
   import { onMount } from "svelte";
   import App from "$lib/store";

   export let data;

   let { meta, content } = data;

   function init() {
      App.setHero({
         title: meta.title,
         date: meta.date,
         description: meta.description
      })
   }

   onMount(init);
</script>

<svelte:head>
   <meta name="title" content={meta.title} />
   <meta name="author" content={meta.author} />
   <meta name="keywords" content={meta.keywords} />
   <meta name="description" content={meta.description} />
</svelte:head>

<main id="Experience">
   <svelte:component this={content} />
</main>
