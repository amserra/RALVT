<script lang="ts">
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
	let receiveUpdates = false;
	let mapMarker: Marker | undefined;
	$: coordinates = mapMarker
		? `${mapMarker.getLatLng().lat},${mapMarker.getLatLng().lng}`
		: undefined;

	const getNowDate = () => new Date().toISOString().substring(0, 16);
</script>

<main class="mx-auto my-20 max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-3xl">
		<h1 class="sub-header text-center">Reportar arrojamento</h1>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			Encontrou um animal arrojado? Reporte-nos e nós iremos verificar a situação. Se não sabe, ou
			não tem a certeza de o que é um arrojamento, veja a <a
				class=" text-sky-600 hover:underline"
				href="/arrojamentos">nossa página sobre arrojamentos</a
			>.
		</p>
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
				<label for="name" class="form-label">O seu nome</label>
			</div>
			{#if $errors.name}<p class="mt-2 text-sm text-red-600">{$errors.name}</p>{/if}

			<div class="mt-6 flex flex-col-reverse">
				<input
					type="tel"
					name="phoneNumber"
					id="phoneNumber"
					autocomplete="tel"
					class="form-input mt-2"
					data-invalid={$errors.phoneNumber}
					bind:value={$form.phoneNumber}
					{...$constraints.phoneNumber} />
				<label for="phoneNumber" class="form-label">Número de telefone</label>
			</div>
			{#if $errors.phoneNumber}<p class="mt-2 text-sm text-red-600">{$errors.phoneNumber}</p>{/if}

			<div class="mt-6 flex flex-col-reverse">
				<input
					type="text"
					name="beachName"
					id="beachName"
					class="form-input mt-2"
					placeholder="e.x. Praia de Carcavelos"
					data-invalid={$errors.beachName}
					bind:value={$form.beachName}
					{...$constraints.beachName} />
				<label for="beachName" class="form-label">Nome da praia</label>
			</div>
			{#if $errors.beachName}<p class="mt-2 text-sm text-red-600">{$errors.beachName}</p>{/if}

			<div class="mt-6 flex flex-col-reverse">
				<textarea
					name="description"
					id="description"
					rows="4"
					class="form-input mt-2"
					data-invalid={$errors.description}
					bind:value={$form.description}
					{...$constraints.description} />
				<label for="description" class="form-label sibling-required:text-red-600">Descrição</label>
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
					>Localização <span class="form-label text-xs text-gray-700"
						>Clique no mapa para selecionar o ponto</span
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
				<label for="sightingDate" class="form-label">Data em que detetou o arrojamento</label>
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
					<option value="dolphin" selected>Golfinho</option>
					<option value="whale">Baleia</option>
					<option value="turtle">Tartaruga</option>
					<option value="bird">Ave</option>
				</select>
				<label for="species" class="form-label">Espécie</label>
			</div>
			{#if $errors.species}<p class="mt-2 text-sm text-red-600">{$errors.species}</p>{/if}

			<div class="mt-6 flex flex-col-reverse">
				<select
					name="condition"
					id="condition"
					class="form-input mt-2"
					data-invalid={$errors.condition}
					bind:value={$form.condition}
					{...$constraints.condition}>
					<option value="alive" selected>Vivo</option>
					<option value="fresh">Fresco</option>
					<option value="decomposition">Em decomposição</option>
					<option value="mummified">Mumificado</option>
				</select>
				<label for="condition" class="form-label">Condição do animal</label>
			</div>
			{#if $errors.condition}<p class="mt-2 text-sm text-red-600">{$errors.condition}</p>{/if}

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
					<label for="hasPhotos" class="font-medium text-gray-900">Fotografias</label>
					<p class="text-gray-500">Opcionalmente adicione fotografias do arrojamento.</p>
				</div>
			</div>

			{#if hasPhotos}
				<div class="mt-6">
					<DropZone />
					{#if $errors.photos}<p class="mt-2 text-sm text-red-600">{$errors.photos}</p>{/if}
				</div>
			{/if}

			<div class="relative mt-6 flex gap-x-3">
				<div class="flex h-6 items-center">
					<input
						type="checkbox"
						name="receiveUpdates"
						id="receiveUpdates"
						bind:checked={receiveUpdates}
						class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600" />
				</div>
				<div class="text-sm leading-6">
					<label for="receiveUpdates" class="font-medium text-gray-900">Receber atualizações</label>
					<p class="text-gray-500">Receba notificações sobre os desenvolvimentos do arrojamento.</p>
				</div>
			</div>

			{#if receiveUpdates}
				<label for="email" class="form-label mt-6">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					class="form-input mt-2"
					data-invalid={$errors.email}
					bind:value={$form.email}
					{...$constraints.email} />
				{#if $errors.email}<p class="mt-2 text-sm text-red-600">{$errors.email}</p>{/if}
			{/if}

			<div class="mt-6 flex items-center gap-x-3">
				<input
					type="checkbox"
					name="acceptedPrivacyPolicy"
					id="acceptedPrivacyPolicy"
					class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
					required />
				<label for="acceptedPrivacyPolicy" class="form-label"
					>Declaro que li e aceito a <a
						target="_blank"
						href="/politica-de-privacidade"
						class="hover:text-underline text-blue-600 hover:text-blue-800"
						>política de privacidade</a
					>.</label>
			</div>

			{#if $message}
				<Modal
					title={$page.status == 200 ? 'Formulário submetido' : 'Erro ao submeter formulário'}
					description={$page.status == 200
						? 'Obrigado por submeter o formulário'
						: 'Erro interno ao submeter formulário. Em caso de urgência, contacte-nos por telefone.'} />
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
					A enviar...
				{:else}
					Reportar arrojamento
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
