<script>
	import Footer from '../components/footer.svelte';
</script>

<svelte:head>
	<title>RALVT</title>
</svelte:head>

<main>
	<section class="h-navscreen relative">
		<!-- <video autoplay muted loop class="h-full object-fill grayscale-[40%]">
			<source
				src="https://assets.mixkit.co/videos/preview/mixkit-dolphins-underwater-4133-large.mp4"
			/>
		</video> -->
		<img class="h-full w-full object-fill grayscale-[40%]" src="/video-image.jpeg" alt="" />
		<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<h1 class="text-center text-white text-8xl font-bold">RALVT</h1>
			<h2 class="text-center text-white text-4xl mt-6">
				Rede de Arrojamentos de Lisboa e Vale do Tejo
			</h2>
		</div>
	</section>
</main>

<Footer />
