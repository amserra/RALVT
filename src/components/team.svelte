<script lang="ts">
	const people = [
		{
			name: 'Miguel Grilo',
			imgUrl: '/images/Miguel-Grilo.jpg',
			role: 'Médico Veterinário',
			department: 'Coordenador'
		},
		{
			name: 'Sofia Pardal',
			imgUrl: '/images/Miguel-Grilo.jpg',
			role: 'Bióloga Marinha',
			department: 'Operações'
		},
		{
			name: 'Beatriz Costa',
			imgUrl: '/images/Miguel-Grilo.jpg',
			role: 'Bióloga Marinha',
			department: 'Administrativo'
		},
		{
			name: 'Catarina Fogaça',
			imgUrl: '/images/Miguel-Grilo.jpg',
			role: 'Médica Veterinária',
			department: 'Divulgação'
		}
	];
</script>

<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
	<div class="mx-auto max-w-2xl lg:mx-0">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A nossa equipa</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus eos totam in dolorum. Nemo
			vel facere repellendus ut eos dolores similique.
		</p>
	</div>
	<ul
		class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
		{#each people as person}
			<li>
				<img
					class="mx-auto h-32 w-32 rounded-full"
					src={person.imgUrl}
					alt={`Foto ${person.name}`} />
				<h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
					{person.name}
				</h3>
				<p class="text-sm leading-6 text-gray-600">{person.role}</p>
				<p class="text-sm leading-6 text-sky-600">{person.department}</p>
			</li>
		{/each}

		<!-- More people... -->
	</ul>
</div>
