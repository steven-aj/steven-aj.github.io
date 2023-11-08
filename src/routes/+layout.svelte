<script>
   import "../app.postcss";
   import {
      AppShell,
      AppBar,
      LightSwitch,
      autoModeWatcher,
   } from "@skeletonlabs/skeleton";
   import App from "$lib/store";
   import Hero from "$components/Hero.svelte";
   import MainMenu from "$components/MainMenu.svelte";

   let { store } = App;
</script>

<svelte:head>
   {@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
</svelte:head>

<AppShell>
   <svelte:fragment slot="header">
      <AppBar shadow="shadow-lg">
         <svelte:fragment slot="lead">
            <h1>Steven A.J.</h1>
         </svelte:fragment>
         <svelte:fragment slot="trail">
            <LightSwitch />
         </svelte:fragment>
      </AppBar>
   </svelte:fragment>

   <svelte:fragment slot="pageHeader">
      <Hero {store} />
   </svelte:fragment>

   <svelte:fragment slot="sidebarLeft">
      <MainMenu />
   </svelte:fragment>

   <slot />

   <svelte:fragment slot="pageFooter">
      <footer>
         <span>Copyright 2023 Steven Johnson. All rights reserved.</span>
      </footer>
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
