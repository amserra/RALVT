<script>
	import '../app.css';
	import Floating from '../components/floating.svelte';
	import Footer from '../components/footer.svelte';
	import Navbar from '../components/navbar.svelte';
</script>

<Navbar />

<slot />

<Footer />

<Floating />
