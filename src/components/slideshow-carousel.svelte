<script lang="ts">
	import type { Slide } from '../types';

	export let slides: Slide[];

	const generateRandomNumber = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const autoPlayDelay = generateRandomNumber(6000, 10000);
</script>

<swiper-container
	class="max-w-[14rem] md:max-w-[18rem]"
	navigation={true}
	pagination={{
		enabled: true,
		clickable: true
	}}
	autoplay-delay={autoPlayDelay}
	grab-cursor={true}
	keyboard={true}
>
	{#each slides as slide}
		<swiper-slide>
			<img src={slide.imgUrl} alt={slide.alt} class="aspect-[2/3] w-full rounded-xl object-cover" />
		</swiper-slide>
	{/each}
</swiper-container>
