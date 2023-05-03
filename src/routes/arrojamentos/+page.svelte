<script>
	import Hero from './hero.svelte';
	import Proceding from './proceding.svelte';
	import WhatIs from './what-is.svelte';
</script>

<main class="bg-white">
	<section class="relative isolate py-24 pt-14 sm:py-32 lg:pb-40">
		<Hero />
	</section>

	<section class="mx-auto max-w-7xl px-6 pb-24 md:pb-40 lg:px-8">
		<WhatIs />
	</section>

	<section class="mx-auto max-w-7xl px-6 lg:px-8">
		<Proceding />
	</section>
</main>
