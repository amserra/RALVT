<script lang="ts">
	import type { Stranding } from '../../types';
	import Map from './map.svelte';
	export let strandings: Stranding[];
</script>

<!-- <div
	class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
	aria-hidden="true"
>
	<div
		class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-sky-500 to-blue-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
		style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
	/>
</div> -->
<div class="mx-auto max-w-7xl px-6 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<h1 class="header">Arrojamentos</h1>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			<b>Qual a proporção de arrojamentos vivos vs mortos?</b> Entre Janeiro e Outubro de 2022 a RALVT
			registou 7% de arrojamentos vivos para 93% de arrojamentos mortos.
		</p>
		<div class="mt-10 flex items-center justify-center gap-x-6">
			<a
				href="/reportar/arrojamento"
				class="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
				>Reportar um arrojamento</a>
			<a href="#o-que-e-um-arrojamento" class="text-sm font-semibold leading-6 text-gray-900"
				>Saber mais <span aria-hidden="true">→</span></a>
		</div>
	</div>
	<div class="mt-16 flow-root sm:mt-24">
		<div
			class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
			<Map {strandings} class="h-80" />
		</div>
	</div>
</div>
<div
	class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
	aria-hidden="true">
	<div
		class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-sky-500 to-blue-800 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
		style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
</div>
