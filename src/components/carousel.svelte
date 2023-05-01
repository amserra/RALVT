<script>
	import { browser } from '$app/environment';
	import { register } from 'swiper/element/bundle';

	register();
</script>

<swiper-container
	spaceBetween={30}
	slides-per-view={1}
	centered-slides={true}
	loop={true}
	autoplay={{
		delay: 2500,
		disableOnInteraction: false
	}}
>
	<swiper-slide>
		<img src="https://cdn.pixabay.com/photo/2022/01/25/16/55/iceberg-6966784_1280.jpg" alt="" />
	</swiper-slide>
	<swiper-slide
		><img
			src="https://cdn.pixabay.com/photo/2023/04/25/18/14/mountain-7950729_1280.jpg"
			alt=""
		/></swiper-slide
	>
	<swiper-slide
		><img
			src="https://cdn.pixabay.com/photo/2023/03/28/19/55/lake-7884049_1280.jpg"
			alt=""
		/></swiper-slide
	>
</swiper-container>
