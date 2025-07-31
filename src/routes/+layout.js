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

export async function load({fetch, url}) {
   GitHub.fetcher = fetch;

   // @ts-ignore
   const page = await import(`$markdown/meta.md`);
   const gitHubMeta = await GitHub.fetch();
   const { keywords, copyright } = page.metadata;
   const path = url;


   // Register each imported language module
   hljs.registerLanguage('xml', xml); // for HTML
   hljs.registerLanguage('css', css);
   hljs.registerLanguage('json', json);
   hljs.registerLanguage('javascript', javascript);
   hljs.registerLanguage('typescript', typescript);
   hljs.registerLanguage('shell', shell);

   return {
      hljs,
      path,
      keywords,
      copyright,
      title: gitHubMeta.login,
      author: gitHubMeta.name,
      description: gitHubMeta.bio,
      gh: {
         ...gitHubMeta
      }
   }
}