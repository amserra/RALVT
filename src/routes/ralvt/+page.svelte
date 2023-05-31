<script>
	import Team from '../../components/team.svelte';
	import Mission from './mission.svelte';
	import Hero from './hero.svelte';
	import History from './history.svelte';
</script>

<main class="isolate mb-40 bg-white">
	<!-- Hero section -->
	<Hero />

	<!-- Mission section -->
	<Mission />

	<!-- Image section -->
	<div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
		<img
			src="/images/pages/ralvt/photo6.jpg"
			alt=""
			class="aspect-[5/2] w-full object-cover xl:rounded-3xl" />
	</div>

	<!-- A nossa historia section -->
	<!-- <History /> -->

	<!-- Team section -->
	<Team />
</main>
