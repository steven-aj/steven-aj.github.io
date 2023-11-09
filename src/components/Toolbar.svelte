<script>
   import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
   import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";
   import SvelteFa from "svelte-fa";

   export let store;
</script>

{#if $store.toolbar}
   <AppBar shadow="shadow-lg">
      <svelte:fragment slot="lead">
         {#if $store.toolbar.back}
            <button title="Go back" on:click={() => history.back()}>
               <SvelteFa icon={faArrowLeft} />
            </button>
         {:else}
            <img class="logo" alt="steven-aj" src="/assets/logo.svg" />
         {/if}
         <h1>{$store.toolbar.title}</h1>
      </svelte:fragment>
      <svelte:fragment slot="trail">
         <LightSwitch />
      </svelte:fragment>
   </AppBar>
{/if}

<style lang="postcss">
   img.logo {
      @apply mx-2;
      height: 40px;
      width: auto;
   }
</style>
