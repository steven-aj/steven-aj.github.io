<script>
   import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
   import SvelteFa from "svelte-fa";

   export let profile;
</script>

{#if profile}
   <article class="card">
      <header>
         <img class="headshot" alt={`Headshot of ${profile.title}`} src={profile.cover} />
      </header>
      <section>
         <h2>{profile.title}</h2>
         <p class="tagline">{profile.tagline}</p>
         <div class="contact-options">
            {#if profile.email}
               <a
                  role="button"
                  title="Email me"
                  href={`mailto:${profile.email}`}
               >
                  <SvelteFa icon={faEnvelope} />
               </a>
            {/if}
         </div>
      </section>
   </article>
{/if}

<style lang="postcss">
   article.card {
      @apply lg:grid
      lg:grid-cols-2
      md:flex 
      md:flex-col
      md:mt-8
      md:py-4
      items-center 
      justify-center 
      max-w-2xl 
      w-full 
      mx-auto
      shadow-2xl
      py-2;
      grid-template-columns: 1fr 2fr;
   }

   article.card header img.headshot {
      @apply m-auto
      border-4
      drop-shadow-lg
      border-solid 
      border-primary-500/80;
      width: 150px;
      height: auto;
      border-radius: 50%;
   }

   article.card section {
      @apply flex flex-col items-center lg:items-start my-2;
   }

   article.card h2 {
      @apply h2;
   }

   article.card .tagline {
      @apply text-slate-500 lg:m-0 lg:p-0;
   }

   article.card .contact-options {
      @apply flex flex-row mt-2;
   }

   article.card .contact-options a[role="button"] {
      @apply variant-soft-secondary
      w-fit
      p-2
      my-4 
      rounded-lg
      hover:variant-filled-primary
      hover:shadow-lg;
   }
</style>
