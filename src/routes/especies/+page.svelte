<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import Species from './species.svelte';

	const cetaceans = [
		{
			regularName: $LL.species.cetaceans.commonDolphin.regularName(),
			latinName: 'Delphinus delphis',
			conservationState: $LL.species.cetaceans.commonDolphin.conservationState(),
			imgUrl: '/images/animals/cetaceans/golfinho_comum.webp',
			description: $LL.species.cetaceans.commonDolphin.description()
		},
		{
			regularName: $LL.species.cetaceans.stripedDolphin.regularName(),
			latinName: 'Stenella coeruleoalba',
			conservationState: $LL.species.cetaceans.stripedDolphin.conservationState(),
			imgUrl: '/images/animals/cetaceans/golfinho_riscado.webp',
			description: $LL.species.cetaceans.stripedDolphin.description()
		},
		{
			regularName: $LL.species.cetaceans.bottlenoseDolphin.regularName(),
			latinName: 'Tursiops truncatus',
			conservationState: $LL.species.cetaceans.bottlenoseDolphin.conservationState(),
			imgUrl: '/images/animals/cetaceans/roaz.webp',
			description: $LL.species.cetaceans.bottlenoseDolphin.description()
		},
		{
			regularName: $LL.species.cetaceans.minkeWhale.regularName(),
			latinName: 'Balaenoptera acutorostrata',
			conservationState: $LL.species.cetaceans.minkeWhale.conservationState(),
			imgUrl: '/images/animals/cetaceans/baleia_ana.webp',
			description: $LL.species.cetaceans.minkeWhale.description()
		},
		{
			regularName: $LL.species.cetaceans.spermWhale.regularName(),
			latinName: 'Physeter macrocephalus',
			conservationState: $LL.species.cetaceans.spermWhale.conservationState(),
			imgUrl: '/images/animals/cetaceans/cachalote.webp',
			description: $LL.species.cetaceans.spermWhale.description()
		}
	];

	const turtles = [
		{
			regularName: $LL.species.turtles.leatherbackTurtle.regularName(),
			latinName: 'Dermochelys coriacea',
			conservationState: $LL.species.turtles.leatherbackTurtle.conservationState(),
			imgUrl: '/images/animals/turtles/tartaruga_de_couro.webp',
			description: $LL.species.turtles.leatherbackTurtle.description()
		},
		{
			regularName: $LL.species.turtles.greenTurtle.regularName(),
			latinName: 'Chelonia mydas',
			conservationState: $LL.species.turtles.greenTurtle.conservationState(),
			imgUrl: '/images/animals/turtles/tartaruga_verde.webp',
			description: $LL.species.turtles.greenTurtle.description()
		},
		{
			regularName: $LL.species.turtles.commonTurtle.regularName(),
			latinName: 'Caretta caretta',
			conservationState: $LL.species.turtles.commonTurtle.conservationState(),
			imgUrl: '/images/animals/turtles/tartaruga_comum.webp',
			description: $LL.species.turtles.commonTurtle.description()
		}
	];

	const birds = [
		{
			regularName: $LL.species.birds.yellowLeggedGull.regularName(),
			latinName: 'Larus michahellis',
			conservationState: $LL.species.birds.yellowLeggedGull.conservationState(),
			imgUrl: '/images/animals/birds/gaivota_de_patas_amarelas.webp',
			description: $LL.species.birds.yellowLeggedGull.description()
		},
		{
			regularName: $LL.species.birds.greatCormorant.regularName(),
			latinName: 'Phalacrocorax carbo',
			conservationState: $LL.species.birds.greatCormorant.conservationState(),
			imgUrl: '/images/animals/birds/corvo_marinho.webp',
			description: $LL.species.birds.greatCormorant.description()
		},
		{
			regularName: $LL.species.birds.razorbill.regularName(),
			latinName: 'Alca torda',
			conservationState: $LL.species.birds.razorbill.conservationState(),
			imgUrl: '/images/animals/birds/torda_mergulheira.webp',
			description: $LL.species.birds.razorbill.description()
		},
		{
			regularName: $LL.species.birds.atlanticPuffin.regularName(),
			latinName: 'Fratercula arctica',
			conservationState: $LL.species.birds.atlanticPuffin.conservationState(),
			imgUrl: '/images/animals/birds/papagaio_do_mar.webp',
			description: $LL.species.birds.atlanticPuffin.description()
		}
	];
</script>

<svelte:head>
	<title>RALVT &#183; {$LL.meta.head.species()}</title>
	<meta name="description" content={$LL.meta.description.species()} />
</svelte:head>

<main>
	<div
		class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
		aria-hidden="true">
		<div
			class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-sky-500 to-blue-800 opacity-30"
			style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
	</div>
	<section class="w-full bg-cover bg-top px-6 py-10 md:px-20 md:py-20">
		<Species
			name={$LL.species.cetaceans.title()}
			nameColor="text-sky-600"
			description={$LL.species.cetaceans.description()}
			species={cetaceans}
			reverse={false} />
	</section>
	<section class="w-full bg-cover bg-top px-6 py-10 md:px-20 md:py-20">
		<Species
			name={$LL.species.turtles.title()}
			nameColor="text-yellow-600"
			description={$LL.species.turtles.description()}
			species={turtles}
			reverse={true} />
	</section>
	<section class="w-full bg-cover bg-top px-6 py-10 md:px-20 md:py-20">
		<Species
			name={$LL.species.birds.title()}
			nameColor="text-sky-600"
			description={$LL.species.birds.description()}
			species={birds}
			reverse={false} />
	</section>
</main>
