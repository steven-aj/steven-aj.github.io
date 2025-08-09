import fs from 'fs';
import path from 'path';
import adapter from '@sveltejs/adapter-static';
import mdsvexConfig from './mdsvex.config.js';
import { sveltePreprocess } from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

function readFilesRecursively(dir) {
	let results = [];
	const list = fs.readdirSync(dir, { withFileTypes: true });
	for (const entry of list) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			results = results.concat(readFilesRecursively(fullPath));
		} else if (entry.isFile()) {
			results.push(fullPath);
		}
	}
	return results;
}

const postFiles = readFilesRecursively('src/lib/markdown/blog');

const postEntries = postFiles
	.filter(f => f.endsWith('.md'))
	.map(f => `/blog/${f.replace(/\.md$/, '')}`);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			scss: {
				includePaths: ['src', 'node_modules']
			}
		}),
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
			'$json': 'src/lib/json',
			'$config': 'src/static.config.js'
		},
		prerender: {
			entries: [
				"/",
				"/about",
				"/blog",
				"/journal",
				"/settings",
				...postEntries
			],
			crawl: true
		}
	},

	extensions: [".svelte", ".md"]
};

export default config;
