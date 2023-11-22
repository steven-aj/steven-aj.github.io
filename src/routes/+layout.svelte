<script>
   import "../default.postcss";
   import "highlight.js/styles/atom-one-dark.css";
   import { onMount } from "svelte";
   import { beforeNavigate, afterNavigate } from "$app/navigation";
   import Shell from "$lib/shell";
   import Toolbar from "$components/shell/Toolbar.svelte";
   // import Hero from "$components/shell/Hero.svelte";

   export let data;

   const { hljs, meta } = data;
   const { menu, store } = Shell;

   function init() {
      Shell.setToolbar({
         back: false,
         title: meta.title,
      });
   }

   beforeNavigate(() => {
      Shell.setLoading(true);
   });

   afterNavigate(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
      Shell.setLoading(false);
   });

   onMount(init);
</script>

<svelte:head>
   <meta name="title" content={meta.title} />
   <meta name="author" content={meta.author} />
   <meta name="keywords" content={meta.keywords} />
</svelte:head>

<Toolbar {store} {menu} />

<slot />

<footer>
   <span>Copyright &copy 2023 Steven Johnson. All rights reserved.</span>
</footer>

<style>
   @import "/styles/pico.min.css";

   footer {
      text-align: center;
      padding: 1rem 0;
   }
</style>
