<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import Hero from './hero.svelte';
	import Proceding from './proceding.svelte';
	import WhatIs from './what-is.svelte';
	import type { Stranding } from '../../types';
	export let data: { strandings: Stranding[] };
</script>

<svelte:head>
	<title>RALVT &#183; {$LL.meta.head.strandings()}</title>
	<meta name="description" content={$LL.meta.description.strandings()} />
</svelte:head>

<main class="bg-white">
	<section class="relative isolate py-24 pt-14 sm:py-32 lg:pb-40">
		<Hero strandings={data.strandings} />
	</section>

	<section id="o-que-e-um-arrojamento" class="mx-auto max-w-7xl px-6 pb-24 md:pb-40 lg:px-8">
		<WhatIs />
	</section>

	<section class="mx-auto max-w-7xl px-6 lg:px-8">
		<Proceding />
	</section>
</main>
