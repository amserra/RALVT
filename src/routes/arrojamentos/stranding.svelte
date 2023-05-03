<script lang="ts">
	import SlideshowCarousel from '../../components/slideshow-carousel.svelte';
	import type { Slide } from '../../types';

	export let photos: Slide[];
	export let title: string;
	export let description: string;
	export let reverse: boolean = false;
</script>

<div
	class={`mt-10 flex flex-col items-center gap-10 md:items-start ${
		reverse ? 'md:flex-row-reverse' : 'md:flex-row'
	}`}
>
	<div class="w-full">
		<SlideshowCarousel slides={photos} />
	</div>
	<div class="max-w-lg px-10 py-4 md:min-w-[60%]">
		<h2 class="font-bold uppercase text-sky-800">{title}</h2>
		<p class="mt-6 text-base text-gray-800 md:text-lg">
			{description}
		</p>
	</div>
</div>
