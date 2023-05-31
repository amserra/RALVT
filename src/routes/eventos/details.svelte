<script lang="ts">
	import { Transition, TransitionChild, Dialog } from '@rgossiaux/svelte-headlessui';
	import type { Event } from '../../types';

	export let open = false;
	export let toggleHandler: Function;
	export let data: Event;
</script>

<Transition show={open}>
	<Dialog class="relative z-10">
		<div class="fixed inset-0 overflow-hidden">
			<div class="absolute inset-0 overflow-hidden">
				<div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
					<TransitionChild
						enter="transform transition ease-in-out duration-500 sm:duration-700"
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="transform transition ease-in-out duration-500 sm:duration-700"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full">
						<div class="pointer-events-auto h-full w-screen max-w-md">
							<div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
								<div class="px-4 py-6 sm:px-6">
									<div class="flex items-start justify-between">
										<h2
											id="slide-over-heading"
											class="text-base font-semibold leading-6 text-gray-900">
											Evento
										</h2>
										<div class="ml-3 flex h-7 items-center">
											<button
												type="button"
												class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-sky-500"
												on:click={() => toggleHandler(false)}>
												<span class="sr-only">Close panel</span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="h-6 w-6"
													aria-hidden="true">
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M6 18L18 6M6 6l12 12" />
												</svg>
											</button>
										</div>
									</div>
								</div>
								<div>
									<div class="pb-1 sm:pb-6">
										<div>
											<div class="relative h-40 sm:h-56">
												<img
													class="absolute h-full w-full object-cover"
													src={data.imgurl}
													alt={data.title} />
											</div>
											<div class="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
												<div class="sm:flex-1">
													<div>
														<div class="flex items-center">
															<h3 class="text-xl font-bold text-gray-900 sm:text-2xl">
																{data.title}
															</h3>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="px-4 pb-5 pt-5 sm:px-0 sm:pt-0">
										<dl class="space-y-8 px-4 sm:space-y-6 sm:px-6">
											<div>
												<dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
													Descrição
												</dt>
												<dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
													<p>{data.description}</p>
												</dd>
											</div>
											<div>
												<dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
													Data e hora
												</dt>
												<dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
													{data.date.toLocaleString('pt', {
														timeStyle: 'short',
														dateStyle: 'short'
													})}
												</dd>
											</div>
											<div>
												<dt class="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
													Localização
												</dt>
												<dd class="mt-1 text-sm text-gray-900 sm:col-span-2">
													<time dateTime="1988-06-23">{data.location}</time>
												</dd>
											</div>
										</dl>
									</div>
								</div>
							</div>
						</div>
					</TransitionChild>
				</div>
			</div>
		</div>
	</Dialog>
</Transition>
