<script>
   import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
   import { faGithub } from "@fortawesome/free-brands-svg-icons";
   import { Avatar } from "@skeletonlabs/skeleton";
   import SvelteFa from "svelte-fa";

   export let profile;

   function getInitialials(name) {
      let initials = name.split(" ");
      if (initials.length) {
         return initials[0].charAt(0) + initials[1].charAt(0);
      }
   }
</script>

{#if profile}
   <article class="card">
      <header>
         <Avatar
            width="w-32"
            border="border-4 border-solid border-primary-500/80"
            src={profile.cover}
            initials={getInitialials(profile.title)}
         />
      </header>
      <section>
         <h2>{profile.title}</h2>
         <p class="tagline">{profile.tagline}</p>
         <div class="contact-options">
            {#if profile.github}
               <a
                  role="button"
                  title="GitHub"
                  target="_blank"
                  href={`${profile.github}`}
               >
                  <SvelteFa icon={faGithub} />
               </a>
            {/if}
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

   article.card header {
      @apply flex flex-col justify-center items-center p-0;
   }

   article.card section {
      @apply flex flex-col items-center lg:items-start my-2;
   }

   article.card h2 {
      @apply h2;
   }

   article.card .tagline {
      @apply text-slate-500 md:my-2 lg:p-0;
   }

   article.card .contact-options {
      @apply flex flex-row mt-2 space-x-2;
   }

   article.card .contact-options a[role="button"] {
      @apply variant-soft-secondary
      w-fit
      p-2
      rounded-lg
      hover:variant-filled-primary
      hover:shadow-lg;
   }
</style>
