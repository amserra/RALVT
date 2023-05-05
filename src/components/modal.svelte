<script lang="ts">
	import {
		Dialog,
		DialogDescription,
		DialogOverlay,
		DialogTitle,
		Transition,
		TransitionChild
	} from '@rgossiaux/svelte-headlessui';

	let isOpen = true;
	export let title: string;
	export let description: string;
	export const openModal = () => (isOpen = true);
</script>

<Transition appear show={isOpen}>
	<Dialog as="div" class="fixed inset-0 z-10 overflow-y-auto">
		<DialogOverlay class="fixed inset-0 bg-black/30" aria-hidden="true" />
		<div class="min-h-screen px-4 text-center">
			<TransitionChild
				enter="ease-out duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0">
				<DialogOverlay class="fixed inset-0" />
			</TransitionChild>

			<TransitionChild
				enter="ease-out duration-300"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95">
				<!-- This element is to trick the browser into centering the modal contents. -->
				<span class="inline-block h-screen align-middle" aria-hidden="true"> &#8203; </span>
				<div
					class="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
					<DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
						{title}
					</DialogTitle>
					<DialogDescription>
						<div class="mt-2">
							<p class="text-sm text-gray-500">
								{description}
							</p>
						</div>
					</DialogDescription>

					<div class="mt-4">
						<button
							type="button"
							class="inline-flex justify-center rounded-md border border-transparent bg-sky-100 px-4 py-2 text-sm font-medium text-sky-900 hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
							on:click={() => (isOpen = false)}>
							Ok!
						</button>
					</div>
				</div>
			</TransitionChild>
		</div>
	</Dialog>
</Transition>
