<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="snap-y overflow-y-scroll h-screen snap-proximity">
	{@render children()}
</main>