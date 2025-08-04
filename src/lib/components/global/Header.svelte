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
      >
         <Settings size="28" color={`var(--pink)`} aria-label="Settings Icon" />
      </a>
   </div>

   <nav aria-label="Main Menu">
      {#each staticConfig.links as link}
         <a href={link.route} data-active={page.url.pathname == link.route}
            >{link.name}</a
         >
      {/each}
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
      background: -webkit-linear-gradient(
         to bottom right,
         var(--pink),
         var(--deep-purple)
      );
      background: linear-gradient(
         to bottom right,
         var(--pink),
         var(--deep-purple)
      );
      padding: 0 1rem;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: var(--purple);
   }

   h1 a:hover,
   h1 a:focus {
      text-decoration: none;
      background: -webkit-linear-gradient(
         to top right,
         var(--pink),
         var(--deep-purple),
         var(--background)
      );
      background: linear-gradient(
         to top right,
         var(--pink),
         var(--deep-purple),
         var(--background)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }

   nav {
      justify-self: center;
      align-self: center;
      grid-row: 2;
      display: flex;
      word-break: none;
      gap: 1rem;
      height: 100%;
      width: 93%;
      border-radius: 1rem;
      padding: 1rem 0;
   }

   nav > a {
      font-family: Anta;
      text-transform: uppercase;
      font-size: large;
      color: var(--orange);
      padding: 1rem;
      border-radius: 0.5rem;
   }

   nav > a:hover,
   nav > a:active {
      color: var(--pink);
      background-color: var(--background);
   }

   nav > a[data-active="true"] {
      font-weight: bolder;
      // text-shadow: 2px 2px 2px var(--pink);
      color: var(--pink);
      background-color: var(--background);
      box-shadow: 2px 2px 2px var(--pink);
   }

   @media screen and (max-width: 450px) {
      header {
         display: flex;
         flex-direction: column;
         gap: 1rem;
      }
   }
</style>
