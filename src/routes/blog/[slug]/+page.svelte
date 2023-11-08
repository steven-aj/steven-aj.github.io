<script>
	import App from "$lib/store";
	import { beforeUpdate } from "svelte";

	export let data;

	let { title, date, categories, cover, content } = data;

	function initHero() {
		App.setHero({
			title,
			date,
			categories,
			cover,
		});
	}

	function initCategories() {
		App.setCategories(false);
	}

	function init() {
		initHero();
		initCategories();
	}

	beforeUpdate(init);
</script>

<article>
	<svelte:component this={content} />
</article>
