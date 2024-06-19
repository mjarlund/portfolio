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
<section class="h-screen bg-gray-800 flex flex-col items-center justify-center select-none snap-start snap-always">

	<div class="text-center p-6 container">
		<h1 class="text-6xl text-amber-500 font-display">Mikkel Jarlund</h1>
		<p class="text-3xl text-white mt-4">Software Engineer</p>
		<p class="text-lg text-gray-200 mt-2">
			Crafting digital solutions with a blend of creativity and technical precision.
		</p>

		<div class="mt-4 inline-flex gap-3">
			<HoverIcon link="mailto:mail@mjarlund.dk" label="Email Mikkel" defaultIcon={Envelope} hoverIcon={EnvelopeOpen} />
			<HoverIcon link="https://www.linkedin.com/in/mjarlund" label="Mikkel’s LinkedIn profile"
								 defaultIcon={BuildingOffice} hoverIcon={BuildingOffice2} />
			<HoverIcon link="https://github.com/mjarlund" label="Mikkel’s GitHub profile"
								 defaultIcon={CodeBracketSquare} hoverIcon={CommandLine} />
		</div>
	</div>
</section>

<!-- About Me Section -->
<section class="h-screen bg-amber-100 flex flex-col items-center justify-center text-black p-6 snap-start snap-always">
	<div class="container max-w-4xl text-justify hyphens-auto flex flex-col gap-4">
		<h2 class="text-center text-4xl font-display mb-4">About Me</h2>
		<p class="text-xl">
			I hold a master's degree in software engineering and have extensive experience building web applications. I enjoy
			the challenge of solving complex problems and creating solutions that are both effective and efficient.
		</p>
		<p class="text-xl">
			When I'm away from the keyboard, I enjoy traveling or spending quality time with family and friends. Otherwise,
			I'm usually busy working on my home server and Home Assistant setup, continuously enhancing the smart
			capabilities of my apartment.
		</p>
	</div>
</section>


<style lang="postcss">

</style>
