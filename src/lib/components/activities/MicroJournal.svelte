<script>
   let { title, daily, card } = $props();

   let cardStyle = card ? "card" : "";
</script>

<article>
   {#if title}
      <h2>{title}</h2>
   {/if}
   <section class={`journal ${cardStyle}`}>
      <h3>
         {new Date(daily.meta.date).toLocaleDateString("en-US", {
            dateStyle: "full",
         })}
      </h3>
      <!-- svelte-ignore svelte_component_deprecated -->
      <svelte:component this={daily.content} />
   </section>
</article>
