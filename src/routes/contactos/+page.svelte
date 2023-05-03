<script>
	const contacts = [
		{
			name: 'RALVT',
			email: 'geral@ralvt.pt',
			phone: '(+351) 911 111 241'
		},
		{
			name: 'Polícia Marítima',
			email: 'geral@ralvt.pt',
			phone: '(+351) 911 111 241'
		},
		{
			name: 'ICNF (Instituto da Conservação da Natureza e das Florestas)',
			email: 'geral@ralvt.pt',
			phone: '(+351) 911 111 241'
		},
		{
			name: 'ABRIGOS (Número nacional de emergência para arrojamentos de animais marinhos)',
			email: 'geral@ralvt.pt',
			phone: '(+351) 911 111 241'
		},
		{
			name: 'Centros de recuperação de fauna selvagem',
			email: 'geral@ralvt.pt',
			phone: '(+351) 911 111 241'
		},
		{
			name: 'RAALG (Rede de arrojamentos do Algarve)',
			email: 'geral@ralvt.pt',
			phone: '(+351) 911 111 241'
		},
		{
			name: 'ARROJAL (Rede de arrojamentos do Alentejo)',
			email: 'geral@ralvt.pt',
			phone: '(+351) 911 111 241'
		},
		{
			name: 'CESAM (Rede de Arrojamentos do Norte de Portugal)',
			email: 'geral@ralvt.pt',
			phone: '(+351) 911 111 241'
		}
	];
</script>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
			<div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
				<div>
					<h2 class="text-3xl font-bold tracking-tight text-gray-900">Fale connosco</h2>
					<p class="mt-4 leading-7 text-gray-600">
						Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
					</p>
				</div>
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
					{#each contacts as contact}
						<div class="rounded-2xl bg-gray-50 p-10">
							<h3 class="text-base font-semibold leading-7 text-gray-900">{contact.name}</h3>
							<dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
								<div>
									<dt class="sr-only">Endereço de email</dt>
									<dd>
										<a class="font-semibold text-sky-600" href={`mailto:${contact.email}`}
											>{contact.email}</a
										>
									</dd>
								</div>
								<div class="mt-1">
									<dt class="sr-only">Número de telefone</dt>
									<dd>
										<a href={`tel:${contact.email}`}>{contact.phone}</a>
									</dd>
								</div>
							</dl>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
