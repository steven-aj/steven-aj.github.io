<script>
   import "../default.postcss";
   import "prism-themes/themes/prism-atom-dark.min.css";
   import { onMount } from "svelte";
   import Shell from "$lib/shell";
   import Toolbar from "$components/shell/Toolbar.svelte";

   export let data;

   const { meta } = data;
   const { menu, store } = Shell;

   function init() {
      Shell.setToolbar({
         back: false,
         title: meta.title,
      });
   }

   onMount(init);
</script>

<Toolbar {store} {menu} />

<slot />

<footer class="container-fluid">
   <div>
      <a title="Terms of Use" href="/terms-of-use">Terms of Use</a>
   </div>
   <span>Copyright &copy 2023 Steven Johnson. All rights reserved.</span>
</footer>

<style>
   @import "/styles/pico.min.css";

   footer {
      font-size: 0.75rem;
      text-align: center;
      padding: 1rem 0;
      opacity: 0.5;
   }
</style>