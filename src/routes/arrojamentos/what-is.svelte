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
		Os arrojamentos são circunstâncias em que animais marinhos invertebrados ou vertebrados (sendo
		estes casos mais conhecidos, essencialmente cetáceos, pinípedes, lontras e tartarugas marinhas)
		ficam encalhados na costa. Os animais arrojados podem encontrar-se mortos, em vários estados de
		decomposição, ou mais raramente, vivos. Quando vivos, os animais apresentam normalmente
		comportamentos fora do comum devido ao stress causado pela própria condição de arrojamento.
		Existem dois tipos de arrojamentos: arrojamentos <b>vivos</b> e arrojamentos
		<b>mortos</b>.
	</p>
</div>
<Stranding
	photos={aliveStranding}
	title="Arrojamento vivo"
	description="Os arrojamentos são frequentes ao longo de todo o ano. No verão estão mais relacionados com as
    artes de pesca sendo frequente os indivíduos aparecerem vivos, ainda que em stress. No inverno
    estes arrojamentos podem estar relacionados tanto com as artes de pesca como com condições
    climatéricas extremas como tempestades." />
<div class="h-20" />
<Stranding
	photos={deadStranding}
	title="Arrojamento morto"
	description="Os arrojamentos são frequentes ao longo de todo o ano. No verão estão mais relacionados com as
  artes de pesca sendo frequente os indivíduos aparecerem vivos, ainda que em stress. No inverno
  estes arrojamentos podem estar relacionados tanto com as artes de pesca como com condições
  climatéricas extremas como tempestades."
	reverse />
