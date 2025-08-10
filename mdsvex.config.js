import rehypeRaw from "rehype-raw"
import remarkSlug from "remark-slug";
import rehypeCallouts from "rehype-callouts";
import profanityClassifier from "./plugins/remark/profanityClassifier.js";
import rehypeKatexSvelte from "rehype-katex-svelte";
import remarkMath from "remark-math";

const calloutConfigs = {
    tags: {
        nonCollapsibleContainerTagName: 'blockquote',
        nonCollapsibleTitleTagName: 'summary'
    }
}

const katexConfigs = {
    macros: {
        "\\CC": "\\mathbb{C}",
        "\\vec": "\\mathbf",
    },
}

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
    extensions: [".md"],
    smartypants: { dashes: 'oldschool' },
    remarkPlugins: [remarkSlug, profanityClassifier, remarkMath],
    rehypePlugins: [rehypeRaw, [rehypeCallouts, calloutConfigs], [rehypeKatexSvelte, katexConfigs]],
    layout: {}
}

export default mdsvexConfig;