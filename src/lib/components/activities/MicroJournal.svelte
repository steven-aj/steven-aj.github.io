<script>
   let { title, daily, card } = $props();

   let cardStyle = card ? "card" : "";

   const date = new Date(daily.meta.date);
   date.setUTCHours(12);
</script>

<div>
   {#if title}
      <h2>{title}</h2>
   {/if}
   <section class={`journal ${cardStyle}`}>
      <h3>
         {date.toLocaleDateString("en-US", {
            dateStyle: "full",
            timeZone: "America/Chicago"
         })}
      </h3>
      <!-- svelte-ignore svelte_component_deprecated -->
      <svelte:component this={daily.content} />
   </section>
</div>
