<script>
   import { faStar } from "@fortawesome/free-solid-svg-icons";
   import SvelteFa from "svelte-fa";
   export let lab;
</script>

<article class="card">
   <header>
      {#if lab.featured}
         <span title="Featured Lab" class="featured-badge">
            <SvelteFa icon={faStar} />
         </span>
      {/if}
      <h2>{lab.title}</h2>
   </header>
   <section>
      {#if lab.description}
         {lab.description}
      {/if}
   </section>

   <footer>
      <time>{lab.language}</time>
   </footer>
</article>

<style>
</style>
