<script>
	import {
		CodeBracketSquare,
		CommandLine,
		BuildingOffice,
		BuildingOffice2
	} from 'svelte-hero-icons';
	import { HoverIcon, ContactForm } from '$lib';
</script>

<!-- Contact Section -->
<section class="flex min-h-screen snap-start snap-always flex-col items-center justify-center bg-amber-100 p-6">
	<div class="container mx-auto max-w-4xl">
		<h2 class="font-display mb-8 text-center text-4xl text-gray-800">Get In Touch</h2>
		<p class="mb-8 text-center text-xl text-gray-600">
			Interested in collaborating or have a project in mind? Let's discuss how we can work together.
		</p>
		
		<ContactForm />
		
		<div class="mt-8 text-center">
			<p class="mb-4 text-gray-600">Or connect with me on:</p>
			<div class="inline-flex gap-4">
				<HoverIcon
					link="https://www.linkedin.com/in/mjarlund"
					label="LinkedIn"
					defaultIcon={BuildingOffice}
					hoverIcon={BuildingOffice2}
					color="gray-700"
				/>
				<HoverIcon
					link="https://github.com/mjarlund"
					label="GitHub"
					defaultIcon={CodeBracketSquare}
					hoverIcon={CommandLine}
					color="gray-700"
				/>
			</div>
		</div>
	</div>
</section>
