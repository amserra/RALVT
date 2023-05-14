<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import {
		Listbox,
		ListboxButton,
		ListboxLabel,
		ListboxOption,
		ListboxOptions,
		Transition
	} from '@rgossiaux/svelte-headlessui';
	import { locales } from '$lib/i18n/i18n-util';
	import type { Locales } from '$lib/i18n/i18n-types';
	import { assetToFlag } from '$lib/assets/flags/index';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let currentLocale: Locales;

	function classNames(...classes: (string | false | null | undefined)[]) {
		return classes.filter(Boolean).join(' ');
	}

	let languages = locales;

	let active: Locales = currentLocale;
</script>

<div class="w-40">
	<div class="space-y-1">
		<Listbox
			value={active}
			on:change={(event) => {
				active = event.detail;
				// Load new translation
				// goto(`${$page.url.pathname}?lang=${active}`, {
				// 	invalidateAll: true,
				// 	noScroll: true,
				// 	keepFocus: true,
				// 	replaceState: true
				// });
				window.location.href = `${$page.url.pathname}?lang=${active}`;
			}}>
			<ListboxLabel class="sr-only">Languages</ListboxLabel>

			<div class="relative">
				<span class="inline-block w-full rounded-md shadow-sm">
					<ListboxButton
						class="focus:shadow-outline-blue relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5">
						<div class="inline-flex items-center truncate">
							<img class="mr-2 h-4 w-4 rounded" src={assetToFlag(active)} alt="" />
							<span>{$LL.languages[active]()}</span>
						</div>
						<span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
							<svg
								class="h-5 w-5 text-gray-400"
								viewBox="0 0 20 20"
								fill="none"
								stroke="currentColor">
								<path
									d="M7 7l3-3 3 3m0 6l-3 3-3-3"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round" />
							</svg>
						</span>
					</ListboxButton>
				</span>

				<Transition
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
					class="absolute bottom-full mb-1 w-full rounded-md bg-white shadow-lg">
					<ListboxOptions
						class="shadow-xs max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5">
						{#each languages as code (code)}
							<ListboxOption
								value={code}
								class={({ active }) => {
									return classNames(
										'relative cursor-default select-none py-2 pl-3 pr-9 focus:outline-none',
										active ? 'bg-sky-600 text-white' : 'text-gray-900'
									);
								}}
								let:active
								let:selected>
								<div
									class={classNames(
										'inline-flex items-center truncate',
										selected ? 'font-semibold' : 'font-normal'
									)}>
									<img class="mr-2 h-4 w-4 rounded" src={assetToFlag(code)} alt="" />
									<span> {$LL.languages[code]()} </span>
								</div>
								{#if selected}
									<span
										class={classNames(
											'absolute inset-y-0 right-0 flex items-center pr-4',
											active ? 'text-white' : 'text-sky-600'
										)}>
										<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path
												fill-rule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clip-rule="evenodd" />
										</svg>
									</span>
								{/if}
							</ListboxOption>
						{/each}
					</ListboxOptions>
				</Transition>
			</div>
		</Listbox>
	</div>
</div>
