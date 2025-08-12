import rehypeRaw from "rehype-raw"
import remarkSlug from "remark-slug";
import remarkMath from "remark-math";
import profanityClassifier from "./plugins/remark/profanityClassifier.js";
import externalLinks from "./plugins/rehype/externalLinks.js";
import katexSvelte from "./plugins/rehype/katexSvelte.js";
import callouts from "./plugins/rehype/callouts.js";



/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
    extensions: [".md"],
    smartypants: { dashes: 'oldschool' },
    remarkPlugins: [remarkSlug, profanityClassifier, remarkMath],
    rehypePlugins: [rehypeRaw, callouts, katexSvelte, externalLinks],
    layout: {}
}

export default mdsvexConfig;