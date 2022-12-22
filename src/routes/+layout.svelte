<script>
	import '../main.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { routes } from '$lib/routes';
</script>

<main class="mx-auto max-w-4xl flex flex-col bg-slate-600 text-white rounded-xl my-14">
	<Navbar links={routes} />
	<slot></slot>
</main>
