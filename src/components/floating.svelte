<script lang="ts">
	export let mobileNavIsOpen = false;
</script>

<div
	class={`pointer-events-none fixed inset-x-0 top-[4.5rem] z-[9999] flex justify-center px-6 pb-5 transition-opacity md:bottom-0 md:top-auto lg:px-8 ${
		mobileNavIsOpen ? 'opacity-0' : 'opacity-100'
	}`}>
	<div
		class="pointer-events-auto flex items-center justify-between gap-x-6 rounded-xl bg-sky-900 px-6 py-3 pl-4 pr-3.5">
		<p class="text-sm leading-6 text-white">
			<a href="/reportar/arrojamento">
				<strong class="font-semibold">Encontrou um animal arrojado?</strong>
				<svg
					viewBox="0 0 2 2"
					class="mx-2 hidden h-0.5 w-0.5 fill-current lg:inline"
					aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg
				><span class="hidden md:inline-block"
					>Dê-nos o alerta através do nosso formulário&nbsp;</span
				><span aria-hidden="true">&rarr;</span>
			</a>
		</p>
		<!-- <button type="button" class="-m-1.5 flex-none p-1.5">
			<span class="sr-only">Dismiss</span>
			<svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path
					d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
				/>
			</svg>
		</button> -->
	</div>
</div>
