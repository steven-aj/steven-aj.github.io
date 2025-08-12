<script lang="ts">
   import { page } from "$app/state";
   import staticConfig from "$config";
   import Settings from "@lucide/svelte/icons/settings";

   let { title } = $props();
</script>

<header>
   <div class="split">
      <h1><a href="/">{title}</a></h1>
      <a
         class="icon-btn"
         href="/settings"
         role="button"
         aria-label="Site Settings"
         data-active={page.url.pathname == "/settings"}
      >
         <Settings
            size="28"
            color={`${page.url.pathname === "/settings" ? "var(--pink)" : "var(--text-muted)"}`}
            aria-label="Settings Icon"
         />
      </a>
   </div>

   <nav aria-label="Main Menu">
      <ul>
         {#each staticConfig.links as link}
            <li>
               <a href={link.route} data-active={page.url.pathname == link.route}
                  >{link.name}</a
               >
            </li>
         {/each}
      </ul>
   </nav>
</header>

<style lang="scss">
   header {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
      margin-bottom: 1rem;
   }

   div.split {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
   }

   h1 {
      font-size: x-large;
      font-family: Audiowide;
      width: fit-content;
      text-transform: uppercase;
      padding: 0 1rem;
   }

   h1 a {
      color: var(--text-muted);
   }

   h1 a:hover,
   h1 a:active,
   h1 a:focus {
      background: -webkit-linear-gradient(
         to bottom right,
         var(--pink),
         var(--purple)
      );
      background: linear-gradient(to bottom right, var(--pink), var(--purple));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }

   nav {
      justify-self: center;
      grid-row: 2;
      border-radius: 1rem;
      // padding: 1rem 0;
   }
   
   nav ul {
      display: flex;
      flex-wrap: wrap;
      // word-break: none;
      gap: 1rem;
      height: 100%;
      // width: 93%;
      list-style: none;
   }

   nav ul li {
      margin: 1rem 0;
   }

   nav ul li a {
      font-family: Anta;
      text-transform: uppercase;
      align-self: center;
      justify-self: center;
      font-size: large;
      color: var(--orange);
      padding: 1rem;
      border-radius: 0.5rem;
      flex: auto auto fit-content;
   }

   nav ul li a:hover,
   nav ul li a:active {
      color: var(--purple);
      background-color: var(--background);
   }

   nav ul li a[data-active="true"] {
      font-weight: bolder;
      color: var(--pink);
      background-color: var(--background);
      box-shadow: 1px 1px 1px var(--pink);
   }

   a[role="button"][data-active="true"] {
      box-shadow: inset -2px -2px 2px var(--pink);
   }

   @media screen and (max-width: 450px) {
      header {
         display: flex;
         flex-direction: column;
         gap: 1rem;
      }
   }
</style>
