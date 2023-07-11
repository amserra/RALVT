<script lang="ts">
	import Species from './species.svelte';

	const birds = [
		{
			regularName: 'Gaivota-de-patas-amarelas',
			latinName: 'Larus michahellis',
			conservationState: 'Pouco Preocupante',
			imgUrl: '/images/animals/birds/gaivota_de_patas_amarelas.png',
			description:
				'Espécie residente em Portugal possuindo uma envergadura de até 140 cm. Podem pesar entre 620-1100g e alimentam-se de peixe, invertebrados, répteis, pequenos mamíferos e lixo.  Em Portugal, podemos observar esta espécie todo o ano, mais perto da orla costeira, incluindo áreas naturais e zonas urbanas. Pode viver até 20 anos. '
		},
		{
			regularName: 'Corvo-marinho',
			latinName: 'Phalacrocorax carbo',
			conservationState: 'Pouco Preocupante',
			imgUrl: '/images/animals/birds/corvo_marinho.png',
			description:
				'Espécie invernante e residente em Portugal continental, sendo mais comum entre setembro e abril. A sua dieta é maioritariamente composta por peixe. Pode medir de envergadura 110cm e pesar até 2500g. Podem estar mais de 1m debaixo de água, sendo que não possuem penas impermeáveis após os mergulhos, tendo a necessidade de se secar.'
		},
		{
			regularName: 'Torda-mergulheira',
			latinName: 'Alca torda',
			conservationState: 'Pouco Preocupante',
			imgUrl: '/images/animals/birds/torda_mergulheira.png',
			description:
				'Espécie pequena e que se pode observar em Portugal entre novembro a março ao longo da costa. Ave que é mais encontrada arrojada morta nas praias. Pode ter uma envergadura de 67cm e pode pesar entre 590-730g. Alimentam-se maioritariamente de pequenos peixes e krill. A sua longevidade média é de 20 anos, mas podem até aos 40 anos. Têm a capacidade de mergulhar até os 120 metros de profundidade, o equivalente a um prédio de 10 andares.'
		},
		{
			regularName: 'Papagaio-do-mar',
			latinName: 'Fratercula arctica',
			conservationState: 'Vulnerável',
			imgUrl: '/images/animals/birds/papagaio_do_mar.png',
			description:
				'Pode ser apenas encontrado no atlântico norte e em Portugal continental é uma espécie invernante e migrador de passagem. Pode ser visto entre outubro e abril ao longo da costa. Esta espécie passa a maior parte da sua vida em alto-mar. Alimenta-se maioritariamente de peixe, mas pouco se sobre a sua dieta.'
		}
	];

	const cetaceans = [
		{
			regularName: 'Golfinho Comum',
			latinName: 'Delphinus delphis',
			conservationState: 'Pouco Preocupante',
			imgUrl: '/images/animals/cetaceans/golfinho_comum.png',
			description:
				'O golfinho-comum é uma espécie que pode ser encontrada em todos os oceanos do mundo. Em adultos podem atingir os 2,7 m e pesar até 200 kg, enquanto as crias pesam à volta dos 10kg e têm apenas 85 cm. Geralmente, são encontrados em grupo até centenas de indivíduos. Considerados animais muito ágeis e que desenvolvem comportamentos aéreos, interagem com as embarcações num comportamento denominado de “bow riding”. A sua alimentação é à base de peixe e cefalópodes (lulas e polvos). A sua longevidade média é de 35 anos.'
		},
		{
			regularName: 'Golfinho-riscado',
			latinName: 'Stenella coeruleoalba',
			conservationState: 'Pouco Preocupante',
			imgUrl: '/images/animals/cetaceans/golfinho_riscado.png',
			description:
				'O golfinho-riscado pode ser encontrado em águas tropicais e temperadas. Os adultos podem ter até 2,5 m e pesar até 160 kg. Geralmente, podem ser vistos em grupos de aproximadamente 20 a 50 indivíduos. Estes animais apresentam comportamentos aéreos, mas sempre com precaução quando se aproximam dos barcos. Alimentam-se maioritariamente de peixe e cefalópodes (lulas e polvos). A sua longevidade média é de 30 anos.'
		},
		{
			regularName: 'Roaz',
			latinName: 'Tursiops truncatus',
			conservationState: 'Pouco Preocupante',
			imgUrl: '/images/animals/cetaceans/roaz.png',
			description:
				'O golfinho-roaz, podem ser encontrados mundialmente, sendo que em Portugal existe a população residente do estuário do Sado que conta com 31 indivíduos. Os adultos podem ter até 3,9 m e pesar até 635 kg. Esta espécie pode ser avistada em grupos sociais mais pequenos, entre 2 a 15 indivíduos, mas também em grupos maiores. Alimentam-se de peixes e cefalópodes. A sua longevidade média é de 52 anos.'
		},
		{
			regularName: 'Baleia-anã',
			latinName: 'Balaenoptera acutorostrata',
			conservationState: 'Pouco Preocupante',
			imgUrl: '/images/animals/cetaceans/baleia_ana.png',
			description:
				'A baleia anã é uma espécie migratória e que está presente em vários oceanos do planeta. Os adultos podem ter até 9,8 m e pesar até 10 toneladas. É uma espécie solitária mas também pode ser encontrada em pequenos grupos. Alimentam-se de krill, crustáceos e peixe. A sua longevidade média é de 50 anos. São animais tímidos e que se afastam dos barcos.'
		},
		{
			regularName: 'Cachalote',
			latinName: 'Physeter macrocephalus',
			conservationState: 'Vulnerável',
			imgUrl: '/images/animals/cetaceans/cachalote.png',
			description:
				'O cachalote é o maior cetáceo com dentes, tendo apenas um espiráculo e este localiza-se na parte frontal da cabeça e desviado ligeiramente para a esquerda. Estes animais possuem um crânio grande quando comparado com o resto do corpo e com uma forma quadrada. Os adultos podem ter até 20 m e pesar até 57 toneladas. Alimentam-se de lulas, crustáceos e peixe. A sua longevidade média é de 60 anos. Podem mergulhar até 600 m e estes mergulhos podem durar 45 minutos.'
		}
	];

	const turtles = [
		{
			regularName: 'Tartaruga-de-couro',
			latinName: 'Dermochelys coriacea',
			conservationState: 'Vulnerável',
			imgUrl: '/images/animals/turtles/tartaruga_de_couro.png',
			description:
				'A tartaruga-de-couro é a maior espécie de tartarugas do planeta. Não possuem placas córneas, nem uma carapaça dura. Apresentam comportamentos migratórios e mergulham a grandes profundidades. Passam a maior parte da sua vida no oceano, e apenas as fêmeas se dirigem às praias para poderem deixar os ovos no ninho. Os adultos podem medir até 2,5 m e pesar até 500 kg. É uma espécie solitária. A sua alimentação é maioritariamente composta por alforrecas e moluscos. A sua longevidade média é de 50 anos.'
		},
		{
			regularName: 'Tartaruga-verde',
			latinName: 'Chelonia mydas',
			conservationState: 'Em Perigo',
			imgUrl: '/images/animals/turtles/tartaruga_verde.png',
			description:
				'Esta espécie possui uma distribuição circumglobal, e apresenta comportamentos migratórios. Podem atingir até 1,5m e podem pesar até 200 kg. São tartarugas solitárias. São herbívoras e a sua longevidade média é de 80 anos. O seu bico serrilhado é adaptado ao consumo de plantas e algas. A sua gordura interna é verde.'
		},
		{
			regularName: 'Tartaruga-comum',
			latinName: 'Caretta caretta',
			conservationState: 'Vulnerável',
			imgUrl: '/images/animals/turtles/tartaruga_comum.png',
			description:
				'Distribuída globalmente, estas tartarugas podem medir até 2,13m e pode pesar até 140 kg. A sua longevidade média é de 70 anos. é uma espécie solitária e omnívora, alimentando-se de diversos animais. Estas tartarugas, geralmente, possuem muitos organismos na sua carapaça, como lapas e caranguejos, algas e outros invertebrados (epibiontes).'
		}
	];
</script>

<svelte:head>
	<title>RALVT &#183; Espécies</title>
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
			name="Cetáceos"
			nameColor="text-sky-600"
			description="Em Portugal continental, existem 28 espécies de mamíferos marinhos, no entanto globalmente existem pelo menos 90 espécies conhecidas. Estes animais são também denominados de cetáceos e pertencem à ordem Cetartiodáctilos. São um grupo extremamente diversificado, que possuem dialetos e estruturas hierárquicas, alimentação e rotinas diferentes. Os cetáceos são divididos em dois grupos, os odontocetes ou baleias com dentes e os misticetos ou baleias de barbas. Estes animais têm uma representatividade ecológica muito significativa, sendo bastante impactados por várias atividades antropogénicas como por exemplo: a poluição, a pesca acidental, tráfego marítimo e por atividades que interrompam os eventos de alimentação e reprodução."
			species={cetaceans}
			reverse={false} />
	</section>
	<section class="w-full bg-cover bg-top px-6 py-10 md:px-20 md:py-20">
		<Species
			name="Tartarugas"
			nameColor="text-yellow-600"
			description="Em todo o mundo existem mais de 300 espécies de tartarugas mas apenas 7 são marinhas, sendo que em Portugal temos presentes 5 dessas espécies. Tendo as tartarugas marinhas evoluído de animais terrestes, ainda possuem características dos mesmos, tal como a respiração através do ar e a necessidade de incubarem os ovos em ninhos escavados nas praias, sendo que as fêmeas regressam à praia onde nasceram para colocar os seus ovos. Das 5 espécies em Portugal, as mais comuns de observar em águas continentais são: tartaruga-de-couro e a tartaruga-comum."
			species={turtles}
			reverse={true} />
	</section>
	<section class="w-full bg-cover bg-top px-6 py-10 md:px-20 md:py-20">
		<Species
			name="Aves"
			nameColor="text-sky-600"
			description="Em Portugal continental, podemos encontrar vários grupos taxonómicos, existindo 65 espécies de aves marinhas."
			species={birds}
			reverse={false} />
	</section>
</main>
