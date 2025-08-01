<script lang="ts">
   import { on } from "svelte/events";

   let { title, settingsModal } = $props();
</script>

<header class="container">
   <div class="split">
      <h1><a href="/">{title}</a></h1>
      <button onclick={() => settingsModal.toggle()}>Settings</button>
   </div>

   <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/posts">The Dump</a>
   </nav>
</header>

<style lang="scss">
   header {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 100%;
   }

   div.split {
      display: inline-flex;
      justify-content: space-between;
      width: 100%;
   }

   h1 {
      font-size: x-large;
      font-family: Audiowide;
      width: fit-content;
      text-transform: uppercase;
      background: -webkit-linear-gradient(to bottom right, var(--orange), var(--purple));
      background: linear-gradient(to bottom right, var(--orange), var(--purple));
      padding: 0 1rem;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }

   h1 a:hover,
   h1 a:focus {
      text-decoration: none;
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
   }

   @media screen and (max-width: 450px) {
      header {
         display: flex;
         flex-direction: column;
         gap: 1rem;
      }
   }
</style>
