---
status: published
title: GH Smoothie
description: A markdown-powered blogging framework for GitHub Pages. Built with SvelteKit.
language: Svelte
repo: https://github.com/steven-aj/gh-smoothie
demo: https://steven-aj.github.io/gh-smoothie/
---
<script>
	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

GH Smoothie is a blogging framework that I built as an alternative for Jekyll.

Content can be managed with any markdown editor. Metadata for pages and posts is supplied via the document's front matter.

The repo also features deployment configurations for GitHub Pages. To deploy the app or post new articles, push your changes into `main` and GitHub will do the rest.

Feel free to fork this repo to your own collection & hack it as much as you want.

## Built for Obsidian

[Obsidian](https://obsidian.md) is a markdown editor with a ton of features to help manage your markdown blog (I highly recommend it). GH Smoothie comes pre-installed with an <a target="_blank" href="https://help.obsidian.md/Files+and+folders/How+Obsidian+stores+data">Obsidian Vault</a> and three different front-matter templates to help you get started.

- site-meta
- page
- post-single

For convenience, the vault also comes configured with a community-built <a target="_blank" href="https://github.com/polyipseity/obsidian-terminal/releases/tag/3.14.0">Obsidian Terminal</a> so you can commit and push changes from within [Obsidian](https://obsidian.md) itself.
### Front Matter Examples

In its default configuration, Smoothie's front matter is used to generate meta data across the site. The `posts` library pulls from this to render article cards.

#### Site-Meta Template

<CodeBlock 
		   language="markdown" 
		   code="---
title:
author:
description: 
keywords:
---"></CodeBlock>

#### Page Template

<CodeBlock 
		   language="markdown" 
		   code="---
title:
author:
date:
description:
cover:
keywords
---
"></CodeBlock>


#### Post-Single Template

<CodeBlock 
		   language="markdown" 
		   code="---
status: draft | published
title:
date:
author:
excerpt:
cover:
tags:
---
"></CodeBlock>