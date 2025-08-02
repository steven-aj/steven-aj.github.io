import rehypeRaw from "rehype-raw"
import remarkSlug from "remark-slug";
import rehypeCallouts from "rehype-callouts";
// import { visit } from "unist-util-visit";

const calloutConfigs = {
    tags: {
        nonCollapsibleContainerTagName: 'blockquote',
        nonCollapsibleTitleTagName: 'summary'
    }
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
    extensions: [".md"],
    smartypants: { dashes: 'oldschool' },
    rehypePlugins: [rehypeRaw, [rehypeCallouts, calloutConfigs]],
    remarkPlugins: [remarkSlug],
    layout: {}
}

export default mdsvexConfig;