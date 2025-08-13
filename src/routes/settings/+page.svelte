<script lang="ts">
    import Monitor from "@lucide/svelte/icons/monitor";
    import Speech from "@lucide/svelte/icons/speech";
    import { cleanDocument } from "$lib/services/Censor.js";
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";
    import { Strikethrough } from "@lucide/svelte";

    export let data;

    let { theme, censor, redactionSyle } = data;

    function saveTheme(target: HTMLSelectElement) {
        localStorage.setItem("theme", target.value);
        document.documentElement.dataset.theme =
            localStorage.getItem("theme") || target.value;
    }

    function saveRedactionStyle(target: HTMLSelectElement) {
        localStorage.setItem("redactionStyle", target.value);
        cleanDocument();
    }

    function applyTheme(val: string) {
        localStorage.setItem("theme", val);
        // keep dataset equal to stored value (or map 'auto' to actual light/dark if you prefer)
        document.documentElement.dataset.theme = val;
    }

    function updateCensor(checkbox: HTMLInputElement) {
        localStorage.setItem("censor", `${checkbox.value}`);
        cleanDocument();
    }

    onMount(() => {
        theme =
            localStorage.getItem("theme") ??
            document.documentElement.dataset.theme ??
            "auto";
        applyTheme(theme);
    });
</script>

<div>
    <h2>User Preferences</h2>

    <p>
        These configurations are stored in your browser. You'll need to adjust
        them across all devices you visit from.
    </p>

    <form>
        <h3>Global Settings</h3>
        <section aria-label="Theme Mode">
            <Monitor
                size="32"
                color="var(--purple)"
                opacity="0.7"
                aria-label="Theme Mode Icon"
            />
            <div>
                <label for="mode">
                    <span>Theme Mode</span>
                    <select
                        bind:value={theme}
                        id="mode"
                        name="mode"
                        onchange={({ currentTarget }) =>
                            saveTheme(currentTarget)}
                    >
                        <option value="auto">Automatic</option>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </label>
                <span class="tooltip">
                    Save your face from a certain 'Raiders of the Lost Ark'
                    dilemma.
                </span>
            </div>
        </section>

        <section aria-label="SFW Mode">
            <Speech
                size="32"
                color="var(--purple)"
                opacity="0.7"
                aria-label="SFW Mode Icon"
            />
            <div>
                <label for="profanity">
                    <span>SFW Mode</span>
                    <input
                        id="profanity"
                        name="profanity"
                        type="checkbox"
                        bind:checked={censor}
                        value={censor}
                        onchange={({ currentTarget }) =>
                            updateCensor(currentTarget)}
                    />
                </label>
                <span class="tooltip">
                    Censor naughty words from my content. This doesn't work on
                    images, of course, and it won't hide profanity in slugs.
                </span>
            </div>
        </section>

        {#if censor}
        <section transition:slide={{axis: 'y'}} aria-label="Redaction Font">
            <Strikethrough
                size="32"
                color="var(--purple)"
                opacity="0.7"
                aria-label="Redaction Style Icon"
            />
            <div>
                <label for="redactionStyle">
                    <span>Redaction Style</span>
                    <select
                        bind:value={redactionSyle}
                        id="redactionStyle"
                        name="redactionStyle"
                        onchange={({ currentTarget }) =>
                            saveRedactionStyle(currentTarget)}
                    >
                        <option value="synthwave">Synthwave</option>
                        <option value="block">Block</option>
                        <option value="circular">Circular</option>
                        <option value="barcode">Barcode</option>
                    </select>
                </label>
                <span class="tooltip">
                    If SFW Mode is making it difficult to read.
                </span>
            </div>
        </section>
        {/if}
    </form>
</div>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        border-top: thin solid var(--border);
        color: var(--form-text);
    }

    form h3 {
        margin: 2rem 3rem;
    }

    section {
        display: flex;
        flex-direction: row;
        align-items: center;
        /* justify-content: space-between; */
        border-top: thin dotted var(--border);
        border-bottom: thin dotted var(--border);
        padding: 1.61rem;
        gap: 1rem;
    }

    section div {
        border-left: thin solid var(--border);
        width: 100%;
        padding-left: 1rem;
    }

    label {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    label span {
        display: flex;
        flex-direction: row;
        font-size: x-large;
        align-items: center;
        gap: 0.5rem;
    }

    label input,
    label select {
        vertical-align: middle;
    }

    input[type="checkbox"] {
        transform: scale(1.5);
        transform-origin: top right;
    }

    span.tooltip {
        /* padding: 0 2rem; */
        color: var(--text-muted);
        font-style: italic;
        margin: 0.5rem 0;
    }

    select {
        color: #1d1d1d;
        color: var(--form-text);
        background-color: #efefef;
        background-color: var(--background);
        font-family: inherit;
        font-size: inherit;
        margin-right: 6px;
        margin-bottom: 6px;
        padding: 10px;
        border: none;
        border-radius: 6px;
        outline: none;
        cursor: pointer;
    }

    select {
        background: #efefef
            url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='62.5' width='116.9' fill='%23161f27'%3E %3Cpath d='M115.3,1.6 C113.7,0 111.1,0 109.5,1.6 L58.5,52.7 L7.4,1.6 C5.8,0 3.2,0 1.6,1.6 C0,3.2 0,5.8 1.6,7.4 L55.5,61.3 C56.3,62.1 57.3,62.5 58.4,62.5 C59.4,62.5 60.5,62.1 61.3,61.3 L115.2,7.4 C116.9,5.8 116.9,3.2 115.3,1.6Z'/%3E %3C/svg%3E")
            calc(100% - 12px) 50% / 12px no-repeat;
        background: var(--background) var(--select-arrow) calc(100% - 12px) 50% /
            12px no-repeat;
        padding-right: 35px;
    }

    @media (prefers-color-scheme: dark) {
        select {
            background: #161f27
                url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='62.5' width='116.9' fill='%23efefef'%3E %3Cpath d='M115.3,1.6 C113.7,0 111.1,0 109.5,1.6 L58.5,52.7 L7.4,1.6 C5.8,0 3.2,0 1.6,1.6 C0,3.2 0,5.8 1.6,7.4 L55.5,61.3 C56.3,62.1 57.3,62.5 58.4,62.5 C59.4,62.5 60.5,62.1 61.3,61.3 L115.2,7.4 C116.9,5.8 116.9,3.2 115.3,1.6Z'/%3E %3C/svg%3E")
                calc(100% - 12px) 50% / 12px no-repeat;
            background: var(--background) var(--select-arrow) calc(100% - 12px)
                50% / 12px no-repeat;
        }
    }

    @media (prefers-color-scheme: dark) {
        select {
            background: #161f27
                url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='62.5' width='116.9' fill='%23efefef'%3E %3Cpath d='M115.3,1.6 C113.7,0 111.1,0 109.5,1.6 L58.5,52.7 L7.4,1.6 C5.8,0 3.2,0 1.6,1.6 C0,3.2 0,5.8 1.6,7.4 L55.5,61.3 C56.3,62.1 57.3,62.5 58.4,62.5 C59.4,62.5 60.5,62.1 61.3,61.3 L115.2,7.4 C116.9,5.8 116.9,3.2 115.3,1.6Z'/%3E %3C/svg%3E")
                calc(100% - 12px) 50% / 12px no-repeat;
            background: var(--background) var(--select-arrow) calc(100% - 12px)
                50% / 12px no-repeat;
        }
    }

    @media (prefers-color-scheme: dark) {
        select {
            background: #161f27
                url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='62.5' width='116.9' fill='%23efefef'%3E %3Cpath d='M115.3,1.6 C113.7,0 111.1,0 109.5,1.6 L58.5,52.7 L7.4,1.6 C5.8,0 3.2,0 1.6,1.6 C0,3.2 0,5.8 1.6,7.4 L55.5,61.3 C56.3,62.1 57.3,62.5 58.4,62.5 C59.4,62.5 60.5,62.1 61.3,61.3 L115.2,7.4 C116.9,5.8 116.9,3.2 115.3,1.6Z'/%3E %3C/svg%3E")
                calc(100% - 12px) 50% / 12px no-repeat;
            background: var(--background) var(--select-arrow) calc(100% - 12px)
                50% / 12px no-repeat;
        }
    }

    @media (prefers-color-scheme: dark) {
        select {
            background: #161f27
                url("data:image/svg+xml;charset=utf-8,%3C?xml version='1.0' encoding='utf-8'?%3E %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='62.5' width='116.9' fill='%23efefef'%3E %3Cpath d='M115.3,1.6 C113.7,0 111.1,0 109.5,1.6 L58.5,52.7 L7.4,1.6 C5.8,0 3.2,0 1.6,1.6 C0,3.2 0,5.8 1.6,7.4 L55.5,61.3 C56.3,62.1 57.3,62.5 58.4,62.5 C59.4,62.5 60.5,62.1 61.3,61.3 L115.2,7.4 C116.9,5.8 116.9,3.2 115.3,1.6Z'/%3E %3C/svg%3E")
                calc(100% - 12px) 50% / 12px no-repeat;
            background: var(--background) var(--select-arrow) calc(100% - 12px)
                50% / 12px no-repeat;
        }
    }

    select::-ms-expand {
        display: none;
    }

    input:focus {
        box-shadow: 0 0 0 2px #0096bfab;
        box-shadow: 0 0 0 2px var(--focus);
    }

    select:focus {
        box-shadow: 0 0 0 2px #0096bfab;
        box-shadow: 0 0 0 2px var(--focus);
    }

    @media (prefers-color-scheme: dark) {
        select:focus {
            box-shadow: 0 0 0 2px #0096bfab;
            box-shadow: 0 0 0 2px var(--focus);
        }
    }
</style>
