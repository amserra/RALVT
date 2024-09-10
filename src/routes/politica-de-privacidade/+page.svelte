<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
</script>

<svelte:head>
	<title>RALVT &#183; {$LL.meta.head.privacyPolicy()}</title>
	<meta name="description" content={$LL.meta.description.privacyPolicy()} />
</svelte:head>

<div class="mx-auto my-20 max-w-7xl px-6 lg:px-8">
	<h1 class="text-center text-4xl font-bold text-gray-900">
		{$LL.privacyPolicy.header()}
	</h1>
	<h2 class="mt-4 text-center text-xl font-bold text-gray-900">
		{$LL.privacyPolicy.subHeader()}
	</h2>
	<p class="mt-6">
		{$LL.privacyPolicy.intro()}
	</p>
	<ol>
		<li class="mt-6">
			<h3 class="text-lg font-semibold text-gray-900">
				{$LL.privacyPolicy.sections['1'].title()}
			</h3>
			<p class="mt-4">
				{$LL.privacyPolicy.sections['1'].content()}
				<a class="text-blue-600 hover:text-blue-800 hover:underline" href="mailto:geral@ralvt.pt"
					>geral@ralvt.pt</a
				>.
			</p>
		</li>
		<li class="mt-6">
			<h3 class="text-lg font-semibold text-gray-900">
				{$LL.privacyPolicy.sections['2'].title()}
			</h3>
			<ol>
				<li class="mt-4">
					<b>2.1.</b>
					{$LL.privacyPolicy.sections['2'].content['21']()}
				</li>
				<li class="mt-4">
					<b>2.2.</b>
					{$LL.privacyPolicy.sections['2'].content['22']()}
				</li>
				<li class="mt-4">
					<b>2.3.</b>
					{$LL.privacyPolicy.sections['2'].content['23']()}
					<h4 class="mt-4 font-semibold text-gray-900">
						{$LL.privacyPolicy.sections['2'].content.dataCategories.title()}
					</h4>
					<ol>
						<li class="ml-8 mt-4">
							<b
								>{$LL.privacyPolicy.sections['2'].content.dataCategories['1'].header()}
							</b>{$LL.privacyPolicy.sections['2'].content.dataCategories['1'].text()}
						</li>
						<li class="ml-8 mt-4">
							<b
								>{$LL.privacyPolicy.sections['2'].content.dataCategories['2'].header()}
							</b>{$LL.privacyPolicy.sections['2'].content.dataCategories['2'].text()}
						</li>
						<li class="ml-8 mt-4">
							<b
								>{$LL.privacyPolicy.sections['2'].content.dataCategories['3'].header()}
							</b>{$LL.privacyPolicy.sections['2'].content.dataCategories['3'].text()}
						</li>
					</ol>
				</li>
			</ol>
		</li>
		<li class="mt-6">
			<h3 class="text-lg font-semibold text-gray-900">
				{$LL.privacyPolicy.sections['3'].title()}
			</h3>
			<ol>
				<li class="mt-4">
					<b>3.1.</b>
					{$LL.privacyPolicy.sections['3'].content['31']()}
					<ol>
						<li class="ml-8 mt-4">
							<b>1.</b>
							{$LL.privacyPolicy.sections['3'].content.authorized()}
						</li>
						<li class="ml-8 mt-4">
							<b>2.</b>
							{$LL.privacyPolicy.sections['3'].content.publicEntities()}
						</li>
						<li class="mt-4">
							{$LL.privacyPolicy.sections['3'].content.authoroties()}
						</li>
					</ol>
				</li>
				<li class="mt-4">
					<b>3.2.</b>
					{$LL.privacyPolicy.sections['3'].content.outsideEEE()}
				</li>
			</ol>
		</li>
		<li class="mt-6">
			<h3 class="text-lg font-semibold text-gray-900">
				{$LL.privacyPolicy.sections['4'].title()}
			</h3>
			<p class="mt-4">
				{$LL.privacyPolicy.sections['4'].content()}
			</p>
		</li>
		<li class="mt-6">
			<h3 class="text-lg font-semibold text-gray-900">
				{$LL.privacyPolicy.sections['5'].title()}
			</h3>
			<ol>
				<li class="mt-4">
					<b>5.1.</b>
					{$LL.privacyPolicy.sections['5']['51']()}
					<a class="text-blue-600 hover:text-blue-800 hover:underline" href="mailto:geral@ralvt.pt"
						>geral@ralvt.pt</a
					>.
					<ol>
						<li class="ml-8 mt-4">
							<b>•</b>
							{$LL.privacyPolicy.sections['5'].content.rights['0']()}
						</li>
						<li class="ml-8 mt-4">
							<b>•</b>
							{$LL.privacyPolicy.sections['5'].content.rights['1']()}
						</li>
						<li class="ml-8 mt-4">
							<b>•</b>
							{$LL.privacyPolicy.sections['5'].content.rights['2']()}
						</li>
						<li class="ml-8 mt-4">
							<b>•</b>
							{$LL.privacyPolicy.sections['5'].content.rights['3']()}
						</li>
						<li class="ml-8 mt-4">
							<b>•</b>
							{$LL.privacyPolicy.sections['5'].content.rights['4']()}
						</li>
						<li class="ml-8 mt-4">
							<b>•</b>
							{$LL.privacyPolicy.sections['5'].content.rights['5']()}
						</li>
						<li class="ml-8 mt-4">
							<b>•</b>
							{$LL.privacyPolicy.sections['5'].content.rights['6']()}
						</li>
						<li class="ml-8 mt-4">
							<b>•</b>
							{$LL.privacyPolicy.sections['5'].content.rights['7']()}
						</li>
					</ol>
				</li>
				<li class="mt-4">
					<b>5.2.</b>
					{$LL.privacyPolicy.sections['5']['52']()}
				</li>
				<li class="mt-4">
					<b>5.3.</b>
					{$LL.privacyPolicy.sections['5']['53']()}
				</li>
				<li class="mt-4">
					<b>5.4.</b>
					{$LL.privacyPolicy.sections['5']['54']()}
				</li>
				<li class="mt-4">
					{$LL.privacyPolicy.sections['5'].final()}
				</li>
			</ol>
		</li>
		<li class="mt-6">
			<h3 class="text-lg font-semibold text-gray-900">
				{$LL.privacyPolicy.sections['6'].title()}
			</h3>
			<p class="mt-4">
				{$LL.privacyPolicy.sections['6'].content()}
				<a class="text-blue-600 hover:text-blue-800 hover:underline" href="mailto:geral@ralvt.pt"
					>geral@ralvt.pt</a
				>.
			</p>
		</li>
		<li class="mt-6">
			<h3 class="text-lg font-semibold text-gray-900">
				{$LL.privacyPolicy.sections['7'].title()}
			</h3>
			<p class="mt-4">
				{$LL.privacyPolicy.sections['7'].content()}
			</p>
		</li>
		<li class="mt-6">
			<h3 class="text-lg font-semibold text-gray-900">
				{$LL.privacyPolicy.sections['8'].title()}
			</h3>
			<p class="mt-4">
				{$LL.privacyPolicy.sections['8'].content()}
			</p>
		</li>
	</ol>
</div>
