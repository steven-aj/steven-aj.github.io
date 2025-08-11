<script lang="ts">
   import "highlight.js/styles/atom-one-dark.css";
   import Header from "$lib/components/global/Header.svelte";
   import Footer from "$lib/components/global/Footer.svelte";
   import { fade } from "svelte/transition";
   import { quintIn } from "svelte/easing";
   import { onMount } from "svelte";

   let { children, data } = $props();

   function setTheme(theme: string) {
      document.documentElement.setAttribute("data-theme", theme);
   }

   function autoTheme() {
      const darkMode = window.matchMedia(
         "(prefers-color-scheme: dark)",
      ).matches;
      setTheme(darkMode ? "dark" : "light");
   }

   onMount(() => {
      if (!localStorage.getItem("censor")) {
         localStorage.setItem("censor", "true");
      }

      if (!localStorage.getItem("theme")) {
         localStorage.setItem("censor", "auto");
      }

      // Initial load
      if (document.documentElement.dataset.theme === "auto") {
         autoTheme();
      }

      document.documentElement.dataset.theme =
         localStorage.getItem("theme") || "auto";

      // React to system changes
      window
         .matchMedia("(prefers-color-scheme: dark)")
         .addEventListener("change", (e) => {
            if (
               document.documentElement.dataset.theme ===
               localStorage.getItem("theme")
            )
               return;
            if (document.documentElement.dataset.theme === "auto") {
               setTheme(e.matches ? "dark" : "light");
            }
         });

      requestAnimationFrame(() => {
         document.documentElement.setAttribute('data-ready', 'true');
      });
   });
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
