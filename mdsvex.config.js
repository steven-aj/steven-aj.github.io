import rehypeRaw from "rehype-raw"
import remarkSlug from "remark-slug";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
    extensions: [".md"],
    smartypants: { dashes: 'oldschool' },
    remarkPlugins: [remarkSlug],
    rehypePlugins: [rehypeRaw],
    layout: {}
}

export default mdsvexConfig;