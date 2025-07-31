import rehypeRaw from "rehype-raw"

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
    extensions: [".md"],
    smartypants: { dashes: 'oldschool' },
    rehypePlugins: [rehypeRaw],
    layout: {}
}

export default mdsvexConfig;