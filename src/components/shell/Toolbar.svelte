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
         <ul class="hidden md:flex md:flex-row md:items-center md:justify-center">
            <li>
               <a href="/">
                  <img
                     title="Go Home"
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
         <menu>
            {#if menu.lead}
               {#each menu.lead as menuItem}
                  <li>
                     <a
                        title={menuItem.label}
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
                        title={menuItem.label}
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
            <li class="float-right md:float-none">
               <ThemeButton />
            </li>
         </menu>
      </nav>
   </header>
{/if}

<style lang="postcss">
   header {
      /* Alignments */
      @apply sticky top-0 left-0 z-50;

      /* Paddings */
      @apply p-0;

      /* Background */
      background-color: var(--background-color);

      /* Effects */
      transition: box-shadow 1.33s, var(--theme-mode);
   }

   header nav {
      /* Container */
      @apply flex flex-col md:flex-row;

      /* Alignments */
      @apply items-center;

      /* Padding */
      @apply py-0 px-4;

   }

   .logo {
      @apply w-6 h-auto;
   }

   header nav menu {
      /* Sizing */
      @apply w-full md:w-auto;; 

      /* Alignments */
      @apply justify-between items-center md:justify-end;
   }

   header nav menu a {
      @apply m-auto;
      transition: all 1s;
   }
</style>
