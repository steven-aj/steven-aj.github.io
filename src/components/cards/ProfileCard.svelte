<script>
   import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
   import { faGithub, faSlack } from "@fortawesome/free-brands-svg-icons";
   // import { Avatar } from "@skeletonlabs/skeleton";
   import SvelteFa from "svelte-fa";

   export let profile;
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
      @apply md:grid md:grid-cols-6 md:max-w-lg md:w-full md:m-auto p-0 md:!shadow-xl md:rounded-xl;
   }

   article header {
      @apply col-span-2 m-0 overflow-hidden;
      @apply flex w-full h-auto rounded-xl rounded-r-none overflow-hidden;
   }

   article img.headshot {
      @apply max-w-xs md:max-w-lg w-full h-auto m-auto rounded-full;
   }

   article section {
      @apply flex flex-col items-center justify-center col-span-4 m-0 md:py-4 py-8 px-4;
   }

   article section h1 {
      @apply m-0;
   }

   article .contact-options {
      @apply flex flex-row space-x-2;
   }

   article .contact-options a[role="button"] {
      @apply p-2;
   }

   article .contact-options a[role="button"]:hover {
      background-color: var(--primary);
      border-color: var(--primary);
   }
</style>
