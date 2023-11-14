<script>
   import { onMount } from "svelte";
   import Shell from "$lib/shell";

   export let data;

   let { meta, content } = data;

   function init() {
      Shell.showBackButton(false);
      Shell.setHero({
         title: meta.title,
         date: `Last updated: ${meta.date}`,
         cover: meta.cover,
         description: meta.description,
      });
   }

   onMount(init);
</script>

<svelte:head>
   <meta name="title" content={meta.title} />
   <meta name="author" content={meta.author} />
   <meta name="keywords" content={meta.keywords} />
   <meta name="description" content={meta.description} />
</svelte:head>

<section id="Experience">
   <svelte:component this={content} />
</section>

<form>
   <input required type="text" name="name" placeholder="Full Name" />
   <input required type="text" placeholder="Business Name" />
   <input required type="email" name="email" placeholder="Email Address" />
   <input type="tel" name="phone" placeholder="Business Phone (optional)" />
   <textarea
      name="details"
      rows="7"
      placeholder="What can you tell me about your opportunity?"
   />
   <button>Submit Request</button>
</form>

<style lang="postcss">
   #Experience {
      @apply text-center;
   }

   form {
      @apply max-w-5xl w-full;

      @apply space-y-4 m-auto;
   }

   input {
      @apply input px-4 py-2;
   }

   textarea {
      @apply textarea px-4 py-2;
   }

   form button {
      @apply btn variant-filled-primary float-right w-full;
   }
</style>
