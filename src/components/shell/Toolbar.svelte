<script>
   import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
   import { fly } from "svelte/transition";
   import { page } from "$app/stores";
   import SvelteFa from "svelte-fa";
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
         <ul>
            <li>
               <img
                  class="logo"
                  alt="steven-aj"
                  src="/assets/logo.svg"
                  in:fly={{ x: -100 }}
               />
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
                        class={$page.route.id === menuItem.anchor
                           ? "active"
                           : "secondary"}
                        href={menuItem.anchor}>{menuItem.label}</a
                     >
                  </li>
               {/each}
            {/if}
            {#if menu.trail}
               {#each menu.trail as menuItem}
                  <li>
                     <a
                        class={$page.route.id.includes(menuItem.anchor)
                           ? "active"
                           : "secondary"}
                        href={menuItem.anchor}
                        role="button">{menuItem.label}</a
                     >
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

<style>
   header {
      z-index: 1000;
      position: sticky;
      top: 0;
      left: 0;
      transition: box-shadow 1.33s;
      background-color: var(--background-color);
      padding: 0;
   }
   
   header nav {
      padding: 0 1rem;
   }

   .logo {
      width: 23px;
      height: auto;
   }

   #links a {
      transition: all 1s;
   }
</style>
