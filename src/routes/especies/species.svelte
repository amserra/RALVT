<script lang="ts">
	import Carousel from '../../components/carousel.svelte';
	import type { Species } from '../../types';
	import type { Swiper } from 'swiper/types';

	export let name: string;
	export let description: string;
	export let bgImage: string;
	export let species: Species[];

	let currentSpecie = species[0];

	const onSlideChange = (e: any) => {
		const swiper = e.detail[0] as Swiper;
		currentSpecie = species[swiper.realIndex];
	};
</script>

<!-- <img class="h-full w-full object-fill grayscale-[70%]" src={bgImage} alt="" /> -->
<!-- <div class="absolute inset-0 mx-20 mt-20"> -->
<!-- <div class={`w-full bg-[url('${bgImage}')] bg-cover bg-center px-6 py-10 md:px-20 md:py-20`}> -->
<div class={`w-full bg-[url('${bgImage}')] bg-cover bg-center px-6 py-10 md:px-20 md:py-20`}>
	<h1 class="text-center text-8xl text-white md:text-left">{name}</h1>
	<div class="mt-10 flex flex-col-reverse items-center gap-10 md:flex-row md:items-start">
		<div class="flex w-full flex-col items-center">
			<Carousel
				slideChangeHandler={onSlideChange}
				slides={species.map((specie) => {
					return {
						imgUrl: specie.imgUrl,
						alt: specie.regularName
					};
				})}
			/>
			<div class="mt-6 text-center">
				<p class="font-bold uppercase text-sky-800">{currentSpecie.regularName}</p>
				<p class="font-light uppercase text-sky-800">{currentSpecie.latinName}</p>
				<p class="font-bold uppercase text-orange-400">{currentSpecie.conservationState}</p>
			</div>
		</div>
		<div class="max-w-lg rounded-lg bg-gray-900/20 px-10 py-4 backdrop-blur-lg">
			<!-- <div class="max-w-lg rounded-lg"> -->
			<p class="text-lg text-white">{description}</p>
		</div>
	</div>
</div>
