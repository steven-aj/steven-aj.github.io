<script>
   export let title = "Nothing to see here!";
   export let message =
      "It looks like I haven't published anything here yet. Check back later!";

   export let showIcon = true;
</script>

<section class="empty">
   {#if showIcon}
      <span class="emoji">👀</span>
   {/if}
   {#if title}
      <h2>{title}</h2>
   {/if}
   <p>{message}</p>
</section>

<style lang="postcss">
   section.empty {
      @apply flex flex-col;
      @apply gap-4 justify-center items-center;
      @apply h-full;
   }

   section.empty .emoji {
      @apply text-7xl;
   }

   section.empty h2 {
      @apply text-surface-500;
      @apply text-3xl;
   }

   section.empty p {
      @apply italic;
   }
</style>
