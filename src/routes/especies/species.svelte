<script lang="ts">
	import StackedCarousel from '../../components/stacked-carousel.svelte';
	import type { Species } from '../../types';
	import type { Swiper } from 'swiper/types';
	import { fade } from 'svelte/transition';

	export let name: string;
	export let nameColor: 'text-yellow-600' | 'text-sky-600';
	export let description: string;
	export let species: Species[];
	// Whether the card and text are reversed or not
	export let reverse: boolean;

	let currentSpecie = species[0];

	const onSlideChange = (e: any) => {
		const swiper = e.detail[0] as Swiper;
		currentSpecie = species[swiper.realIndex];
	};
</script>

<h1 class={`text-center text-5xl md:text-8xl ${nameColor} md:text-left`}>{name}</h1>
<h2 class="mt-6 text-center text-xl font-light text-gray-700 md:text-left">{description}</h2>
<div
	class={`mt-10 flex flex-col items-center gap-10 ${
		reverse ? 'md:flex-row-reverse' : 'md:flex-row'
	} md:items-start`}>
	<div class="flex w-full flex-col items-center self-center">
		<StackedCarousel
			slideChangeHandler={onSlideChange}
			slides={species.map((specie) => {
				return {
					imgUrl: specie.imgUrl,
					alt: specie.regularName
				};
			})} />
	</div>
	<div class="max-w-lg rounded-lg bg-gray-100/10 px-10 py-4 backdrop-blur-lg md:min-w-[60%]">
		{#key currentSpecie}
			<div in:fade class="mt-6 text-center text-lg md:text-left">
				<p class="font-bold uppercase text-sky-800">{currentSpecie.regularName}</p>
				<p class="font-light uppercase italic text-sky-800">{currentSpecie.latinName}</p>
				<p class="font-bold uppercase text-orange-400">{currentSpecie.conservationState}</p>
			</div>
			<p in:fade class="mt-6 text-base md:text-lg">{currentSpecie.description}</p>
		{/key}
	</div>
</div>
