import rehypeExternalLinks from "rehype-external-links";

const externalLinksconfigs = {
   rel: ['nofollow'],
   target: '_blank'
}

export default [rehypeExternalLinks, externalLinksconfigs];