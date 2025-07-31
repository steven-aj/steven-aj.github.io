import rehypeRaw from "rehype-raw"

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
    extensions: [".svelte", ".md"],
    smartypants: { dashes: 'oldschool' },
    rehypPlugins: [rehypeRaw],
    layout: {}
}

export default mdsvexConfig;