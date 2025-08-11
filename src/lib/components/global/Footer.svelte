<script lang="ts">
    import Censor, { cleanDocument } from "$lib/services/Censor";
    import { Coffee, Github, HatGlasses, MessageSquare } from "@lucide/svelte";
    import { onMount } from "svelte";
    let { copyright, github } = $props();

    onMount(cleanDocument);
</script>

<footer>
    <div class="social">
        <a class="icon-btn" aria-label="GitHub" target="_blank" href="https://github.com/steven-aj">
            <Github size="24" aria-label="GitHub" color="var(--text-muted)" />
            <span>GitHub</span>
        </a>
        <a class="icon-btn" aria-label="Mastodon" target="_blank" href="https://indieweb.social/@steven_aj">
            <MessageSquare aria-label="Mastodon" size="24" color="var(--text-muted)" />
            <span>Mastodon</span>
        </a>
        <a class="icon-btn" aria-label="32-Bit Cafe" target="_blank" href="https://discourse.32bit.cafe/u/steven-aj/summary">
            <Coffee aria-label="32-Bit Cafe" size="24" color="var(--text-muted)" />
            <span>32-Bit Cafe</span>
        </a>
        <a class="icon-btn" aria-label="Fedora Discussion" target="_blank" href="https://discussion.fedoraproject.org/u/steven-aj/summary">
            <HatGlasses aria-label="Fedora Discussion" size="24" color="var(--text-muted)" />
            <span>Fedora</span>
        </a>
    </div>
    <section class="baseline">
        <span class="copyright">{@html copyright}</span>
        <span class="faded"
            >{@html Censor.cleanProfanity("Don't steal my shit")}</span
        >
    </section>
</footer>

<style lang="scss">
    footer {
        display: flex;
        flex-direction: column;
        padding: 2rem 1rem;
        text-align: center;
        border-top: thin dotted var(--border);
        margin-top: 3rem;
        gap: 1rem;
        font-family: Anta;
        color: var(--text-muted);
    }

    .social {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }

    .social a {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        color: var(--text-muted);
        font-size: small;
        font-family: FallingSky;
    }

    .social a:hover,
    .social a:active {
        color: var(--purple);
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
        font-size: small;
        opacity: 0.5;
    }
</style>
