<svelte:head>
	<title>RALVT</title>
</svelte:head>

<main>
	<section class="relative h-navscreen">
		<!-- <video autoplay muted loop class="h-full object-fill grayscale-[40%]">
			<source
				src="https://assets.mixkit.co/videos/preview/mixkit-dolphins-underwater-4133-large.mp4"
			/>
		</video> -->
		<img class="h-full w-full object-fill grayscale-[40%]" src="/video-image.jpeg" alt="" />
		<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
			<h1 class="text-center text-8xl font-bold tracking-widest text-white">RALVT</h1>
			<h2 class="mt-6 text-center text-4xl text-white">
				Rede de Arrojamentos de Lisboa e Vale do Tejo
			</h2>
		</div>
	</section>

	<section class="mx-12 mt-10 flex justify-between">
		<div>
			<img src="/images/Imagem1.jpg" alt="" />
		</div>
		<div class="">
			<img src="/images/Imagem1.jpg" alt="" />
		</div>
	</section>

	<section class="bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
				Contamos com os melhores parceiros
			</h2>
			<div
				class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
			>
				<img
					class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
					src="/images/logo-ispa.webp"
					alt="ISPA"
					width="158"
					height="48"
				/>
				<img
					class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
					src="/images/fundo-ambiental.jpeg"
					alt="Fundo Ambiental"
					width="158"
					height="48"
				/>
				<img
					class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
					src="/images/icnf.png"
					alt="ICNF"
					width="158"
					height="48"
				/>
				<img
					class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
					src="/images/mare.png"
					alt="Mare"
					width="158"
					height="48"
				/>
				<img
					class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
					src="/images/egas-moniz.png"
					alt="Egas Moniz"
					width="158"
					height="48"
				/>
			</div>
		</div>
	</section>
</main>
