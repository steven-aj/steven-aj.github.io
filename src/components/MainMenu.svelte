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
      selected={$page.route.id === "/"}
   >
      <svelte:fragment slot="lead">
         <SvelteFa icon={faHouse} />
      </svelte:fragment>
      Home
   </AppRailAnchor>
   <AppRailAnchor
      href="/about"
      selected={$page.route.id === "/about"}
   >
      <svelte:fragment slot="lead">
         <SvelteFa icon={faAddressCard} />
      </svelte:fragment>
      About
   </AppRailAnchor>
   <AppRailAnchor
      href="/experience"
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
         selected={$page.route.id.includes("/blog")}
      >
         <svelte:fragment slot="lead">
            <SvelteFa icon={faBlog} />
         </svelte:fragment>
         Blog
      </AppRailAnchor>
   </svelte:fragment>
</AppRail>
