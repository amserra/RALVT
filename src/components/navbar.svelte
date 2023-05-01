<script>
	import { page } from '$app/stores';

	let isOpen = false;

	// Close the navbar when the page closes
	page.subscribe(() => {
		isOpen = false;
	});
</script>

<nav class="bg-white shadow h-16">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex">
				<div class="-ml-2 mr-2 flex items-center md:hidden">
					<button
						type="button"
						class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
						aria-controls="mobile-menu"
						aria-expanded={isOpen}
						on:click={() => (isOpen = !isOpen)}
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
						<svg
							class="hidden h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<a href="/" class="flex-shrink-0 flex items-center">
					<img class="block lg:hidden h-8 w-auto" src="/logo.png" alt="RALVT logo" />
					<img class="hidden lg:block h-8 w-auto" src="/logo.png" alt="RALVT logo" />
				</a>
				<div class="hidden md:ml-6 md:flex md:space-x-8">
					<a
						href="/ralvt"
						class="nav-item"
						class:inactive={$page.route.id != '/ralvt'}
						class:active={$page.route.id == '/ralvt'}>A RALVT</a
					>
					<a
						href="/especies"
						class="nav-item"
						class:inactive={$page.route.id != '/especies'}
						class:active={$page.route.id == '/especies'}>Espécies</a
					>
					<a
						href="/alertas"
						class="nav-item"
						class:inactive={$page.route.id != '/alertas'}
						class:active={$page.route.id == '/alertas'}>Alertas</a
					>
					<a
						href="/eventos"
						class="nav-item"
						class:inactive={$page.route.id != '/eventos'}
						class:active={$page.route.id == '/eventos'}>Eventos</a
					>
					<a
						href="/como-ajudar"
						class="nav-item"
						class:inactive={$page.route.id != '/como-ajudar'}
						class:active={$page.route.id == '/como-ajudar'}>Como ajudar</a
					>
				</div>
			</div>
			<div class="flex items-center">
				<div class="flex-shrink-0">
					<button
						type="button"
						class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
					>
						<svg
							class="-ml-1 mr-2 h-5 w-5 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
							/>
						</svg>

						<span>Contactos</span>
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div
		class="md:hidden z-50 border-b border-b-gray-200 absolute bg-white w-full"
		id="mobile-menu"
		class:hidden={!isOpen}
	>
		<div class="pt-2 pb-3 space-y-1">
			<a
				href="/ralvt"
				class="nav-item-mobile"
				class:inactive={$page.route.id != '/ralvt'}
				class:active={$page.route.id == '/ralvt'}>A RALVT</a
			>
			<a
				href="/especies"
				class="nav-item-mobile"
				class:inactive={$page.route.id != '/especies'}
				class:active={$page.route.id == '/especies'}>Espécies</a
			>
			<a
				href="/alertas"
				class="nav-item-mobile"
				class:inactive={$page.route.id != '/alertas'}
				class:active={$page.route.id == '/alertas'}>Alertas</a
			>
			<a
				href="/eventos"
				class="nav-item-mobile"
				class:inactive={$page.route.id != '/eventos'}
				class:active={$page.route.id == '/eventos'}>Eventos</a
			>
			<a
				href="/como-ajudar"
				class="nav-item-mobile"
				class:inactive={$page.route.id != '/como-ajudar'}
				class:active={$page.route.id == '/como-ajudar'}>Como ajudar</a
			>
		</div>
	</div>
</nav>

<style lang="scss">
	.nav-item {
		@apply inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium;
	}

	.nav-item.active {
		@apply border-sky-500 text-gray-900;
	}

	.nav-item.inactive {
		@apply border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700;
	}

	.nav-item-mobile {
		@apply block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6;
	}

	.nav-item-mobile.active {
		@apply bg-sky-50 border-sky-500 text-sky-700;
	}

	.nav-item-mobile.inactive {
		@apply border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700;
	}
</style>
