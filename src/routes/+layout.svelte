<script>
	import { page } from '$app/stores';
	import '../app.css';
	import Floating from '../components/floating.svelte';
	import Footer from '../components/footer.svelte';
	import LanguageSelector from '../components/language-selector.svelte';
	import Navbar from '../components/navbar.svelte';
	import { register } from 'swiper/element/bundle';
	register();

	export let data;
</script>

{#if $page.route.id != null}
	<Navbar currentPage={$page.route.id} />
{/if}

<slot />

<Footer />

{#if $page.route.id != '/reportar/arrojamento'}
	<Floating />
{/if}

<div class="fixed bottom-0 right-2 z-[9999]">
	<LanguageSelector currentLocale={data.locale} />
</div>
