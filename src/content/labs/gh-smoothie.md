---
status: published
featured: "true"
title: GH Smoothie
description: A markdown-powered blogging framework for GitHub Pages. Built with SvelteKit.
language: SvelteKit
repo: https://github.com/steven-aj/gh-smoothie
demo: https://steven-aj.github.io/gh-smoothie/
---
GH Smoothie is a blogging framework built as an alternative to Jekyll. Feel free to fork it to your own collection & hack away.

- Metadata for content is defined within the markdown's front matter. 
- The repo features a workflow configuration for GitHub Pages to simplify deployment. Push your changes into `main` and GitHub will do the rest.
## Built With Obsidian in Mind

[Obsidian](https://obsidian.md) is a free, open-source markdown editor with useful features to help manage your blog. GH Smoothie comes pre-installed with an <a target="_blank" href="https://help.obsidian.md/Files+and+folders/How+Obsidian+stores+data">Obsidian Vault</a> and three different front matter templates to help you get started.

- site-meta
- page
- post-single

For convenience, the vault comes configured with a community-built <a target="_blank" href="https://github.com/polyipseity/obsidian-terminal/releases/tag/3.14.0">Obsidian Terminal</a> so you can commit and push changes from within the editor.
### Front Matter Templates

In its default configuration, Smoothie's front matter is used to generate metadata across the site. The `posts` library pulls from this to render article cards. To see metadata in action, check out this <a target="_blank" href="https://metatags.io/?url=https%3A%2F%2Fsteven-aj.github.io%2Fgh-smoothie">meta preview</a>.

#### Site-Meta

```markdown
title:
author:
description: 
keywords: 
```

#### Page

```markdown
title:
author:
date:
description:
cover:
keywords: 
```


#### Post-Single

```markdown
status: draft | published
title:
date:
author:
excerpt:
cover:
tags: 
```