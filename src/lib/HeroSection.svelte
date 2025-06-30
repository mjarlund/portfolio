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
				label="Mikkel's LinkedIn profile"
				defaultIcon={BuildingOffice}
				hoverIcon={BuildingOffice2}
			/>
			<HoverIcon
				link="https://github.com/mjarlund"
				label="Mikkel's GitHub profile"
				defaultIcon={CodeBracketSquare}
				hoverIcon={CommandLine}
			/>
		</div>
	</div>
</section>
