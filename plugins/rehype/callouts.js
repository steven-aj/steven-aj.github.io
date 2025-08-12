import rehypeCallouts from "rehype-callouts";

const calloutConfigs = {
   tags: {
      nonCollapsibleContainerTagName: 'blockquote',
      nonCollapsibleTitleTagName: 'summary'
   }
}

export default [rehypeCallouts, calloutConfigs];