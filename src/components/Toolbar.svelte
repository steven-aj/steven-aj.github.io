<script>
   import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
   import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";
   import { fly } from "svelte/transition";
   import SvelteFa from "svelte-fa";

   export let store;
</script>

{#if $store.toolbar}
   <AppBar shadow="shadow-lg">
      <svelte:fragment slot="lead">
         {#if $store.toolbar.back}
            <button
               class="go-back"
               title="Go back"
               on:click={() => history.back()}
               in:fly={{ y: -100 }}
            >
               <SvelteFa icon={faArrowLeft} />
            </button>
         {:else}
            <img
               class="logo"
               alt="steven-aj"
               src="/assets/logo.svg"
               in:fly={{ x: -100 }}
            />
         {/if}
         <h1>{$store.toolbar.title}</h1>
      </svelte:fragment>
      <svelte:fragment slot="trail">
         <LightSwitch />
      </svelte:fragment>
   </AppBar>
{/if}

<style lang="postcss">
   button.go-back {
      @apply btn variant-filled-tertiary mx-2;
   }

   img.logo {
      @apply mx-2 p-0;
      height: 34px;
      width: auto;
   }
</style>
