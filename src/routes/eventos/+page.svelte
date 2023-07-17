<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import Details from './details.svelte';
	import type { Event } from '../../types';
	export let data: { events: Event[] };

	const today = new Date();

	const pastEvents = data.events.filter((ev) => ev.date <= today);
	const futureEvents = data.events.filter((ev) => ev.date > today);

	const toggleDetails = (status: boolean) => {
		detailsIsOpen = status;
	};

	let detailsIsOpen = false;
	let currentEvent: Event;
</script>

<svelte:head>
	<title>RALVT &#183; {$LL.metaHeads.events()}</title>
</svelte:head>

<main class="bg-white">
	<section class="pt-14 sm:pt-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h1 class="header">{$LL.events.title()}</h1>
			</div>
		</div>
		<div class="mt-16 sm:mt-20 xl:mx-auto xl:max-w-7xl xl:px-8">
			<img
				src="/images/pages/events/photo1.jpg"
				alt=""
				class="aspect-[5/2] w-full object-cover xl:rounded-3xl" />
		</div>
	</section>

	<section id="lista-eventos" class="mx-auto mb-20 mt-20 max-w-7xl px-6 lg:px-8">
		<h2 class="text-base font-semibold leading-6 text-gray-900">{$LL.events.futureEvents()}</h2>
		<ol class="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
			{#each futureEvents as event}
				<li class="py-4 md:flex">
					<p class="w-52 flex-none">{event.date.toLocaleDateString('pt')}</p>
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
			{:else}
				<p>{$LL.events.noFutureEvents()}</p>
			{/each}
		</ol>
	</section>
	{#if pastEvents.length > 0}
		<section class="mx-auto mb-20 mt-20 max-w-7xl px-6 lg:px-8">
			<h2 class="text-base font-semibold leading-6 text-gray-900">{$LL.events.pastEvents()}</h2>
			<ol class="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
				{#each pastEvents as event}
					<li class="py-4 md:flex">
						<p class="w-52 flex-none">{event.date.toLocaleDateString('pt')}</p>
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
				{:else}
					<p>{$LL.events.noPastEvents()}</p>
				{/each}
			</ol>
		</section>
	{/if}

	<Details open={detailsIsOpen} toggleHandler={toggleDetails} data={currentEvent} />
</main>
