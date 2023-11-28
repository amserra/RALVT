<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';

	const people = [
		{
			name: 'Miguel Grilo',
			imgUrl: '/images/team/miguel-grilo.jpeg',
			role: $LL.theRalvt.team.roles.VeterinarianMale(),
			department: $LL.theRalvt.team.roles.coordinatorMale()
		},
		{
			name: 'Sofia Pardal',
			imgUrl: '/images/team/sofia-pardal.jpeg',
			role: $LL.theRalvt.team.roles.marineBiologistFemale(),
			department: $LL.theRalvt.team.roles.coordinatorFemale()
		},
		{
			name: 'Beatriz Costa',
			imgUrl: '/images/team/beatriz-costa.jpeg',
			role: $LL.theRalvt.team.roles.marineBiologistFemale(),
			department: $LL.theRalvt.team.roles.scientificDepartment()
		},
		{
			name: 'João Molarinho',
			imgUrl: '/images/team/default-photo.webp',
			role: $LL.theRalvt.team.roles.VeterinarianMale(),
			department: $LL.theRalvt.team.roles.operations()
		},
		{
			name: 'Teresa Vale',
			imgUrl: '/images/team/default-photo.webp',
			role: $LL.theRalvt.team.roles.biologistFemale(),
			department: $LL.theRalvt.team.roles.outreach()
		},
		{
			name: 'Carolina Sousa',
			imgUrl: '/images/team/default-photo.webp',
			role: $LL.theRalvt.team.roles.VeterinarianFemale(),
			department: $LL.theRalvt.team.roles.administrative()
		}
	];
</script>

<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
	<div class="mx-auto max-w-2xl lg:mx-0">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
			{$LL.theRalvt.team.title()}
		</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			{$LL.theRalvt.team.text()}
		</p>
	</div>
	<ul
		class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
		{#each people as person}
			<li>
				<img
					class="mx-auto h-32 w-32 rounded-full object-cover"
					src={person.imgUrl}
					alt={`Foto ${person.name}`}
					loading="lazy" />
				<h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
					{person.name}
				</h3>
				<p class="text-sm leading-6 text-gray-600">{person.role}</p>
				<p class="text-sm leading-6 text-sky-600">{person.department}</p>
			</li>
		{/each}
	</ul>
</div>
