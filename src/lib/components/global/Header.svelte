<script lang="ts">
   import { page } from "$app/state";
   import staticConfig from "$config";
   import { Settings } from "@lucide/svelte";

   let { title } = $props();
</script>

<header class="container">
   <div class="split">
      <h1><a href="/">{title}</a></h1>
      <a class="icon-btn" href="/settings" aria-label="Settings">
         <Settings size="28" color={`var(--pink)`}/>
      </a>
   </div>

   <nav>
      {#each staticConfig.links as link}
         <a href={link.route} data-active={page.url.pathname == link.route}>{link.name}</a>
      {/each}
   </nav>
</header>

<style lang="scss">
   a.icon-btn {
      display: flex;
      padding: 0.75rem;
      justify-content: center;
      align-items: center;
      border-radius: 0.5rem;
   }
   
   a.icon-btn:hover,
   a.icon-btn:active
   a.icon-btn[toggled="true"] {
      background-color: var(--background);
   }

   header {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
   }

   div.split {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
   }

   h1 {
      font-size: x-large;
      font-family: Audiowide;
      width: fit-content;
      text-transform: uppercase;
      background: -webkit-linear-gradient(to bottom right, var(--pink), var(--deep-purple));
      background: linear-gradient(to bottom right, var(--pink), var(--deep-purple));
      padding: 0 1rem;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: var(--purple);
   }

   h1 a:hover,
   h1 a:focus {
      text-decoration: none;
      background: -webkit-linear-gradient(to top right, var(--pink), var(--deep-purple), var(--background));
      background: linear-gradient(to top right, var(--pink), var(--deep-purple), var(--background));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }

   nav {
      grid-row: 2;
      display: flex;
      word-break: none;
      margin: 0.5rem 0;
      gap: 1rem;
      padding: 0.8rem 1.61rem;
      // background-color: var(--background);
      border-radius: 1rem;
      width: 100%;
      // box-shadow: 0 0 5px var(--purple);
   }

   nav > a {
      font-family: Anta;
      text-transform: uppercase;
      font-size: large;
      color: var(--orange);
   }
   
   nav > a[data-active="true"] {
      text-shadow: 3px -6px 6px var(--pink);
   }

   @media screen and (max-width: 450px) {
      header {
         display: flex;
         flex-direction: column;
         gap: 1rem;
      }
   }
</style>
