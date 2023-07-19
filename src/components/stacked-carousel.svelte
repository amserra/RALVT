<script lang="ts">
	import type { Slide } from '../types';

	export let slideChangeHandler: Function;
	export let slides: Slide[];
</script>

<swiper-container
	class="max-w-[14rem] md:max-w-[18rem]"
	navigation={true}
	pagination={{
		enabled: true,
		clickable: true
	}}
	effect="cards"
	grab-cursor={true}
	keyboard={true}
	on:slidechange={slideChangeHandler}>
	{#each slides as slide}
		<swiper-slide>
			<img src={slide.imgUrl} alt={slide.alt} class="w-full rounded-xl object-scale-down" />
		</swiper-slide>
	{/each}
</swiper-container>
