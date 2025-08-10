<script lang="ts">
    import Censor, { cleanDocument } from "$lib/services/Censor";
    import { onMount } from "svelte";
    let { copyright, github } = $props();

    onMount(cleanDocument)
</script>

<footer>
    <section class="baseline">
        <span class="copyright">{@html copyright}</span>
        <span class="faded">{@html Censor.cleanProfanity("Don't steal my shit")}</span>
    </section>
</footer>

<style lang="scss">
    footer {
        display: flex;
        flex-direction: column;
        color: var(--text-main);
        padding: 2rem 1rem;
        text-align: center;
        border-top: thin solid var(--border);
        margin-top: 3rem;
    }

    img#Avatar {
        width: 100px;
        height: auto;
        margin: auto;
        margin-bottom: 2rem;
        border-radius: 100%;
    }

    section.links {
        display: flex;
        flex-direction: row;
        align-self: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    section.links a[data-active="true"] {
        color: var(--orange);
        text-decoration: underline overline;
    }

    section.baseline {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    span.copyright {
        font-weight: bold;
    }

    span.faded {
        font-style: italic;
        font-weight: normal;
    }
</style>
