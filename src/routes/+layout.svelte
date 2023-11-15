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
   import Hero from "$components/Hero.svelte";

   export let data;

   let { hljs } = data;
   storeHighlightJs.set(hljs);

   let { menu, store } = Shell;
   let { title, author, keywords } = data;

   initializeStores();

   function init() {
      Shell.setToolbar({
         back: false,
         title,
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
   <meta name="title" content={title} />
   <meta name="author" content={author} />
   <meta name="keywords" content={keywords} />
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
