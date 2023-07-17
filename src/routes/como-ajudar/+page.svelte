<script>
	import { LL } from '$lib/i18n/i18n-svelte';

	const items = [
		{
			title: $LL.howToHelp.actions.volunteering.title(),
			description: $LL.howToHelp.actions.volunteering.text(),
			buttonText: $LL.howToHelp.actions.volunteering.buttonText(),
			buttonLink:
				'https://docs.google.com/forms/d/e/1FAIpQLScT5VCP4M0G9Jido-uA1bBQvTcA7bL2EuGTWnBMwI3lxRfnZw/viewform',
			externalLink: true
		},
		{
			title: $LL.howToHelp.actions.beachCleaning.title(),
			description: $LL.howToHelp.actions.beachCleaning.text(),
			buttonText: $LL.howToHelp.actions.beachCleaning.buttonText(),
			buttonLink: '/eventos#lista-eventos',
			externalLink: false
		},
		{
			title: $LL.howToHelp.actions.report.title(),
			description: $LL.howToHelp.actions.report.text(),
			buttonText: $LL.howToHelp.actions.report.buttonText(),
			buttonLink: '/reportar/arrojamento',
			externalLink: false
		}
	];
</script>

<svelte:head>
	<title>RALVT &#183; {$LL.metaHeads.howToHelp()}</title>
</svelte:head>

<main class="isolate mb-32 bg-white">
	<!-- Hero section -->
	<div class="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-sky-100/20">
		<div class="mx-auto max-w-7xl px-6 pb-32 pt-16 sm:py-40 lg:px-8">
			<div
				class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
				<h1
					class="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
					{$LL.howToHelp.hero.title()}
				</h1>
				<div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
					<p class="text-lg leading-8 text-gray-600">
						{$LL.howToHelp.hero.text()}
					</p>
				</div>
				<img
					src="/images/pages/como-ajudar/photo1.jpg"
					alt=""
					class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36" />
			</div>
		</div>
	</div>

	<!-- Content section -->
	<div class="mx-auto mt-6 max-w-7xl px-6 sm:mt-10 lg:px-8">
		<div
			class="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
			<div class="w-full lg:max-w-lg lg:flex-auto">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					{$LL.howToHelp.actions.title()}
				</h2>
				<p class="mt-6 text-xl leading-8 text-gray-600">
					{$LL.howToHelp.actions.text()}
				</p>
				<img
					src="/images/pages/como-ajudar/photo2.jpg"
					alt=""
					class="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]" />
			</div>
			<div class="w-full lg:max-w-xl lg:flex-auto">
				<ul class="-my-4 divide-y divide-gray-100">
					{#each items as item}
						<li class="py-8">
							<dl class="relative flex flex-wrap gap-x-3">
								<dt class="sr-only">Role</dt>
								<dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
									{item.title}
								</dd>
								<dt class="sr-only">Description</dt>
								<dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">
									{item.description}
								</dd>
								<dt class="sr-only">Know more</dt>
								<dd class="mt-4 text-base font-semibold leading-7 text-gray-900">
									<a
										href={item.buttonLink}
										type="button"
										target={item.externalLink ? '_blank' : '_self'}
										class="cursor-pointer rounded bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
										>{item.buttonText} <span aria-hidden="true">→</span>
									</a>
								</dd>
							</dl>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</main>
