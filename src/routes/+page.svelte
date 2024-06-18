<script>
	import {
		Envelope,
		EnvelopeOpen,
		CodeBracketSquare,
		CommandLine,
		BuildingOffice,
		BuildingOffice2,
		ArrowLongDown, Icon
	} from 'svelte-hero-icons';
	import { HoverIcon } from '$lib';
</script>

<!-- Hero Section -->
<section class="h-screen bg-gray-800 snap-start snap-always flex flex-col items-center justify-center select-none">

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

	<div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-600">
		<Icon src={ArrowLongDown} size="32" />
	</div>
</section>

<!-- About Me Section -->
<section class="h-screen bg-amber-100 snap-start snap-always flex flex-col items-center justify-center text-black p-6">
	<div class="text-center container max-w-4xl">
		<h2 class="text-4xl font-display mb-4">About Me</h2>
		<div class="text-justify hyphens-auto">
			<p class="text-xl">
				I’ve got a master’s in software engineering, and I’ve been building web applications for quite a while.
				There’s something satisfying about diving into a tough problem and crafting a solution that’s
				as neat as it is functional.
			</p>
			<p class="text-xl mt-4">
				When I'm away from the keyboard, I’m usually out exploring new places or tweaking my home server and Home
				Assistant setup to make my apartment a little smarter. And of course, spending quality time with family and
				friends is always high on my list.
			</p>
		</div>
	</div>
</section>


<style lang="postcss">

</style>
