import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml'; // for HTML
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import shell from 'highlight.js/lib/languages/shell';
import GitHub from '$lib/services/GitHub.js';

export const prerender = true;
export const ssr = false;

let path;
let page;
let ghUser;

// Register each imported language module
function initLanguageModels() {
   hljs.registerLanguage('xml', xml); // for HTML
   hljs.registerLanguage('css', css);
   hljs.registerLanguage('json', json);
   hljs.registerLanguage('javascript', javascript);
   hljs.registerLanguage('typescript', typescript);
   hljs.registerLanguage('shell', shell);
}

export async function load({ fetch, url }) {
   GitHub.http = fetch;

   initLanguageModels();

   // @ts-ignore
   page = await import(`$markdown/meta.md`);
   const { keywords, copyright } = page.metadata;

   path = url;
   ghUser = await GitHub.getUser();

   return {
      hljs,
      path,
      keywords,
      copyright,
      title: ghUser.login,
      author: ghUser.name,
      description: ghUser.bio,
      gh: {
         ...ghUser
      }
   }
}