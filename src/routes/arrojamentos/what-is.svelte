<script>
	import { LL } from '$lib/i18n/i18n-svelte';
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
	<h1 class="sub-header text-center">{$LL.strandings.whatIs.title()}</h1>
	<p class="mt-6 leading-8 text-gray-600">
		{$LL.strandings.whatIs.text()}
	</p>
</div>
<Stranding
	photos={aliveStranding}
	title={$LL.strandings.whatIs.aliveStranding.title()}
	description={$LL.strandings.whatIs.aliveStranding.text()} />
<div class="h-20" />
<Stranding
	photos={deadStranding}
	title={$LL.strandings.whatIs.deadStranding.title()}
	description={$LL.strandings.whatIs.deadStranding.text()}
	reverse />
