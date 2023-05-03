<script>
	import Footer from '../../components/footer.svelte';
	import Team from '../../components/team.svelte';
	import Mission from './mission.svelte';
	import Hero from './hero.svelte';
	import History from './history.svelte';
</script>

<div class="bg-white">
	<main class="isolate mb-40">
		<!-- Hero section -->
		<Hero />

		<!-- Mission section -->
		<Mission />

		<!-- Image section -->
		<div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
			<img
				src="/images/Imagem11.jpg"
				alt=""
				class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
			/>
		</div>

		<!-- A nossa historia section -->
		<History />

		<!-- Logo cloud -->
		<!-- <div class="relative">
			<div
				class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
				aria-hidden="true"
			>
				<div
					class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#5147c2] to-[#9089fc] opacity-30"
					style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
				/>
			</div>
		</div> -->

		<!-- Team section -->
		<Team />
	</main>

	<Footer />
</div>
