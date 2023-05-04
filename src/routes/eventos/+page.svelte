<script lang="ts">
	import Details from './details.svelte';
	import type { Event } from '../../types';

	const events = [
		{
			date: 'Quarta, 3 de Maio',
			hour: '14:30 - 16:30',
			title: 'Limpeza de praia',
			description: 'Limpeza de praia para arrumar com o lixo todo.',
			location: 'Praia do Meco',
			imgUrl: '/images/Imagem11.jpg'
		},
		{
			date: 'Terça, 10 de Maio',
			hour: 'Todo o dia',
			title: 'Workshop de arrojamentos marinhos',
			description: 'Quem ganha numa corrida: uma lebre ou uma tartaruga?',
			location: 'Praia do Meco',
			imgUrl: '/images/Imagem11.jpg'
		},
		{
			date: 'Quarta, 1 de Novembro',
			hour: '8:30 - 10:30',
			title: 'Limpeza de praia',
			description: 'E o pitinho piu.',
			location: 'Praia do Meco',
			imgUrl: '/images/Imagem11.jpg'
		},
		{
			date: 'Sexta, 10 de Novembro',
			hour: '16:00 - 17:15',
			title: 'Saída de campo',
			description: 'O que é que um tubarão diz para o outro?',
			location: 'Praia do Meco',
			imgUrl: '/images/Imagem11.jpg'
		}
	];

	const toggleDetails = (status: boolean) => {
		detailsIsOpen = status;
	};

	let detailsIsOpen = false;
	let currentEvent: Event;
</script>

<section class="pt-14 sm:pt-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="header">Eventos</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Todos os anos arrojam na costa Portuguesas mais de 1000 animais...
			</p>
		</div>
	</div>
	<div class="mt-16 sm:mt-20 xl:mx-auto xl:max-w-7xl xl:px-8">
		<img
			src="/images/Imagem11.jpg"
			alt=""
			class="aspect-[5/2] w-full object-cover xl:rounded-3xl" />
	</div>
</section>

<section class="mx-auto mb-20 mt-20 max-w-7xl px-6 lg:px-8">
	<h2 class="text-base font-semibold leading-6 text-gray-900">Próximos eventos</h2>
	<ol class="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
		{#each events as event}
			<li class="py-4 md:flex">
				<p class="w-52 flex-none">{event.date}</p>
				<p class="mt-2 flex-auto font-semibold text-gray-900 md:mt-0">{event.title}</p>
				<button
					on:click={() => {
						detailsIsOpen = true;
						currentEvent = event;
					}}
					class="mt-2 inline-block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 md:mt-0">
					&#43; Detalhes
				</button>
			</li>
		{/each}
	</ol>

	<Details open={detailsIsOpen} toggleHandler={toggleDetails} data={currentEvent} />
</section>
