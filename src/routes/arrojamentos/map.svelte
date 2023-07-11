<script lang="ts">
	import 'leaflet/dist/leaflet.css';
	import markerIcon from 'leaflet/dist/images/marker-icon.png';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import type { Map, Marker } from 'leaflet';
	import type { Stranding } from '../../types';

	let mapElement: HTMLDivElement;
	let map: Map;
	export let strandings: Stranding[];

	onMount(async () => {
		if (browser) {
			const { Marker, LatLng, Map, TileLayer, Icon } = await import('leaflet');

			const icon = new Icon({ iconUrl: markerIcon, popupAnchor: [12.5, 14] });

			// Coordinates near Lisbon
			map = new Map(mapElement).setView([38.83, -9], 10);

			new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			strandings.forEach((stranding) => {
				const latlng = stranding.location.split(',');
				if (
					latlng.length != 2 ||
					typeof parseFloat(latlng[0]) !== 'number' ||
					typeof parseFloat(latlng[1]) !== 'number'
				)
					return;
				const latLngPosition = new LatLng(parseFloat(latlng[0]), parseFloat(latlng[1]));
				new Marker(latLngPosition, {
					icon: icon
				})
					.addTo(map)
					.bindPopup(
						`Espécie: ${stranding.species}<br>Reportado a: ${new Date(
							stranding.created_at
						).toLocaleString('pt', {
							timeStyle: 'short',
							dateStyle: 'short'
						})}`
					);
			});
		}
	});

	onDestroy(async () => {
		if (map) {
			map.remove();
		}
	});
</script>

<div class={$$props.class} bind:this={mapElement} />
