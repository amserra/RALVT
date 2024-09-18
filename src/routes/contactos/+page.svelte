<script>
	import { LL } from '$lib/i18n/i18n-svelte';

	const contacts = [
		{
			title: $LL.contacts.lisbonAndTagusValley.title(),
			contacts: [
				{
					name: 'RALVT',
					email: 'geral@ralvt.pt',
					phone: '911 111 241'
				},
				{
					name: $LL.contacts.lisbonAndTagusValley.maritimePolicePeniche(),
					email: 'policiamaritima.peniche@amn.pt',
					phone: '918 498 039'
				},
				{
					name: $LL.contacts.lisbonAndTagusValley.civilProtection(),
					email: null,
					phone: '212 280 521'
				},
				{
					name: $LL.contacts.lisbonAndTagusValley.maritimePolcieSesimbra(),
					email: null,
					phone: '918 498 053'
				},
				{
					name: $LL.contacts.lisbonAndTagusValley.capitancyCascais(),
					email: 'capitania.cascais@amn.pt',
					phone: '210 732 664'
				},
				{
					name: $LL.contacts.lisbonAndTagusValley.maritimePoliceAlmada(),
					email: 'policiamaritima.caparica@marinha.pt',
					phone: '212 913 101'
				},
				{
					name: $LL.contacts.lisbonAndTagusValley.maritimeDelegationEriceira(),
					email: 'delegmar.ericeira@amn.pt',
					phone: '261 862 526'
				},
				{
					name: $LL.contacts.lisbonAndTagusValley.localCommandLisbon(),
					email: 'policiamaritima.lisboa@amn.pt',
					phone: '918 498 025/ 210 911 149 / 210 911 155'
				}
			]
		},
		{
			title: $LL.contacts.otherStrandingNetworks.title(),
			contacts: [
				{
					name: $LL.contacts.otherStrandingNetworks.arrojal(),
					email: null,
					phone: '932 004 615'
				},
				{
					name: $LL.contacts.otherStrandingNetworks.abrigos(),
					email: null,
					phone: '968 849 101'
				},
				{
					name: $LL.contacts.otherStrandingNetworks.raalg(),
					email: 'raalg.arrojamentos@gmail.com',
					phone: '968 688 233'
				},
				{
					name: 'CRAM',
					email: null,
					phone: '919 618 705'
				}
			]
		},
		{
			title: $LL.contacts.recoveryCenters.title(),
			contacts: [
				{
					name: $LL.contacts.recoveryCenters.crassa(),
					email: null,
					phone: '925 403 833'
				},
				{
					name: $LL.contacts.recoveryCenters.zoomarine(),
					email: null,
					phone: '289 560 300'
				},
				{
					name: $LL.contacts.recoveryCenters.lxcras(),
					email: null,
					phone: '218 170 200/919 463 271'
				},
				{
					name: $LL.contacts.recoveryCenters.ecomare(),
					email: null,
					phone: '919 618 705'
				},
				{
					name: $LL.contacts.recoveryCenters.crasm(),
					email: 'crasm@crasmontejunto.org',
					phone: '262 771 060/966 775 515'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>RALVT &#183; {$LL.meta.head.contacts()}</title>
	<meta name="description" content={$LL.meta.description.contacts()} />
</svelte:head>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
			<div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
				<div class="col-span-1">
					<h2 class="text-3xl font-bold tracking-tight text-gray-900">{$LL.contacts.title()}</h2>
					<p class="mt-4 leading-7 text-gray-600">{$LL.contacts.subtitle()}</p>
				</div>
				<div class="col-span-1 lg:col-span-2">
					{#each contacts as contactGroup}
						<h3 class="ml-2 text-xl font-bold text-gray-900">{contactGroup.title}</h3>
						<div class="mb-20 mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
							{#each contactGroup.contacts as contact}
								<div class="rounded-2xl bg-gray-50 p-10" class:bg-sky-100={contact.name == 'RALVT'}>
									<h3 class="text-base font-semibold leading-7 text-gray-900">{contact.name}</h3>
									<dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
										{#if contact.email}
											<div>
												<dt class="sr-only">Email address</dt>
												<dd>
													<a class="font-semibold text-sky-600" href={`mailto:${contact.email}`}
														>{contact.email}</a>
												</dd>
											</div>
										{/if}
										<div class="mt-1">
											<dt class="sr-only">Phone number</dt>
											<dd>
												<a href={`tel:${contact.phone}`}>{contact.phone}</a>
											</dd>
										</div>
									</dl>
								</div>
							{/each}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
