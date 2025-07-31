<script>
   import "highlight.js/styles/atom-one-dark.css";
   import Header from "$lib/components/global/Header.svelte";
   import Footer from "$lib/components/global/Footer.svelte";
   import { fade } from "svelte/transition";
   import { quintIn } from "svelte/easing";

   let { children, data } = $props();

   console.log(data.gh);
</script>

<svelte:head>
   <title>{data.title}</title>
   <meta name="title" content={data.title} />
   <meta name="author" content={data.author} />
   <meta name="keywords" content={data.keywords} />
</svelte:head>

<Header title={data.title} />

{#key data.path.pathname}
   <main in:fade={{ easing: quintIn }}>
      {@render children()}
   </main>
{/key}

<Footer copyright={data.copyright} github={data.gh} />

<style lang="scss">
   @use "static/styles/default.scss";

   main {
      display: flex;
      flex-direction: column;
   }
</style>
