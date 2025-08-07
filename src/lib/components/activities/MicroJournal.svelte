<script>
   let { title, daily } = $props();
</script>

<article class="journal">
   <h2>{title}</h2>
   <section class="card">
      <h3>
         {new Date(daily.meta.date).toLocaleDateString("en-US", {
            dateStyle: "full",
         })}
      </h3>
      <!-- svelte-ignore svelte_component_deprecated -->
      <svelte:component this={daily.content} />
   </section>
</article>
