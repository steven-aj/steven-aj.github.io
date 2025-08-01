import rehypeRaw from "rehype-raw"
import remarkSlug from "remark-slug";
import { visit } from "unist-util-visit";

// function remarkCustomAlerts() {
//     return function transformer(tree) {
//         visit(tree, 'blockquote', (node) => {
//             const firstParagraph = node.children?.[0];
//             const text = firstParagraph?.children?.[0]?.label || '';

//             const match = text.match('\[\!(CAUTION|WARNING|NOTE|REMINDER)\]');
//             if (!match) return;

//             const type = match.input.substr(1, match.input.length).toLowerCase(); // "note", "warning", etc.

//             node.data = {
//                 hName: 'blockquote',
//                 hProperties: {
//                     className: [`${type}`],
//                 },
//             };
//         });
//     };
// }

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
    extensions: [".md"],
    smartypants: { dashes: 'oldschool' },
    remarkPlugins: [remarkSlug],
    rehypePlugins: [rehypeRaw],
    layout: {}
}

export default mdsvexConfig;