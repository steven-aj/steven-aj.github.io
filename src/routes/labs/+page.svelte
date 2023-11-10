<script>
   import { onMount } from "svelte";
   import App from "$lib/shell";

   export let data;

   let { labs } = data;

   function init() {
      App.setHero(false);
   }

   onMount(init);
</script>
