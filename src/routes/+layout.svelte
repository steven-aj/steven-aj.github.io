<script>
   import "../app.postcss";
   import "highlight.js/styles/atom-one-dark.css";
   import {
      AppShell,
      autoModeWatcher,
      storeHighlightJs,
   } from "@skeletonlabs/skeleton";
   import { afterUpdate, onMount } from "svelte";
   import { afterNavigate } from "$app/navigation";
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

   function init() {
      Shell.setToolbar({
         back: false,
         title,
      });
   }

   afterNavigate(() =>
      document.getElementById("page").scrollTo({ top: 0, behavior: "instant" })
   );

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
         <span>Copyright 2023 Steven Johnson. All rights reserved.</span>
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
      @apply text-surface-500;
   }
</style>
