<script lang="ts">
    let { copyright, github } = $props();
</script>

<footer>
    <img id="Avatar" src={github.avatar_url} title={github.name} alt={github.name} />

    <div class="links">
        <a
            href="/about"
            style="margin: 0 1rem; color: #ff00cc; text-decoration: none;"
            >About</a
        >
        <a
            href="/projects"
            style="margin: 0 1rem; color: #ff00cc; text-decoration: none;"
            >Projects</a
        >
        <a
            href="/contact"
            style="margin: 0 1rem; color: #ff00cc; text-decoration: none;"
            >Contact</a
        >
    </div>

    <div class="baseline">
        <span class="copyright">{@html copyright}</span>
        <span class="faded">Don't steal my shit.</span>
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
        border-top: medium solid var(--border);
        border-bottom: thin dotted var(--border);
        margin-top: 3rem;
        // box-shadow: 0 0rem 1rem var(--border);
    }

    img#Avatar {
        width: 100px;
        height: auto;
        margin: auto;
        margin-bottom: 2rem;
        border-radius: 100%;
        border: thick solid var(--background);
    }

    div.links {
        margin-bottom: 1rem;
    }

    div.baseline {
        display: flex;
        flex-direction: column;
        font-size: 0.9rem; color: var(--text);
        gap: 0.5rem;
    }

    span.copyright {
        font-weight: bold;
    }

    span.faded {
        color: var(--text-muted);
        font-style: italic;
        font-weight: normal;
    }
</style>
