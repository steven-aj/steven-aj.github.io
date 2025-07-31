import fs from 'fs';
import path from 'path';
import adapter from '@sveltejs/adapter-static';
import mdsvexConfig from './mdsvex.config.js';
import { sveltePreprocess } from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

const postFiles = fs.readdirSync('src/lib/markdown/posts');

const postEntries = postFiles
	.filter(f => f.endsWith('.md'))
	.map(f => `/posts/${f.replace(/\.md$/, '')}`);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({}),
		mdsvex(mdsvexConfig),
	],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'$api': 'src/lib/api',
			'$components': 'src/lib/components',
			'$markdown': 'src/lib/markdown',
			'$json': 'src/lib/json'
		},
		prerender: {
			entries: [
				"/", 
				"/about", 
				"/posts", 
				...postEntries
			],
			crawl: true
		}
	},

	extensions: [".svelte", ".md"],
};

export default config;
