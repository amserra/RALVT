<script>
	import Stranding from './stranding.svelte';

	const aliveStranding = [
		{
			imgUrl: '/images/pages/strandings/alive.jpeg',
			alt: ''
		}
	];
	const deadStranding = [
		{
			imgUrl: '/images/pages/strandings/dead1.jpg',
			alt: ''
		},
		{
			imgUrl: '/images/pages/strandings/dead2.jpg',
			alt: ''
		},
		{
			imgUrl: '/images/pages/strandings/dead3.jpg',
			alt: ''
		}
	];
</script>

<div class="mx-auto mb-20 max-w-2xl">
	<h1 class="sub-header text-center">O que é um arrojamento?</h1>
	<p class="mt-6 leading-8 text-gray-600">
		É denominado de arrojamento quando um animal marinho, vivo ou morto, encalha na costa e não
		consegue regressar à água sem qualquer auxílio. Os animais mais comuns de arrojar são os
		cetáceos (baleias e golfinhos), as tartarugas marinhas e as aves marinhas. Este fenómeno tem
		vindo a ser cada vez mais comum em Portugal, mas também em outros lugares do mundo, como em
		França, Escócia e Irlanda. Contudo, temos de ter em conta que a quantidade de entidades a
		registar este tipo de fenómenos é cada vez maior, assim como cada vez mais pessoas estão
		consciencializadas para dar alertas destes acontecimentos.
	</p>
</div>
<Stranding
	photos={aliveStranding}
	title="Arrojamento vivo"
	description="Os arrojamentos vivos são situações muito complexas, em que cada situação vai ser diferente. Por norma, os animais que arrojam vivos nas praias já não se encontram nas melhores condições de saúde e, por isso mesmo, o desfeche de um arrojamento vivo nem sempre é a sobrevivência do animal e a sua devolução ao oceano. O objetivo será sempre avaliar o estado de saúde do animal, e tomar uma decisão sobre qual será a melhor opção para reduzir o sofrimento do animal e como é que podemos evitar induzir mais stress." />
<div class="h-20" />
<Stranding
	photos={deadStranding}
	title="Arrojamentos mortos"
	description="Um arrojamento de um animal morto vai ser sempre um dado importante, porque a quantidade real de animais a morrer é muito superior à quantidade daqueles que arrojam nas praias. No entanto, a quantidade de dados a retirar em cada arrojamento vai depender do estado de decomposição do animal que arrojou. Alguns dos dados que podem ser obtidos nesta situação."
	reverse />
