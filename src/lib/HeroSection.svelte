<script>
	import {
		Envelope,
		EnvelopeOpen,
		CodeBracketSquare,
		CommandLine,
		BuildingOffice,
		BuildingOffice2
	} from 'svelte-hero-icons';
	import { HoverIcon, Section } from '$lib';
	import Container from './ui/Container.svelte';
	import { site } from './site';
</script>

<!-- Hero Section -->
<Section variant="primary">
	<Container>
		<h1>
			<span class="font-display block text-6xl text-amber-500">{site.name}</span>
			<span class="sr-only">, </span>
			<span class="mt-4 block text-3xl font-normal text-white">{site.jobTitle}</span>
		</h1>
		<p class="mt-2 text-lg text-gray-200">{site.tagline}</p>

		<div class="mx-auto mt-4 inline-flex gap-3">
			<HoverIcon
				href="mailto:{site.email}"
				label="Email Mikkel"
				defaultIcon={Envelope}
				hoverIcon={EnvelopeOpen}
				external={false}
			/>
			<HoverIcon
				href={site.linkedin}
				label="Mikkel's LinkedIn profile"
				defaultIcon={BuildingOffice}
				hoverIcon={BuildingOffice2}
			/>
			<HoverIcon
				href={site.github}
				label="Mikkel's GitHub profile"
				defaultIcon={CodeBracketSquare}
				hoverIcon={CommandLine}
			/>
		</div>
	</Container>
</Section>
