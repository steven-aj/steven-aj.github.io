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
            title={`Headshot of ${profile.title}`}
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
      /* Container */
      @apply md:grid md:grid-cols-6 md:!shadow-xl;

      /* Sizing */
      @apply md:max-w-lg md:w-full;

      /* Margins */
      @apply md:m-auto;

      /* Paddings */
      @apply p-0;

      /* Border */
      @apply md:rounded-xl;
   }

   article header {
      /* Container */
      @apply flex overflow-hidden;

      /* Sizing */
      @apply col-span-2 w-full h-auto;

      /* Margins */
      @apply m-0;

      /* Border */
      @apply rounded-xl rounded-r-none;
   }

   article img.headshot {
      /* Sizing */
      @apply w-full h-auto max-w-xs md:max-w-lg;

      /* Margins */
      @apply m-auto;

      /* Border */
      @apply rounded-full
   }

   article section {
      /* Container */
      @apply flex flex-col;

      /* Sizing */
      @apply col-span-4;

      /* Margins */
      @apply m-0;

      /* Paddings */
      @apply md:py-4 py-8 px-4;

      /* Alignments */
      @apply items-center justify-center;
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
