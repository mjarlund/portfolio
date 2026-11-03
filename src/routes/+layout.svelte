<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="h-screen snap-y snap-mandatory overflow-y-scroll">
	{@render children()}
</main>
