<script lang="ts">
	import { onDestroy } from 'svelte';
	import Dropzone from 'svelte-file-dropzone/Dropzone.svelte';

	const MAX_FILES = 10;

	interface ExtendedFile extends File {
		path: string;
		preview: string;
		lastModifiedDate: Date;
	}

	interface EventDetails {
		acceptedFiles: ExtendedFile[];
		// There is also rejectedFiles but we don't need it
	}

	let files: ExtendedFile[] = [];

	function handleFilesSelect(e: CustomEvent<EventDetails>) {
		const { acceptedFiles } = e.detail;
		if (acceptedFiles.length + files.length > MAX_FILES) {
			return;
		}
		files = [
			...files,
			...acceptedFiles.map((file) =>
				Object.assign(file, {
					preview: URL.createObjectURL(file)
				})
			)
		];
	}

	function handleRemoveFile(e: any, index: number) {
		files.splice(index, 1);
		files = [...files];
	}

	onDestroy(() => {
		files.forEach((file) => URL.revokeObjectURL(file.preview));
	});
</script>

<Dropzone
	name="photos"
	containerClasses="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
	on:drop={handleFilesSelect}
	accept={['image/*']}
	multiple
	inputElement
	disableDefaultStyles>
	<div class="text-center">
		<svg
			class="mx-auto h-12 w-12 text-gray-300"
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true">
			<path
				fill-rule="evenodd"
				d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
				clip-rule="evenodd" />
		</svg>
		<p class="text-md mt-4 font-bold text-gray-700">
			{files.length} fotografia{files.length == 1 ? '' : 's'} selecionada{files.length == 1
				? ''
				: 's'}
		</p>
		<div class="flex text-sm leading-6 text-gray-600">
			<label
				for="photos"
				class="relative cursor-pointer rounded-md bg-white font-semibold text-sky-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-600 focus-within:ring-offset-2 hover:text-sky-500">
				<span>Faça upload de um uma ou mais fotografias</span>
			</label>
			<p class="pl-1">ou large aqui</p>
		</div>
		<p class="text-xs leading-5 text-gray-600">
			PNG, JPG, GIF até 5MB, máximo de {MAX_FILES} ficheiros
		</p>
	</div>
</Dropzone>
<div class="mt-4 flex flex-wrap">
	{#each files as file, index}
		<div class="mr-2 mt-2 box-border inline-flex h-32 w-32 rounded-sm p-1">
			<div class="relative flex min-w-0 overflow-hidden">
				<p class="text-[4px]">{file}, {index}, {file.preview}</p>
				<img src={file.preview} alt="" class="block h-full w-auto" />
				<button
					on:click={(e) => handleRemoveFile(e, index)}
					type="button"
					class="absolute right-4 top-2 -m-1.5 flex-none rounded-full bg-red-500 p-0.5 hover:bg-red-700">
					<span class="sr-only">Dismiss</span>
					<svg
						class="h-5 w-5 text-white"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true">
						<path
							d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
					</svg>
				</button>
			</div>
		</div>
	{/each}
</div>
