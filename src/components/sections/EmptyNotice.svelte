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

<style>
   
</style>
