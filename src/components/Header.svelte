<header>
   <slot name="title" />
   <slot name="options" />
</header>

<style lang="postcss">
   header {
      /* Container */
      @apply relative flex flex-col md:flex-row items-center;

      /* Spacing */
      @apply md:justify-between my-6 p-4;
   }
</style>
