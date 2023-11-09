<script>
   import { page } from "$app/stores";
   import { AppRail, AppRailAnchor } from "@skeletonlabs/skeleton";
   import {
      faHouse,
      faBlog,
      faBriefcase,
      faAddressCard,
   } from "@fortawesome/free-solid-svg-icons";
   import SvelteFa from "svelte-fa";
</script>

<AppRail>
   <AppRailAnchor
      href="/"
      title="Home"
      selected={$page.route.id === "/"}
   >
      <svelte:fragment slot="lead">
         <SvelteFa icon={faHouse} />
      </svelte:fragment>
      Home
   </AppRailAnchor>
   <AppRailAnchor
      href="/about"
      title="About"
      selected={$page.route.id === "/about"}
   >
      <svelte:fragment slot="lead">
         <SvelteFa icon={faAddressCard} />
      </svelte:fragment>
      About
   </AppRailAnchor>
   <AppRailAnchor
      href="/experience"
      title="Experience"
      selected={$page.route.id === "/experience"}
   >
      <svelte:fragment slot="lead">
         <SvelteFa icon={faBriefcase} />
      </svelte:fragment>
      Experience
   </AppRailAnchor>
   <svelte:fragment slot="trail">
      <AppRailAnchor
         href="/blog"
         title="Blog"
         selected={$page.route.id.includes("/blog")}
      >
         <svelte:fragment slot="lead">
            <SvelteFa icon={faBlog} />
         </svelte:fragment>
         Blog
      </AppRailAnchor>
   </svelte:fragment>
</AppRail>
