<script>
	const contacts = [
		{
			title: 'Lisboa e Vale do Tejo',
			contacts: [
				{
					name: 'RALVT',
					email: 'geral@ralvt.pt',
					phone: '911 111 241'
				},
				{
					name: 'Polícia Marítima Porto de Peniche/Lourinhã/Torres Vedras',
					email: 'policiamaritima.peniche@amn.pt',
					phone: '918 498 039'
				},
				{
					name: 'Proteção Civil Sesimbra',
					email: null,
					phone: '212 280 521'
				},
				{
					name: 'Polícia Marítima Sesimbra',
					email: null,
					phone: '918 498 053'
				},
				{
					name: 'Capitania do Porto de Cascais (Desde a ponta da Foz (rio Sisandro) até à Torre de S. Julião da Barra)',
					email: 'capitania.cascais@amn.pt',
					phone: '210 732 664'
				},
				{
					name: 'Policia Maritima de Almada',
					email: 'policiamaritima.caparica@marinha.pt',
					phone: '212 913 101'
				},
				{
					name: 'Delegação Marítima da Ericeira',
					email: 'delegmar.ericeira@amn.pt',
					phone: '261 862 526'
				},
				{
					name: 'Comando Local de Lisboa',
					email: 'policiamaritima.lisboa@amn.pt',
					phone: '918 498 025/ 210 911 149 / 210 911 155'
				}
			]
		},
		{
			title: 'Outras redes de arrojamento',
			contacts: [
				{
					name: 'ARROJAL - Apoio à Rede Nacional de Arrojamentos - Rede Regional Alentejo',
					email: null,
					phone: '932 004 615'
				},
				{
					name: 'ABRIGOS - Rede de Apoio a Mamíferos marinhos / ICNF',
					email: null,
					phone: '968 849 101'
				},
				{
					name: 'Rede de Arrojamentos do Algarve (RAAlg)',
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
			title: 'Centros de Recuperação',
			contacts: [
				{
					name: 'CRASSA - Centro de Recuperação de Animais Selvagens de Santo André',
					email: null,
					phone: '925 403 833'
				},
				{
					name: "Porto d'Abrigo do Zoomarine (Albufeira)",
					email: null,
					phone: '289 560 300'
				},
				{
					name: 'LxCRAS- Centro de Recuperação de Animais Silvestres de Lisboa',
					email: null,
					phone: '218 170 200/919 463 271'
				},
				{
					name: 'ECOMARE - Centro de Reabilitação de Animais Marinhos (CRAM)',
					email: null,
					phone: '919 618 705'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>RALVT &#183; Contactos</title>
</svelte:head>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
			<div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
				<div class="col-span-1">
					<h2 class="text-3xl font-bold tracking-tight text-gray-900">Fale connosco</h2>
					<p class="mt-4 leading-7 text-gray-600">
						Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
					</p>
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
												<dt class="sr-only">Endereço de email</dt>
												<dd>
													<a class="font-semibold text-sky-600" href={`mailto:${contact.email}`}
														>{contact.email}</a>
												</dd>
											</div>
										{/if}
										<div class="mt-1">
											<dt class="sr-only">Número de telefone</dt>
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
