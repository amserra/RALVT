<script>
	import { page } from '$app/stores';
	import '../app.css';
	import Floating from '../components/floating.svelte';
	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';
	import { register } from 'swiper/element/bundle';
	register();
</script>

{#if $page.route.id != null}
	<Navbar />
{/if}

<slot />

<Footer />

{#if $page.route.id != '/reportar/arrojamento'}
	<Floating />
{/if}
