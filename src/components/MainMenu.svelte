<script>
   import { page } from "$app/stores";
   import { AppRail, AppRailAnchor } from "@skeletonlabs/skeleton";
   import SvelteFa from "svelte-fa";

   export let menu;
</script>

{#if menu}
<div class="main-menu">
   <AppRail>
      <svelte:fragment slot="lead">
         {#if menu.lead}
            {#each menu.lead as menuItem}
               <AppRailAnchor
                  href={menuItem.anchor}
                  title={menuItem.label}
                  selected={($page.route.id === menuItem.anchor)}
               >
                  <svelte:fragment slot="lead">
                     <SvelteFa icon={menuItem.icon} />
                  </svelte:fragment>
                  {menuItem.label}
               </AppRailAnchor>
            {/each}
         {/if}
      </svelte:fragment>

      <svelte:fragment slot="trail">
         {#if menu.trail}
            {#each menu.trail as menuItem}
               <AppRailAnchor
                  href={menuItem.anchor}
                  title={menuItem.label}
                  selected={($page.route.id === menuItem.anchor)}
               >
                  <svelte:fragment slot="lead">
                     <SvelteFa icon={menuItem.icon} />
                  </svelte:fragment>
                  {menuItem.label}
               </AppRailAnchor>
            {/each}
         {/if}
      </svelte:fragment>
   </AppRail>
   </div>
{/if}

<style lang="postcss">
   .main-menu {
      @apply hidden md:contents;
   }
</style>