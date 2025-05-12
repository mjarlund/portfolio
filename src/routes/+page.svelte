<script>
	import {
		Envelope,
		EnvelopeOpen,
		CodeBracketSquare,
		CommandLine,
		BuildingOffice,
		BuildingOffice2
	} from 'svelte-hero-icons';
	import { HoverIcon } from '$lib';
</script>

<!-- Hero Section -->
<section
	class="flex h-screen snap-start snap-always flex-col items-center justify-center bg-gray-800 select-none"
>
	<div class="container p-6 text-center">
		<h1 class="font-display text-6xl text-amber-500">Mikkel Jarlund</h1>
		<p class="mt-4 text-3xl text-white">Software Engineer</p>
		<p class="mt-2 text-lg text-gray-200">
			Crafting digital solutions with a blend of creativity and technical precision.
		</p>

		<div class="mt-4 inline-flex gap-3">
			<HoverIcon
				link="mailto:mail@mjarlund.dk"
				label="Email Mikkel"
				defaultIcon={Envelope}
				hoverIcon={EnvelopeOpen}
			/>
			<HoverIcon
				link="https://www.linkedin.com/in/mjarlund"
				label="Mikkel’s LinkedIn profile"
				defaultIcon={BuildingOffice}
				hoverIcon={BuildingOffice2}
			/>
			<HoverIcon
				link="https://github.com/mjarlund"
				label="Mikkel’s GitHub profile"
				defaultIcon={CodeBracketSquare}
				hoverIcon={CommandLine}
			/>
		</div>
	</div>
</section>

<!-- About Me Section -->
<section
	class="flex h-screen snap-start snap-always flex-col items-center justify-center bg-amber-100 p-6 text-black"
>
	<div class="container flex max-w-4xl flex-col gap-4 text-justify hyphens-auto">
		<h2 class="font-display mb-4 text-center text-4xl">About Me</h2>
		<p class="text-xl">
			I hold a master's degree in software engineering and have extensive experience building web
			applications. I enjoy the challenge of solving complex problems and creating solutions that
			are both effective and efficient.
		</p>
		<p class="text-xl">
			When I'm away from the keyboard, I enjoy traveling or spending quality time with family and
			friends. Otherwise, I'm usually busy working on my home server and Home Assistant setup,
			continuously enhancing the smart capabilities of my apartment.
		</p>
	</div>
</section>

<style lang="postcss">
</style>
