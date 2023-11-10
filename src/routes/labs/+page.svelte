<script>
   import { onMount } from "svelte";
   import App from "$lib/shell";
   import EmptyNotice from "$components/EmptyNotice.svelte";

   export let data;

   let { meta, content, labs } = data;

   function init() {
      App.showBackButton(false);
      App.setHero({
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

{#if labs.length}
   <section id="labs" class="posts">
      <h3>Labs</h3>
      <div class="grid" />
   </section>
   {:else}
   <EmptyNotice showIcon={false} title={false} message="It looks like I haven't posted any Labs yet. Check back later!"/>
{/if}