<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	let scroll: number;
	// Threshold where the video stops appearing on the screen (in pixels)
	const threshold = 138;
</script>

<svelte:head>
	<title>RALVT</title>
	<meta name="description" content={$LL.meta.description.home()} />
</svelte:head>

<svelte:window bind:scrollY={scroll} />

<main class="mt-16">
	<section class="relative h-navscreen">
		<div
			class="relative h-full w-full"
			style:transform={`translate3d(0, ${scroll > threshold ? 0 : scroll}px, 0)`}>
			<video
				autoplay
				muted
				loop
				playsinline
				class="min-h-full min-w-full object-cover grayscale-[40%]">
				<source src="/video/dolphins-swimming.mp4" type="video/mp4" />
			</video>
			<span class="absolute right-0 top-0 z-[999] m-4 text-sm text-white"
				>@ Francisco Neves, David Jacinto</span>
		</div>
		<!-- <img class="h-full w-full object-fill grayscale-[40%]" src="/video-image.jpeg" alt="" /> -->
		<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
			<div style:transform={`translate3d(0, ${scroll * -2}px, 0)`}>
				<h1 class="text-center text-8xl font-bold tracking-widest text-white">RALVT</h1>
				<h2 class="mt-6 text-center text-4xl text-white">{$LL.RALVT()}</h2>
			</div>
		</div>
		<div
			class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
			style:transform={`translate3d(0, ${scroll * -3}px, 0)`}>
			<div class="mx-auto flex h-40 max-w-4xl justify-center gap-6 md:h-96 md:gap-10 lg:gap-28">
				<a class="card-zoom" href="/reportar/arrojamento">
					<div class="card-zoom-image bg-[url('/images/pages/home/photo1.jpeg')]" />
					<h1 class="card-zoom-text">{$LL.report()}<br />{$LL.stranding()}</h1>
				</a>
				<a class="card-zoom" href="/reportar/avistamento">
					<div class="card-zoom-image bg-[url('/images/Imagem1.jpg')]" />
					<h1 class="card-zoom-text">{$LL.report()}<br />{$LL.sighting()}</h1>
				</a>
			</div>
		</div>
	</section>

	<section class="bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
				{$LL.partners()}
			</h2>
			<div
				class="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
				<img
					class="max-h-16 w-full object-contain lg:col-span-1"
					src="/images/logo-ispa.webp"
					alt="ISPA"
					width="158"
					height="48" />
				<img
					class="max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1"
					src="/images/mare.png"
					alt="Mare"
					width="158"
					height="48" />
				<img
					class="max-h-16 w-full object-contain lg:col-span-1"
					src="/images/fundo-ambiental.jpeg"
					alt="Fundo Ambiental"
					width="158"
					height="48" />
				<img
					class="max-h-16 w-full object-contain lg:col-span-1"
					src="/images/icnf.png"
					alt="ICNF"
					width="158"
					height="48" />
			</div>
		</div>
	</section>
</main>

<style lang="scss">
	.card-zoom {
		@apply relative m-3 flex min-h-full w-full items-center justify-center overflow-hidden rounded-full shadow-xl;
	}

	.card-zoom-image {
		@apply absolute h-full w-full transform bg-cover bg-center transition-all duration-500 ease-in-out;
	}

	.card-zoom-text {
		@apply absolute scale-150 transform text-center text-xs font-black text-gray-50 transition-all duration-500 ease-in-out md:text-3xl;
	}

	.card-zoom:hover .card-zoom-image {
		@apply scale-150;
	}

	.card-zoom:hover .card-zoom-text {
		@apply scale-125;
	}
</style>
