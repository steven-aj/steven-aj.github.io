<script>
   import { faStar } from "@fortawesome/free-solid-svg-icons";
   import SvelteFa from "svelte-fa";
   export let lab;
</script>

<a href={lab.path}>
   <article class="card">
      <section>
         {#if lab.featured}
            <span title="Featured Lab" class="featured-badge">
               <SvelteFa icon={faStar} />
            </span>
         {/if}
         <h2>{lab.title}</h2>
         {#if lab.description}
            {lab.description}
         {/if}
      </section>
   
      <footer>
         <time>{lab.language}</time>
      </footer>
   </article>
</a>

<style lang="postcss">
   a {
      @apply contents;
   }
   
   article {
      @apply flex flex-col m-0;
   }

   article section {
      @apply contents items-center justify-center;
   }

   article section * {
      @apply m-auto text-center;
   }
</style>
