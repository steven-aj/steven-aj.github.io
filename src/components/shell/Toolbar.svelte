<script>
   import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
   import { fly } from "svelte/transition";
   import { afterNavigate } from "$app/navigation";
   import SvelteFa from "svelte-fa";

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

   afterNavigate(({ to }) => {
      const links = document.querySelectorAll("#links > li > a");
      for (let i = 0; i < links.length; i++) {
         if (to.route.id === links[i].getAttribute("href")) {
            links[i].classList.add("primary");
            links[i].classList.remove("secondary");
         } else {
            links[i].classList.add("secondary");
            links[i].classList.remove("primary");
         }
      }
   });
</script>

{#if $store.toolbar}
   <header>
      <nav use:elevator>
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
                     <a class="secondary" href={menuItem.anchor}
                        >{menuItem.label}</a
                     >
                  </li>
               {/each}
            {/if}
            {#if menu.trail}
               {#each menu.trail as menuItem}
                  <li>
                     <a href={menuItem.anchor} role="button">{menuItem.label}</a
                     >
                  </li>
               {/each}
            {/if}
         </ul>
      </nav>
   </header>
{/if}

<style>
   header {
      padding: 0 1rem;
      z-index: 1000;
      position: sticky;
      top: 0;
      left: 0;
      transition: all 0.55s;
      background-color: var(--background-color);
   }

   .logo {
      width: 23px;
      height: auto;
   }

   #links a {
      transition: all 1s;
   }
</style>
