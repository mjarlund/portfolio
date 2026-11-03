<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';

	import { site } from '$lib/site';
</script>

<svelte:head>
	<title>{page.status} | {site.name}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div
	class="flex h-screen flex-col items-center justify-center bg-[#1F2935] px-6 text-center text-white"
>
	<p class="font-display text-6xl text-amber-500">{page.status}</p>
	<h1 class="mt-2 text-2xl font-normal">
		{page.status === 404 ? 'Page not found' : 'Something went wrong'}
	</h1>
	<a class="mt-6 text-amber-500 underline-offset-4 hover:underline" href={resolve('/')}
		>Back home</a
	>
</div>
