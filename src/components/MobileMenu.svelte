<script>
   import { page } from "$app/stores";
   import { TabAnchor, TabGroup } from "@skeletonlabs/skeleton";
   import SvelteFa from "svelte-fa";

   export let menu;
</script>

{#if menu}
   <div class="mobile-menu">
      <TabGroup
         justify="justify-center"
         active="variant-filled-primary"
         hover="hover:variant-filled-primary"
         flex="flex-1 lg:flex-none"
         class="bg-surface-100-800-token w-full"
         rounded=""
         border=""
      >
         {#if menu.lead}
            {#each menu.lead as menuItem}
               <TabAnchor
                  href={menuItem.anchor}
                  title={menuItem.label}
                  selected={$page.route.id === menuItem.anchor}
               >
                  <svelte:fragment slot="lead">
                     <span class="icon">
                        <SvelteFa icon={menuItem.icon} />
                     </span>
                  </svelte:fragment>
                  <span>{menuItem.label}</span>
               </TabAnchor>
            {/each}
         {/if}

         {#if menu.trail}
            {#each menu.trail as menuItem}
               <TabAnchor
                  href={menuItem.anchor}
                  title={menuItem.label}
                  selected={$page.route.id === menuItem.anchor}
               >
                  <svelte:fragment slot="lead">
                     <span class="icon">
                        <SvelteFa icon={menuItem.icon} />
                     </span>
                  </svelte:fragment>
                  <span>{menuItem.label}</span>
               </TabAnchor>
            {/each}
         {/if}
      </TabGroup>
   </div>
{/if}

<style lang="postcss">
   .mobile-menu {
      @apply contents md:!hidden;
   }

   .icon {
      @apply flex justify-center;
   }

   .lead,
   .trail {
      @apply flex;
   }
</style>
