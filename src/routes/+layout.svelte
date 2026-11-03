<script lang="ts">
	import '@fontsource/fira-sans/latin-400.css';
	import '@fontsource/fira-sans/latin-500.css';
	import '@fontsource/fira-sans/latin-600.css';
	import '@fontsource/fira-sans/latin-700.css';
	import '@fontsource/pacifico/latin-400.css';
	import '../app.css';

	let { children } = $props();
</script>

<main class="h-screen snap-y snap-mandatory overflow-y-scroll">
	{@render children()}
</main>
