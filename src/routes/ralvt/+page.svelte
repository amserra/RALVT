<script>
	import { LL } from '$lib/i18n/i18n-svelte';
	import Team from '../../components/team.svelte';
	import Mission from './mission.svelte';
	import Hero from './hero.svelte';
	import History from './history.svelte';
</script>

<svelte:head>
	<title>RALVT &#183; {$LL.meta.head.theRalvt()}</title>
	<meta name="description" content={$LL.meta.description.theRalvt()} />
</svelte:head>

<main class="isolate mb-40 bg-white">
	<!-- Hero section -->
	<Hero />

	<!-- Mission section -->
	<Mission />

	<!-- Image section -->
	<div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
		<img
			src="/images/pages/ralvt/photo6.webp"
			alt=""
			class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
			loading="lazy" />
	</div>

	<!-- A nossa historia section -->
	<!-- <History /> -->

	<!-- Team section -->
	<Team />
</main>
