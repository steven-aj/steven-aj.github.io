<script>
    export let hero;
</script>

<header class="hero" style={`background-image: url(${hero.cover});`}>
    <div class="content">
        <h2>{hero.title}</h2>
        <div class="flex flex-col md:flex-row w-full -mb-14 py-6 items-center justify-between">
            <div class="tags" role="presentation" aria-hidden="true">
                <a
                    aria-hidden="true"
                    title={`More posts tagged "${hero.tags[0]}"`}
                    href={`/journal/tags/${hero.tags[0]}`}
                    class="badge primary"
                >
                    {hero.tags[0]}
                </a>
                <span
                    title={hero.tags.slice(1, hero.tags.length)}
                    aria-hidden="true"
                    class="text-xs text-neutral-400"
                >
                    +{hero.tags.length - 1} more
                </span>
            </div>
            <a class="cta" href={hero.path}>Read Entry</a>
        </div>
    </div>
</header>

<style lang="postcss">
    header {
        /* Container */
        @apply relative flex flex-col;

        /* Sizing */
        @apply w-full h-96;

        /* Paddings */
        @apply p-0;

        /* Margins */
        @apply mt-0;

        /* Alignments */
        @apply items-center justify-end;

        /* Background */
        @apply bg-cover bg-center;

        /* Border */
        @apply rounded-tl-lg rounded-tr-lg;
    }

    header .content {
        /* Sizing */
        @apply w-full;

        /* Margins */
        @apply my-0;

        /* Paddings */
        @apply py-10 px-4;

        /* Typography */
        @apply text-center;

        /* Background */
        @apply backdrop-blur-2xl backdrop-brightness-50;
    }

    header h2 {
        @apply my-0 text-neutral-200;
    }

    header .cta {
        /* Border */
        @apply rounded-2xl;

        /* Margins */
        @apply my-4;

        /* Typography */
        @apply text-sm;
    }

    header .tags {
        /* Container */
        @apply flex flex-row flex-wrap;

        /* Alignments */
        @apply justify-start items-center;

        /* Margins */
        @apply gap-2;
    }
</style>
