<script lang="ts">
	import 'leaflet/dist/leaflet.css';
	import markerIcon from 'leaflet/dist/images/marker-icon.png';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import type { Map, Marker } from 'leaflet';

	let loading: boolean = true;
	let mapElement: HTMLDivElement;
	let map: Map;
	export let marker: Marker | undefined;

	onMount(async () => {
		if (browser) {
			const { Marker, LatLng, Map, TileLayer, Icon } = await import('leaflet');

			const icon = new Icon({ iconUrl: markerIcon, iconSize: [25, 41], iconAnchor: [12, 41] });

			const enableClickAndMove = () => {
				loading = false;
				map.dragging.enable();
				map.on('click', (e) => {
					if (marker) marker.remove();
					marker = new Marker(e.latlng, { icon: icon }).addTo(map);
				});
			};

			// Coordinates near Lisbon
			map = new Map(mapElement).setView([38.83, -9], 10);
			map.dragging.disable();

			new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution:
					'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			}).addTo(map);

			if ('geolocation' in navigator) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						const latLngPosition = new LatLng(position.coords.latitude, position.coords.longitude);
						marker = new Marker(latLngPosition, {
							icon: icon
						}).addTo(map);
						map.setView(latLngPosition);
						enableClickAndMove();
					},
					() => enableClickAndMove(),
					{
						enableHighAccuracy: true,
						timeout: 10000,
						maximumAge: 0
					}
				);
			} else {
				enableClickAndMove();
			}
		}
	});

	onDestroy(async () => {
		if (map) {
			map.remove();
		}
	});
</script>

<div class={`h-60 ${$$props.class} flex items-center justify-center`} bind:this={mapElement}>
	<span
		class:hidden={!loading}
		class="loader z-[999] h-10 w-10 transform rounded-full border-4 border-white" />
</div>

<style>
	.loader {
		border-bottom-color: transparent;
		animation: rotation 1s linear infinite;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
