import rehypeKatexSvelte from "rehype-katex-svelte";

const katexConfigs = {
   macros: {
      "\\CC": "\\mathbb{C}",
      "\\vec": "\\mathbf",
   },
}

export default [rehypeKatexSvelte, katexConfigs];