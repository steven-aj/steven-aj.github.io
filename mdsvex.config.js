import rehypeRaw from "rehype-raw"
import remarkSlug from "remark-slug";
import { remarkAlert } from "remark-github-blockquote-alert";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
    extensions: [".md"],
    smartypants: { dashes: 'oldschool' },
    remarkPlugins: [remarkSlug, remarkAlert],
    rehypePlugins: [rehypeRaw],
    layout: {}
}

export default mdsvexConfig;