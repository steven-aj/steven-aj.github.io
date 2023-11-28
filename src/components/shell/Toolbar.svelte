<script>
   import { fly } from "svelte/transition";
   import { page } from "$app/stores";
   import ThemeButton from "./ThemeButton.svelte";

   export let store;
   export let menu;

   function elevator(el) {
      window.onscroll = () => {
         if (window.scrollY >= 1) {
            if (!el.classList.contains("elevated")) {
               el.classList.add("elevated");
            }
         } else el.classList.remove("elevated");
      };
   }
</script>

{#if $store.toolbar}
   <header class="container-fluid" use:elevator>
      <nav>
         <ul class="hidden md:block">
            <li>
               <a href="/">
                  <img
                     class="logo"
                     alt="steven-aj"
                     src="/assets/logo.svg"
                     in:fly={{ x: -100 }}
                  />
               </a>
            </li>
            <li>
               <strong>{$store.toolbar.title}</strong>
            </li>
         </ul>
         <ul id="links">
            {#if menu.lead}
               {#each menu.lead as menuItem}
                  <li>
                     <a
                        href={menuItem.anchor}
                        class={$page.route.id === menuItem.anchor
                           ? "active"
                           : "secondary"}
                     >
                        {menuItem.label}
                     </a>
                  </li>
               {/each}
            {/if}
            {#if menu.trail}
               {#each menu.trail as menuItem}
                  <li>
                     <a
                        href={menuItem.anchor}
                        class={$page.route.id.includes(menuItem.anchor)
                           ? "active"
                           : "secondary"}
                     >
                        {menuItem.label}
                     </a>
                  </li>
               {/each}
            {/if}
            <li>
               <ThemeButton />
            </li>
         </ul>
      </nav>
   </header>
{/if}

<style lang="postcss">
   header {
      @apply sticky top-0 left-0 p-0 z-50;
      transition: box-shadow 1.33s, var(--theme-mode);
      background-color: var(--background-color);
   }

   header nav {
      @apply flex flex-col items-center md:flex-row py-0 px-4;
   }

   .logo {
      @apply w-6 h-auto;
   }

   #links a {
      transition: all 1s;
   }
</style>
