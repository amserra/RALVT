<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';
	import Map from '../../../components/map.svelte';

	export let data: PageData;

	// Client API:
	const { form, errors, constraints } = superForm(data.form);

	let hasPhotos = true;
	let receiveUpdates = false;
</script>

<main>
	<SuperDebug data={$form} />
	<h1>Reportar avistamento</h1>
	<form method="POST" enctype="multipart/form-data">
		<label for="name">Nome</label>
		<input type="text" name="name" id="name" data-invalid={$errors.name} bind:value={$form.name} />
		{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}

		<br />

		<label for="phoneNumber">Número</label>
		<input
			type="tel"
			name="phoneNumber"
			id="phoneNumber"
			data-invalid={$errors.phoneNumber}
			bind:value={$form.phoneNumber}
			{...$constraints.phoneNumber}
		/>
		{#if $errors.phoneNumber}<span class="invalid">{$errors.phoneNumber}</span>{/if}

		<br />

		<label for="beachName">Nome da praia</label>
		<input
			type="text"
			name="beachName"
			id="beachName"
			data-invalid={$errors.beachName}
			bind:value={$form.beachName}
			{...$constraints.beachName}
		/>
		{#if $errors.beachName}<span class="invalid">{$errors.beachName}</span>{/if}

		<br />

		<label for="description">Descrição</label>
		<textarea
			name="description"
			id="description"
			rows="4"
			data-invalid={$errors.description}
			bind:value={$form.description}
			{...$constraints.description}
		/>
		{#if $errors.description}<span class="invalid">{$errors.description}</span>{/if}

		<br />

		<label for="location">Location</label>
		<input
			type="text"
			name="location"
			id="location"
			data-invalid={$errors.location}
			bind:value={$form.location}
			{...$constraints.location}
		/>
		{#if $errors.location}<span class="invalid">{$errors.location}</span>{/if}

		<br />

		<label for="sightingDate">Data de avistamento</label>
		<input
			type="datetime-local"
			name="sightingDate"
			id="sightingDate"
			data-invalid={$errors.sightingDate}
			bind:value={$form.sightingDate}
			{...$constraints.sightingDate}
		/>
		{#if $errors.sightingDate}<span class="invalid">{$errors.sightingDate}</span>{/if}

		<br />

		<label for="species">Espécie</label>
		<select
			name="species"
			id="species"
			data-invalid={$errors.species}
			bind:value={$form.species}
			{...$constraints.species}
		>
			<option value="dolphin" selected>Golfinho</option>
			<option value="whale">Baleia</option>
			<option value="turtle">Tartaruga</option>
		</select>
		{#if $errors.species}<span class="invalid">{$errors.species}</span>{/if}

		<br />

		<label for="condition">Condição do animal</label>
		<select
			name="condition"
			id="condition"
			data-invalid={$errors.condition}
			bind:value={$form.condition}
			{...$constraints.condition}
		>
			<option value="alive" selected>Vivo</option>
			<option value="fresh">Fresco</option>
			<option value="decomposition">Em decomposição</option>
			<option value="mummified">Mumificado</option>
		</select>
		{#if $errors.condition}<span class="invalid">{$errors.condition}</span>{/if}

		<br />

		<label for="hasPhotos">Fotos</label>
		<input type="checkbox" name="hasPhotos" id="hasPhotos" bind:checked={hasPhotos} />

		{#if hasPhotos}
			<label for="photos">Fotos</label>
			<input type="file" name="photos" id="photos" accept="image/*" multiple />
			{#if $errors.photos}<span class="invalid">{$errors.photos}</span>{/if}
		{/if}

		<br />

		<label for="receiveUpdates">Receber atualizações?</label>
		<input
			type="checkbox"
			name="receiveUpdates"
			id="receiveUpdates"
			bind:checked={receiveUpdates}
		/>

		{#if receiveUpdates}
			<label for="email">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				data-invalid={$errors.email}
				bind:value={$form.email}
				{...$constraints.email}
			/>
			{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
		{/if}

		<br />

		<!-- <Map /> -->

		<button type="submit" class="btn btn-primary">Reportar</button>
	</form>
</main>
