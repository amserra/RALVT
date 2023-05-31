<script lang="ts">
	import Species from './species.svelte';

	const birds = [
		{
			regularName: 'Alcatraz',
			latinName: 'Gansus Patutus',
			conservationState: 'Muito Ameaçada',
			imgUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Morus_bassanus_9.jpg/560px-Morus_bassanus_9.jpg',
			description:
				'Os Alcatraz são aves de médio a grande porte, com 64 a 100 centímetros de comprimento e peso de até 3,6 quilogramas. Algumas espécies apresentam dimorfismo sexual, sendo as fémeas maiores e mais pesadas que os machos. A plumagem é muito variável de espécie para espécie, mas geralmente é em tons de castanho e preto, sendo branca na zona ventral. As asas são longas e adaptadas a longos voos e posicionadas na metade posterior do corpo. O bico tem forma cónica e bordos serrados.'
		},
		{
			regularName: 'Gaivota-de-Patas-Amarelas',
			latinName: 'Larus michahellis',
			conservationState: 'Muito Ameaçada',
			imgUrl: '/images/animals/birds/gaivota-de-patas-amarelas.jpeg',
			description:
				'A gaivota-de-patas-amarelas ou gaivota-argêntea (Larus michahellis) é uma espécie de gaivota, pertencente ao gênero Larus e à família Laridae. Entre 1984 e 2002 a população nidificante de gaivota-de-patas-amarelas, claramente dominante em Portugal, praticamente triplicou, passando de pouco mais de 5.500 casais para perto de 16 mil. Entre 2009 e 2010 foram detectadas 9 752 destas aves em território português.'
		}
	];

	const cetaceans = [
		{
			regularName: 'Orca',
			latinName: 'Orcinus orca',
			conservationState: 'Muito Ameaçada',
			imgUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Orca_porpoising.jpg/280px-Orca_porpoising.jpg',
			description:
				'A Orca (Orcinus orca) é o membro da família dos golfinhos de maior porte e é um superpredador versátil, que inclui na sua dieta presas como peixes, moluscos, aves, tartarugas, focas, tubarões e animais de tamanho maior quando caçam em grupo, como por exemplo baleias.'
		},
		{
			regularName: 'Golfinho-comum',
			latinName: 'Delphinus delphis L.',
			conservationState: 'Muito Ameaçada',
			imgUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Common_dolphin.jpg/280px-Common_dolphin.jpg',
			description:
				'O golfinho (Delphinus delphis L.), também chamado delfim[1], ou golfinho-comum é a espécie mais comum da família Delphinidae. Há mais Delphinus delphis do que qualquer outra espécie de Delphinus nas águas temperadas dos oceanos Atlântico e Pacífico. Também pode ser encontrado nos mares do Caribe e do Mediterrâneo.'
		}
	];

	const turtles = [
		{
			regularName: 'Tartaruga-comum',
			latinName: 'Caretta caretta',
			conservationState: 'Muito Ameaçada',
			imgUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Loggerhead_sea_turtle.jpg/280px-Loggerhead_sea_turtle.jpg',
			description:
				'Passa a maior parte da sua vida em habitats marinhos e estuarinos, e as fêmeas só vêm à praia para desovar. O seu potencial de reprodução é extremamente baixo; as fêmeas põem em média quatro ninhadas de ovos e posteriormente passam por um período de aquiescência no qual não põem ovos durante dois ou três anos borbe.'
		},
		{
			regularName: 'Tartaruga-marinha',
			latinName: 'Cheloniidae',
			conservationState: 'Muito Ameaçada',
			imgUrl:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Chelonia_mydas_is_going_for_the_air_edit.jpg/220px-Chelonia_mydas_is_going_for_the_air_edit.jpg',
			description:
				'Tartaruga-marinha (Cheloniidae) é a família da ordem das tartarugas que inclui as espécies que habitam mares tropicais e subtropicais em todo o mundo. O grupo é constituído por seis gêneros e sete espécies, todas elas ameaçadas de extinção.'
		}
	];
</script>

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
			name="Cetáceos"
			nameColor="text-sky-600"
			description="Os cetáceos (latim científico: Cetacea) constituem uma infraordem[1][2] de animais predominantemente marinhos e pertencentes à classe dos mamíferos. O nome da ordem deriva do grego ketos que significa monstro marinho.O nome Cetacea foi usado pela primeira vez em 1762 por Mathurin Jacques Brisson em seu livro Regnum animale in classes IX. distributum, sive, Synopsis methodica, para classificar animais marinhos descritos como tendo corpo alongado e sem pelos, com nadadeiras carnosas e cauda horizontalmente achatada, que respiram por meio de pulmões, que apresentam um coração dividido em dois ventrículos e cujas fêmeas vivíparas alimentam seus filhotes com leite."
			species={cetaceans}
			reverse={false} />
	</section>
	<section class="w-full bg-cover bg-top px-6 py-10 md:px-20 md:py-20">
		<Species
			name="Tartarugas"
			nameColor="text-yellow-600"
			description="Os Testudines, quelónios ou tartarugas são uma ordem de répteis pertencentes ao clado Testudinata. Existem 14 famílias que somam em torno de 356 espécies, ocorrendo em regiões tropicais e temperadas do globo, sendo algumas delas ameaçadas de extinção. Os termos populares cágado (água doce), jabuti (terrestres) e tartarugas (marinhas) não refletem classificação taxonômica. A ordem dos Testudines estão divididas filogeneticamente em dois grandes grupos: Cryptodira (retração do pescoço anteroposterior) e Pleurodira (retração do pescoço lateral)."
			species={turtles}
			reverse={true} />
	</section>
	<section class="w-full bg-cover bg-top px-6 py-10 md:px-20 md:py-20">
		<Species
			name="Aves"
			nameColor="text-sky-600"
			description="Aves são uma classe de seres vivos vertebrados endotérmicos caracterizada pela presença de penas, um bico sem dentes, oviparidade de casca rígida, elevado metabolismo, um coração com quatro câmaras e um esqueleto pneumático resistente e leve. As aves estão presentes em todas as regiões do mundo e variam significativamente de tamanho, desde os 5 cm do colibri até aos 2,75 m da avestruz. São a classe de tetrápodes com o maior número de espécies vivas, aproximadamente dez mil, das quais mais de metade são passeriformes. As aves apresentam asas, que são mais ou menos desenvolvidas dependendo da espécie."
			species={birds}
			reverse={false} />
	</section>
</main>
