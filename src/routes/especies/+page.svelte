<script lang="ts">
	import Species from './species.svelte';

	const birds = [
		{
			regularName: 'Alcatraz',
			latinName: 'Gansus Patutus',
			conservationState: 'Muito Ameaçada',
			imgUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Morus_bassanus_9.jpg/560px-Morus_bassanus_9.jpg'
		},
		{
			regularName: 'Gaivota-de-Patas-Amarelas',
			latinName: 'Larus michahellis',
			conservationState: 'Muito Ameaçada',
			imgUrl: '/images/animals/birds/gaivota-de-patas-amarelas.jpeg'
		}
	];
</script>

<main>
	<section class="relative h-navscreen">
		<Species
			name="Aves"
			description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid."
			bgImage="/images/animals/birds/papagaios-do-mar.avif"
			species={birds}
		/>
	</section>
</main>
