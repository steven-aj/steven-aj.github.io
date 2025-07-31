<script lang="ts">
   export let title;
</script>

<header class="container-fluid">
   <h1><a href="/">{title}</a></h1>

   <nav class="container-fluid">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/posts">The Dump</a>
   </nav>
</header>

<style lang="scss">
   header {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.75rem;
      margin-bottom: 2rem;
   }

   header > h1 {
      font-size: x-large;
      padding: 0;
      margin: 0;
      font-family: Audiowide;
      text-transform: uppercase;
      background: -webkit-linear-gradient(var(--links), var(--border));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
   }

   header > nav {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
   }

   header > nav > a {
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
