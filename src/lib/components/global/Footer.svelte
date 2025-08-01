<script lang="ts">
    import { page } from "$app/state";
    import staticConfig from "$config";
    
    let { copyright, github } = $props();
</script>

<footer>
    <img
        id="Avatar"
        src={github.avatar_url}
        title={github.name}
        alt={github.name}
    />

    <div class="links">
        {#each staticConfig.links as link}
         <a href={link.route} data-active={page.url.pathname == link.route}>{link.name}</a>
      {/each}
    </div>

    <div class="baseline">
        <span class="copyright">{@html copyright}</span>
        <span class="faded">Don't steal my shit.</span>
    </div>

    <div>
        <img
            src="https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white"
            title="TypeScript"
            alt="TypeScript"
        />
        <img
            src="https://img.shields.io/badge/JavaScript-f7df1e?logo=javascript&logoColor=black"
            title="JavaScript"
            alt="JavaScript"
        />
        <img
            src="https://img.shields.io/badge/C%23-239120?logo=dotnet&logoColor=white"
            title="C-Sharp"
            alt="C-Sharp"
        />
        <img
            src="https://img.shields.io/badge/PHP-777bb4?logo=php&logoColor=white"
            title="PHP"
            alt="PHP"
        />
        <img
            src="https://img.shields.io/badge/HTML5-e34f26?logo=html5&logoColor=white"
            title="HTML5"
            alt="HTML5"
        />
        <img
            src="https://img.shields.io/badge/CSS-1572b6?logo=css&logoColor=white"
            title="CSS3"
            alt="CSS3"
        />
    </div>

    <div>
        <img
            src="https://img.shields.io/badge/Full--Stack-Ready-007acc"
            title="Full-Stack Ready"
            alt="Full-Stack Ready"
        />
        <img
            src="https://img.shields.io/badge/Node.js-Developer-3c873a?logo=node.js&logoColor=white"
            title="Node.js Developer"
            alt="Node.js Developer"
        />
        <img
            src="https://img.shields.io/badge/Proud-Husband-6f42c1"
            title="Proud Husband"
            alt="Proud Husband"
        />
    </div>
</footer>

<style lang="scss">
    footer {
        // background: linear-gradient(to bottom right, var(--border), var(--background-body));
        display: flex;
        flex-direction: column;
        color: #f5f5f5;
        padding: 2rem 1rem;
        text-align: center;
        // border-top: medium solid var(--border);
        // border-bottom: thin dotted var(--border);
        margin-top: 3rem;
        // box-shadow: 0 0rem 1rem var(--border);
    }

    img#Avatar {
        width: 100px;
        height: auto;
        margin: auto;
        margin-bottom: 2rem;
        border-radius: 100%;
        // border: thick solid var(--background);
    }

    div.links {
        display: flex;
        flex-direction: row;
        align-self: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    div.links a[data-active="true"] {
        color: var(--orange);
        text-decoration: underline overline;
    }

    div.baseline {
        display: flex;
        flex-direction: column;
        // font-size: 0.9rem; color: var(--text);
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    span.copyright {
        font-weight: bold;
    }

    span.faded {
        // color: var(--text-muted);
        font-style: italic;
        font-weight: normal;
    }
</style>
