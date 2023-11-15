<script>
   import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
   import { AppBar, LightSwitch, ProgressRadial } from "@skeletonlabs/skeleton";
   import { fly } from "svelte/transition";
   import SvelteFa from "svelte-fa";

   export let store;
</script>

{#if $store.toolbar}
   <AppBar slotDefault="place-self-center" shadow="shadow-lg">
      <svelte:fragment slot="lead">
         <div class="navigation">
            {#if $store.loading}
               <ProgressRadial width="w-8" value={undefined} />
            {:else}
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
            {/if}
         </div>
         <strong class="desktop">{$store.toolbar.title}</strong>
      </svelte:fragment>
      <strong class="mobile">{$store.toolbar.title}</strong>
      <svelte:fragment slot="trail">
         <LightSwitch />
      </svelte:fragment>
   </AppBar>
{/if}

<style lang="postcss">
   div.navigation {
      @apply w-8 md:w-20;
   }

   strong.desktop {
      @apply hidden md:contents;
   }

   strong.mobile {
      @apply md:!hidden;
   }

   button.go-back {
      @apply btn variant-filled-tertiary md:mx-2;
   }

   img.logo {
      @apply h-8 mx-0 md:mx-2 p-0;
      width: auto;
   }
</style>
