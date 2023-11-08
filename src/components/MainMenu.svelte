<script>
   import { base } from "$app/paths";
   import { page } from "$app/stores";
   import { AppRail, AppRailAnchor } from "@skeletonlabs/skeleton";
   import { faHouse, faBlog } from "@fortawesome/free-solid-svg-icons";
   import SvelteFa from "svelte-fa";
   console.log(base);
</script>

<AppRail>
   <AppRailAnchor href={base ? base : '/'} selected={$page.route.id === "/"}>
      <svelte:fragment slot="lead">
         <SvelteFa icon={faHouse} />
      </svelte:fragment>
      Home
   </AppRailAnchor>
   <svelte:fragment slot="trail">
      <AppRailAnchor
         href={`${base}/blog`}
         selected={$page.route.id.includes("/blog")}
      >
         <svelte:fragment slot="lead">
            <SvelteFa icon={faBlog} />
         </svelte:fragment>
         Blog
      </AppRailAnchor>
   </svelte:fragment>
</AppRail>
