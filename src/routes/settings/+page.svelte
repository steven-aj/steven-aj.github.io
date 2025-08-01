<div>
    <h2>Site Settings</h2>

    <form>
        <section>
            <label for="mode">
                <span>Theme Mode</span>
                <select id="mode" name="mode">
                    <option>Automatic</option>
                    <option>Light</option>
                    <option>Dark</option>
                </select>
            </label>
            <span class="tooltip"
                >Save your face from a certain 'Raiders of the Lost Arc'
                dilemma. Or not, if you're into that kind of thing.</span
            >
        </section>

        <section>
            <label for="profanity">
                <span>Profanity Filter</span>
                <input id="profanity" name="profanity" type="checkbox" />
            </label>
            <span class="tooltip"
                >Censor naughty words from my content. Obviously won't work on
                images.</span
            >
        </section>
    </form>
</div>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-top: thin dotted var(--border);
        border-bottom: thin dotted var(--border);
        padding: 1.61rem;
    }

    label {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    label span {
        font-size: x-large;
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
        padding: 0 2rem;
        color: var(--text-muted);
        font-style: italic;
        margin: 0.5rem 0;
    }
</style>
