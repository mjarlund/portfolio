<script>
	import { Envelope, EnvelopeOpen, CodeBracketSquare, CommandLine, BuildingOffice, BuildingOffice2, Icon } from 'svelte-hero-icons';

	let isHoveringEnvelope = false; // State to track hover and focus
	let isHoveringLinkedIn = false; // State to track hover and focus
	let isHoveringGitHub = false; // State to track hover and focus

	// Event handlers
	function handleMouseEnterGitHubLink() {
		isHoveringGitHub = true;
	}

	function handleMouseLeaveGitHubLink() {
		isHoveringGitHub = false;
	}

	function handleMouseEnterLinkedInLink() {
		isHoveringLinkedIn = true;
	}

	function handleMouseLeaveLinkedInLink() {
		isHoveringLinkedIn = false;
	}

	function handleMouseEnterMailLink() {
		isHoveringEnvelope = true;
	}

	function handleMouseLeaveMailLink() {
		isHoveringEnvelope = false;
	}
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
			<a href="mailto:mail@mjarlund.dk" class="text-amber-500" aria-label="Email Mikkel"
				 on:mouseover={handleMouseEnterMailLink}
				 on:mouseout={handleMouseLeaveMailLink}
				 on:focus={handleMouseEnterMailLink}
				 on:blur={handleMouseLeaveMailLink}>
				<Icon src={isHoveringEnvelope ? EnvelopeOpen : Envelope} size="32" />
			</a>
			<a href="https://www.linkedin.com/in/mjarlund" target="_blank"
				 class="text-amber-500"
				 aria-label="Mikkel’s LinkedIn profile"
				 on:mouseover={handleMouseEnterLinkedInLink}
				 on:mouseout={handleMouseLeaveLinkedInLink}
				 on:focus={handleMouseEnterLinkedInLink}
				 on:blur={handleMouseLeaveLinkedInLink}>
				<Icon src="{isHoveringLinkedIn ? BuildingOffice2 : BuildingOffice}" size="32" />
			</a>
			<a href="https://github.com/mjarlund" target="_blank"
				 class="text-amber-500"
				 aria-label="Mikkel’s GitHub profile"
				 on:mouseover={handleMouseEnterGitHubLink}
				 on:mouseout={handleMouseLeaveGitHubLink}
				 on:focus={handleMouseEnterGitHubLink}
				 on:blur={handleMouseLeaveGitHubLink}
			>
				<Icon src="{isHoveringGitHub ? CommandLine : CodeBracketSquare}" size="32" />
			</a>
		</div>
	</div>
</section>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>
