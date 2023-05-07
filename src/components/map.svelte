<script lang="ts">
	import 'leaflet/dist/leaflet.css';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import type { Map, Marker } from 'leaflet';

	let mapElement: HTMLDivElement;
	let map: Map;
	export let marker: Marker | undefined;

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet');

			// Coordinates near Lisbon
			map = leaflet.map(mapElement).setView([38.83, -9], 10);

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map);

			map.on('click', (e) => {
				if (marker) marker.remove();
				marker = leaflet.marker(e.latlng).addTo(map);
			});
		}
	});

	onDestroy(async () => {
		if (map) {
			console.log('Unloading Leaflet map.');
			map.remove();
		}
	});
</script>

<div class={`h-60 ${$$props.class}`} bind:this={mapElement} />
