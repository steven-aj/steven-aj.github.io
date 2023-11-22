<script>
   import "../app.postcss";
   import "highlight.js/styles/atom-one-dark.css";
   import {
      AppShell,
      autoModeWatcher,
      storeHighlightJs,
      initializeStores,
   } from "@skeletonlabs/skeleton";
   import { onMount } from "svelte";
   import { beforeNavigate, afterNavigate } from "$app/navigation";
   import Shell from "$lib/shell";
   import Toolbar from "$components/shell/Toolbar.svelte";
   import MainMenu from "$components/shell/MainMenu.svelte";
   import MobileMenu from "$components/shell/MobileMenu.svelte";
   import Hero from "$components/shell/Hero.svelte";

   export let data;

   const { hljs, meta } = data;
   const { menu, store } = Shell;

   storeHighlightJs.set(hljs);

   initializeStores();

   function init() {
      Shell.setToolbar({
         back: false,
         title: meta.title,
      });
   }

   beforeNavigate(() => {
      Shell.setLoading(true);
   })

   afterNavigate(() => {
      document.getElementById("page").scrollTo({ top: 0, behavior: "instant" });
      Shell.setLoading(false);
   });

   onMount(init);
</script>

<svelte:head>
   {@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
   <meta name="title" content={meta.title} />
   <meta name="author" content={meta.author} />
   <meta name="keywords" content={meta.keywords} />
</svelte:head>

<AppShell>
   <svelte:fragment slot="header">
      <Toolbar {store} />
   </svelte:fragment>

   <svelte:fragment slot="pageHeader">
      <Hero {store} />
   </svelte:fragment>

   <svelte:fragment slot="sidebarLeft">
      <MainMenu {menu} />
   </svelte:fragment>

   <slot />

   <svelte:fragment slot="pageFooter">
      <footer>
         <span>Copyright &copy 2023 Steven Johnson. All rights reserved.</span>
      </footer>
   </svelte:fragment>

   <svelte:fragment slot="footer">
      <MobileMenu {menu} />
   </svelte:fragment>
</AppShell>

<style lang="postcss">
   footer {
      @apply flex 
      flex-row 
      items-center 
      justify-center 
      text-xs
      p-4;
   }

   footer span {
      @apply brightness-50;
   }
</style>
