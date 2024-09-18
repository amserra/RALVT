<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import type { PageData } from './$types';
	import { dateProxy, superForm } from 'sveltekit-superforms/client';
	import Map from '../../../components/map.svelte';
	import DropZone from '../../../components/drop-zone.svelte';
	import Modal from '../../../components/modal.svelte';
	import { page } from '$app/stores';
	import type { Marker } from 'leaflet';

	export let data: PageData;

	// Client API:
	const { form, errors, constraints, message, enhance, delayed } = superForm(data.form);
	// https://github.com/ciscoheat/sveltekit-superforms/discussions/74
	const sightingDateProxy = dateProxy(form, 'sightingDate', { format: 'datetime-local' });

	let hasPhotos = false;
	let mapMarker: Marker | undefined;
	$: coordinates = mapMarker
		? `${mapMarker.getLatLng().lat},${mapMarker.getLatLng().lng}`
		: undefined;

	const getNowDate = () => new Date().toISOString().substring(0, 16);
</script>

<svelte:head>
	<title>RALVT &#183; {$LL.meta.head.reportSighting()}</title>
	<meta name="description" content={$LL.meta.description.reportSighting()} />
</svelte:head>

<main class="mx-auto my-20 max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<h1 class="sub-header text-center">{$LL.form.sighting.text()}</h1>
		<p class="mt-6 text-lg leading-8 text-gray-600">{$LL.form.sighting.description()}</p>
		<form class="mt-16" method="POST" enctype="multipart/form-data" use:enhance>
			<div class="flex flex-col-reverse">
				<input
					type="text"
					name="name"
					id="name"
					autocomplete="name"
					class="form-input mt-2"
					data-invalid={$errors.name}
					bind:value={$form.name}
					{...$constraints.name} />
				<label for="name" class="form-label">{$LL.form.fields.name()}</label>
			</div>
			{#if $errors.name}<p class="mt-2 text-sm text-red-600">{$errors.name}</p>{/if}

			<div class="mt-6 flex flex-col-reverse">
				<textarea
					name="description"
					id="description"
					rows="4"
					class="form-input mt-2"
					data-invalid={$errors.description}
					bind:value={$form.description}
					{...$constraints.description} />
				<label for="description" class="form-label sibling-required:text-red-600"
					>{$LL.form.fields.description()}</label>
			</div>
			{#if $errors.description}<p class="mt-2 text-sm text-red-600">{$errors.description}</p>{/if}

			<div class="mt-6 flex flex-col-reverse">
				<input
					type="text"
					name="location"
					id="location"
					class="form-input mt-2 !hidden"
					data-invalid={$errors.location}
					bind:value={coordinates} />
				<Map class="mt-2" bind:marker={mapMarker} />
				<label for="location" class="form-label"
					>{$LL.form.fields.location()}
					<span class="form-label text-xs text-gray-700">{$LL.form.fields.locationHelpText()}</span
					></label>
			</div>
			{#if $errors.location}<p class="mt-2 text-sm text-red-600">{$errors.location}</p>{/if}

			<div class="mt-6 flex flex-col-reverse">
				<input
					type="datetime-local"
					name="sightingDate"
					id="sightingDate"
					class="form-input mt-2"
					data-invalid={$errors.sightingDate}
					bind:value={$sightingDateProxy}
					{...$constraints.sightingDate}
					max={getNowDate()} />
				<label for="sightingDate" class="form-label">{$LL.form.fields.dateOfSighting()}</label>
			</div>
			{#if $errors.sightingDate}<p class="mt-2 text-sm text-red-600">{$errors.sightingDate}</p>{/if}

			<div class="mt-6 flex flex-col-reverse">
				<select
					name="species"
					id="species"
					class="form-input mt-2"
					data-invalid={$errors.species}
					bind:value={$form.species}
					{...$constraints.species}>
					<option value="dolphin" selected>{$LL.species.names.dolphin()}</option>
					<option value="whale">{$LL.species.names.whale()}</option>
					<option value="turtle">{$LL.species.names.turtle()}</option>
				</select>
				<label for="species" class="form-label">{$LL.form.fields.species()}</label>
			</div>
			{#if $errors.species}<p class="mt-2 text-sm text-red-600">{$errors.species}</p>{/if}

			<div class="relative mt-6 flex gap-x-3">
				<div class="flex h-6 items-center">
					<input
						type="checkbox"
						name="hasPhotos"
						id="hasPhotos"
						bind:checked={hasPhotos}
						class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600" />
				</div>
				<div class="text-sm leading-6">
					<label for="hasPhotos" class="font-medium text-gray-900"
						>{$LL.form.fields.photos()}</label>
					<p class="text-gray-500">{$LL.form.fields.photosSightingHelpText()}.</p>
				</div>
			</div>

			{#if hasPhotos}
				<div class="mt-6">
					<DropZone />
					{#if $errors.photos}<p class="mt-2 text-sm text-red-600">{$errors.photos}</p>{/if}
				</div>
			{/if}

			<div class="mt-6 flex items-center gap-x-3">
				<input
					type="checkbox"
					name="acceptedPrivacyPolicy"
					id="acceptedPrivacyPolicy"
					class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
					required />
				<label for="acceptedPrivacyPolicy" class="form-label"
					>{$LL.form.fields.privacyPolicyConsentText()}
					<a
						target="_blank"
						href="/politica-de-privacidade"
						class="hover:text-underline text-blue-600 hover:text-blue-800"
						>{$LL.form.fields.privacyPolicyConsentLink()}</a
					>.</label>
			</div>

			{#if $message}
				<Modal
					title={$page.status == 200
						? $LL.form.messages.formSuccessTitle()
						: $LL.form.messages.formErrorTitle()}
					description={$page.status == 200
						? $LL.form.messages.formSuccessBody()
						: $LL.form.messages.formErrorBody()} />
			{/if}

			<button
				disabled={$delayed}
				type="submit"
				class="mt-16 inline-flex rounded-md bg-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
				{#if $delayed}
					<svg
						class="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24">
						<circle
							class="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							stroke-width="4" />
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
					</svg>
					{$LL.form.messages.sending()}...
				{:else}
					{$LL.form.buttons.reportSighting()}
				{/if}
			</button>
		</form>
	</div>
</main>

<style>
	input:required + label::after,
	select:required + label::after,
	textarea:required + label::after {
		content: '*';
		margin-left: 0.2rem;
		color: rgb(239, 68, 68);
	}
</style>
