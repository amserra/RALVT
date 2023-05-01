<script>
	import Footer from '../../components/footer.svelte';
	import Team from '../../components/team.svelte';
</script>

<div class="bg-white">
	<main class="isolate">
		<!-- Hero section -->
		<div class="relative isolate -z-10">
			<div
				class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
				aria-hidden="true"
			>
				<div
					class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
					style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
				/>
			</div>
			<div class="overflow-hidden">
				<div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
					<div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
						<div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
							<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								Somos a RALVT
							</h1>
							<p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
								A RALVT foi criada em 2021 para preencher uma lacuna existente na zona de Lisboa e
								Vale do Tejo. Temos como principal objetivo dar resposta a alertas de arrojamentos
								de cetáceos e tartarugas marinhas entre os concelhos da Lourinhã e de Setúbal.
							</p>
						</div>
						<div
							class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
						>
							<div
								class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
							>
								<div class="relative">
									<img
										src="/images/Imagem3.jpg"
										alt=""
										class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover object-left shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
									/>
								</div>
							</div>
							<div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
								<div class="relative">
									<img
										src="/images/Imagem1.jpg"
										alt=""
										class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
									/>
								</div>
								<div class="relative">
									<img
										src="/images/Imagem6.jpg"
										alt=""
										class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
									/>
								</div>
							</div>
							<div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
								<div class="relative">
									<img
										src="/images/Imagem8.png"
										alt=""
										class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
									/>
								</div>
								<div class="relative">
									<img
										src="/images/Imagem2.jpg"
										alt=""
										class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Content section -->
		<div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
			<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A nossa missão</h2>
				<div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
					<div class="lg:w-full lg:max-w-2xl lg:flex-auto">
						<p class="text-xl leading-8 text-gray-600">
							Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi,
							nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci
							at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
						</p>
						<div class="mt-10 max-w-xl text-base leading-7 text-gray-700">
							<dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
								<div class="relative pl-9">
									<dt class="inline font-semibold text-gray-900">
										<svg
											class="absolute left-1 top-1 h-5 w-5 text-sky-600"
											viewBox="0 0 48 48"
											fill="currentColor"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M16.5052 12.0249C21.6372 12.0249 21.8612 18.1431 21.8384 21.798C21.8982 21.772 21.9583 21.7427 22.0178 21.71C22.2673 21.5725 22.5008 21.3764 22.6759 21.087C22.85 20.7995 23.0002 20.3642 23.0002 19.6943L23.0001 6.0017C23.0001 6.0017 23.0001 6.00122 24.0001 6.00122C25.0001 6.00122 25.0001 6.00134 25.0001 6.00134L25.0002 19.6919C25.0002 20.3617 25.1505 20.7971 25.3245 21.0846C25.4996 21.374 25.7331 21.5701 25.9827 21.7075C26.0291 21.7331 26.0759 21.7565 26.1226 21.7779C26.0999 18.1227 26.3255 12.0086 31.4558 12.0086C38.9064 12.0086 44.2283 38.0151 41.0351 40.6688C37.842 43.3225 31.4558 41.7303 28.2626 38.5458C25.6846 35.9748 25.9077 29.9671 26.0678 25.6546C26.0913 25.0215 26.1135 24.425 26.1252 23.8812C25.8039 23.8056 25.4142 23.6777 25.0178 23.4594C24.6705 23.2681 24.3155 23.0056 24.0013 22.649C23.6866 23.0069 23.3307 23.2701 22.9827 23.4618C22.5699 23.6892 22.1642 23.8184 21.8357 23.8928C21.8474 24.4377 21.8696 25.0357 21.8931 25.6704C22.0533 29.983 22.2763 35.9912 19.6984 38.5621C16.5052 41.7466 10.119 43.3388 6.92583 40.6851C3.73268 38.0314 9.05459 12.0249 16.5052 12.0249ZM34.042 16.9985C34.042 18.1022 33.1466 18.9969 32.042 18.9969C30.9375 18.9969 30.042 18.1022 30.042 16.9985C30.042 15.8947 30.9375 15 32.042 15C33.1466 15 34.042 15.8947 34.042 16.9985ZM14.0019 17.0032C14.0029 18.1078 14.899 19.0025 16.0036 19.0016C17.1082 19.0007 18.0029 18.1045 18.0019 16.9999C18.001 15.8954 17.1049 15.0007 16.0003 15.0016C14.8957 15.0025 14.001 15.8986 14.0019 17.0032ZM8.98877 37.0032C8.98968 38.1078 9.88584 39.0025 10.9904 39.0016C12.095 39.0006 12.9897 38.1045 12.9888 36.9999C12.9879 35.8953 12.0917 35.0007 10.9871 35.0016C9.88256 35.0025 8.98787 35.8986 8.98877 37.0032ZM17.0036 34.0016C15.899 34.0025 15.0028 33.1078 15.0019 32.0032C15.001 30.8986 15.8957 30.0025 17.0003 30.0016C18.1049 30.0006 19.001 30.8953 19.0019 31.9999C19.0028 33.1045 18.1081 34.0006 17.0036 34.0016ZM10.0019 28.0032C10.0028 29.1078 10.899 30.0025 12.0036 30.0016C13.1081 30.0006 14.0028 29.1045 14.0019 27.9999C14.001 26.8953 13.1049 26.0006 12.0003 26.0016C10.8957 26.0025 10.001 26.8986 10.0019 28.0032ZM17.0036 25.0016C15.899 25.0025 15.0028 24.1078 15.0019 23.0032C15.001 21.8986 15.8957 21.0025 17.0003 21.0016C18.1049 21.0006 19.001 21.8953 19.0019 22.9999C19.0028 24.1045 18.1081 25.0006 17.0036 25.0016ZM37.0257 38.9969C38.1303 38.9969 39.0257 38.1022 39.0257 36.9985C39.0257 35.8947 38.1303 35 37.0257 35C35.9211 35 35.0257 35.8947 35.0257 36.9985C35.0257 38.1022 35.9211 38.9969 37.0257 38.9969ZM33.0298 31.9985C33.0298 33.1022 32.1344 33.9969 31.0298 33.9969C29.9253 33.9969 29.0298 33.1022 29.0298 31.9985C29.0298 30.8947 29.9253 30 31.0298 30C32.1344 30 33.0298 30.8947 33.0298 31.9985ZM36.0331 29.9969C37.1377 29.9969 38.0331 29.1022 38.0331 27.9985C38.0331 26.8947 37.1377 26 36.0331 26C34.9286 26 34.0331 26.8947 34.0331 27.9985C34.0331 29.1022 34.9286 29.9969 36.0331 29.9969ZM33.0372 22.9985C33.0372 24.1022 32.1417 24.9969 31.0372 24.9969C29.9326 24.9969 29.0372 24.1022 29.0372 22.9985C29.0372 21.8947 29.9326 21 31.0372 21C32.1417 21 33.0372 21.8947 33.0372 22.9985Z"
												fill="#333333"
											/>
										</svg>
										Necrópsias e assistência a arrojamentos vivos.
									</dt>
									<dd class="inline">
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
										perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
									</dd>
								</div>
								<div class="relative pl-9">
									<dt class="inline font-semibold text-gray-900">
										<svg
											class="absolute left-1 top-1 h-5 w-5 text-sky-600"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
												clip-rule="evenodd"
											/>
										</svg>
										Monitorizações.
									</dt>
									<dd class="inline">
										Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
										commodo.
									</dd>
								</div>
								<div class="relative pl-9">
									<dt class="inline font-semibold text-gray-900">
										<svg
											class="absolute left-1 top-1 h-5 w-5 text-sky-600"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z"
											/>
											<path
												fill-rule="evenodd"
												d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
												clip-rule="evenodd"
											/>
										</svg>
										Educação ambiental.
									</dt>
									<dd class="inline">
										Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit
										morbi lobortis.
									</dd>
								</div>
							</dl>
						</div>
					</div>
					<div class="lg:flex lg:flex-auto lg:justify-center">
						<dl class="w-64 space-y-8 xl:w-80">
							<div class="flex flex-col-reverse gap-y-4">
								<dt class="text-base leading-7 text-gray-600">Desde 2022</dt>
								<dd class="text-5xl font-semibold tracking-tight text-gray-900">+60 necrópsias</dd>
							</div>
							<div class="flex flex-col-reverse gap-y-4">
								<dt class="text-base leading-7 text-gray-600">De lixo apanhado em 2023</dt>
								<dd class="text-5xl font-semibold tracking-tight text-gray-900">+400 kg</dd>
							</div>
							<div class="flex flex-col-reverse gap-y-4">
								<dt class="text-base leading-7 text-gray-600">Pessoas no Instagram</dt>
								<dd class="text-5xl font-semibold tracking-tight text-gray-900">+500 pessoas</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>

		<!-- Image section -->
		<div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
			<img
				src="/images/Imagem11.jpg"
				alt=""
				class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
			/>
		</div>

		<!-- A nossa historia section -->
		<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					A nossa história
				</h2>
				<p class="mt-6 text-lg leading-8 text-gray-600">Fundados em 2021...</p>
			</div>
			<dl class="mx-auto mt-16 max-w-2xl text-base leading-7 lg:mx-0 lg:max-w-none">
				<!-- Timeline section -->
				<div class="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
					<div
						class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4"
					>
						<div>
							<time
								datetime="2021-08"
								class="flex items-center text-sm font-semibold leading-6 text-indigo-600"
							>
								<svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
									<circle cx="2" cy="2" r="2" fill="currentColor" />
								</svg>
								Aug 2021
								<div
									class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
									aria-hidden="true"
								/>
							</time>
							<p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
								Founded company
							</p>
							<p class="mt-1 text-base leading-7 text-gray-600">
								Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et
								dolorem dolorem optio voluptate repudiandae.
							</p>
						</div>
						<div>
							<time
								datetime="2021-12"
								class="flex items-center text-sm font-semibold leading-6 text-indigo-600"
							>
								<svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
									<circle cx="2" cy="2" r="2" fill="currentColor" />
								</svg>
								Dec 2021
								<div
									class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
									aria-hidden="true"
								/>
							</time>
							<p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
								Secured $65m in funding
							</p>
							<p class="mt-1 text-base leading-7 text-gray-600">
								Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit
								sapiente a architecto nihil.
							</p>
						</div>
						<div>
							<time
								datetime="2022-02"
								class="flex items-center text-sm font-semibold leading-6 text-indigo-600"
							>
								<svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
									<circle cx="2" cy="2" r="2" fill="currentColor" />
								</svg>
								Feb 2022
								<div
									class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
									aria-hidden="true"
								/>
							</time>
							<p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
								Released beta
							</p>
							<p class="mt-1 text-base leading-7 text-gray-600">
								Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis
								earum eum quia facilis. Hic deleniti dolorem quia et.
							</p>
						</div>
						<div>
							<time
								datetime="2022-12"
								class="flex items-center text-sm font-semibold leading-6 text-indigo-600"
							>
								<svg viewBox="0 0 4 4" class="mr-4 h-1 w-1 flex-none" aria-hidden="true">
									<circle cx="2" cy="2" r="2" fill="currentColor" />
								</svg>
								Dec 2022
								<div
									class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
									aria-hidden="true"
								/>
							</time>
							<p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
								Global launch of product
							</p>
							<p class="mt-1 text-base leading-7 text-gray-600">
								Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto
								voluptatem hic aut pariatur velit.
							</p>
						</div>
					</div>
				</div>
			</dl>
		</div>

		<!-- Logo cloud -->
		<!-- <div class="relative">
			<div
				class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
				aria-hidden="true"
			>
				<div
					class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#5147c2] to-[#9089fc] opacity-30"
					style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
				/>
			</div>
		</div> -->

		<!-- Team section -->
		<Team />
	</main>

	<Footer />
</div>
