<script>
   import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
   import { faGithub, faSlack } from "@fortawesome/free-brands-svg-icons";
   // import { Avatar } from "@skeletonlabs/skeleton";
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
   <article>
      <header>
         <img
            class="headshot"
            alt={`Headshot of ${profile.title}`}
            src={profile.cover}
         />
      </header>

      <section>
         <h1>{profile.title}</h1>
         <p class="tagline">{profile.tagline}</p>
         <div class="contact-options">
            {#if profile.slack}
               <a
                  role="button"
                  class="secondary"
                  title="Slack Lobby"
                  target="_blank"
                  href={`${profile.slack}`}
               >
                  <SvelteFa icon={faSlack} />
               </a>
            {/if}
            {#if profile.github}
               <a
                  role="button"
                  class="secondary"
                  title="GitHub Profile"
                  target="_blank"
                  href={`${profile.github}`}
               >
                  <SvelteFa icon={faGithub} />
               </a>
            {/if}
            {#if profile.email}
               <a
                  role="button"
                  class="secondary"
                  title="Email Me"
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
   article {
      @apply grid grid-cols-6 p-0 rounded-xl;
   }

   article header {
      @apply col-span-2 m-0 overflow-hidden;
      @apply flex w-full h-auto rounded-xl rounded-r-none overflow-hidden;
   }

   article img.headshot {
      @apply w-full h-auto m-auto rounded-full;
   }

   article section {
      @apply flex flex-col items-center justify-center col-span-4 m-0;
   }

   article section h1 {
      @apply m-0;
   }

   article .contact-options {
      @apply p-0 m-0;
   }

   article .contact-options a[role="button"]:hover {
      background-color: var(--primary);
      border-color: var(--primary);
   }
</style>
