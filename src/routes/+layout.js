import { Pages } from "$lib/api";
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml'; // for HTML
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import shell from 'highlight.js/lib/languages/shell';
import markdown from 'highlight.js/lib/languages/markdown';

export const prerender = true;

export async function load() {
   const page = await Pages.get('site-meta');
   const { meta } = page;

   // Register each imported language module
   hljs.registerLanguage('xml', xml); // for HTML
   hljs.registerLanguage('css', css);
   hljs.registerLanguage('json', json);
   hljs.registerLanguage('javascript', javascript);
   hljs.registerLanguage('typescript', typescript);
   hljs.registerLanguage('shell', shell);
   hljs.registerLanguage('markdown', markdown);

   return { hljs, meta }
}