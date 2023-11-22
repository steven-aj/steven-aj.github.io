<script>
   import { onMount } from "svelte";
   import { writable } from "svelte/store";
   import {
      faMoon,
      faSun,
      faCircleHalfStroke,
   } from "@fortawesome/free-solid-svg-icons";
   import SvelteFa from "svelte-fa";

   const mode = writable(null);

   function toggleMode(value) {
      const view = document.getElementsByTagName("html")[0];
      view.setAttribute("data-theme", value);
      $mode = value;
   }

   function getUserTheme() {
      const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
      isDarkMode.addEventListener("change", (event) => {
         const theme = event.matches ? "dark" : "light";
         toggleMode(theme);
      });
      return isDarkMode.matches ? "dark" : "light";
   }

   function init() {
      const theme = getUserTheme();
      toggleMode(theme);
   }

   onMount(init);
</script>

<button
   class="!text-black opacity-50"
   hidden={$mode === "dark"}
   on:click={() => toggleMode("dark")}
>
   <SvelteFa icon={faMoon} />
</button>

<button hidden={$mode === "light"} on:click={() => toggleMode("light")}>
   <SvelteFa icon={faSun} />
</button>

<style>
   button {
      background-color: transparent;
      border: none;
   }
</style>
