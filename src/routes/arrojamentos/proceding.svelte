<script>
	const steps = [
		{
			number: 1,
			text: 'Applied to Front End Developer'
		},
		{
			number: 2,
			text: 'Advanced to phone screening by Bethany Blake'
		},
		{
			number: 3,
			text: 'Completed phone screening with Martha Gardner'
		},
		{
			number: 4,
			text: 'Advanced to interview by Bethany Blake'
		},
		{
			number: 5,
			text: 'Completed interview with Katherine Snyder'
		}
	];
</script>

<div class="mx-auto mb-20 max-w-2xl">
	<h1 class="sub-header text-center">O que fazer se encontrar um animal arrojado?</h1>
	<p class="mt-6 leading-8 text-gray-600">
		Os arrojamentos são circunstâncias em que animais marinhos invertebrados ou vertebrados (sendo
		estes casos mais conhecidos, essencialmente cetáceos, pinípedes, lontras e tartarugas marinhas)
		ficam encalhados na costa. Os animais arrojados podem encontrar-se mortos, em vários estados de
		decomposição, ou mais raramente, vivos. Quando vivos, os animais apresentam normalmente
		comportamentos fora do comum devido ao stress causado pela própria condição de arrojamento.
		Existem dois tipos de arrojamentos: arrojamentos <b>vivos</b> e arrojamentos
		<b>mortos</b>.
	</p>

	<div class="mt-20 flow-root">
		<ul class="-mb-8">
			{#each steps as step, index}
				<li>
					<div class="relative pb-8">
						{#if index != steps.length - 1}
							<span
								class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
								aria-hidden="true"
							/>
						{/if}
						<div class="relative flex space-x-3">
							<div>
								<span
									class="flex h-8 w-8 items-center justify-center rounded-full bg-sky-400 text-white ring-8 ring-white"
								>
									{step.number}
								</span>
							</div>
							<div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
								<div>
									<p class="text-sm text-gray-500">
										{step.text}
									</p>
								</div>
								<div class="whitespace-nowrap text-right text-sm text-gray-500">
									<time datetime="2020-09-20">Sep 20</time>
								</div>
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
