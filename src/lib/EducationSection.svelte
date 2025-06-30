<script>
	// Education data
	const education = [
		{
			degree: "Master of Science in Software Engineering",
			institution: "Technical University",
			period: "2014 - 2016",
			description: "Advanced coursework in software architecture, distributed systems, and software quality assurance."
		},
		{
			degree: "Bachelor of Science in Computer Science",
			institution: "Technical University", 
			period: "2011 - 2014",
			description: "Foundation in computer science fundamentals, algorithms, and software development principles."
		}
	];
</script>

<!-- Education Section -->
<section class="flex min-h-screen snap-start snap-always flex-col items-center justify-center bg-gray-100 p-6">
	<div class="container mx-auto max-w-4xl">
		<h2 class="font-display mb-12 text-center text-4xl text-gray-800">Education</h2>
		
		<div class="grid gap-8 md:grid-cols-2">
			{#each education as edu}
				<div class="rounded-lg bg-white p-6 shadow-lg">
					<div class="mb-2 text-sm font-bold text-amber-600">{edu.period}</div>
					<h3 class="mb-2 text-xl font-bold text-gray-800">{edu.degree}</h3>
					<h4 class="mb-3 text-lg text-gray-600">{edu.institution}</h4>
					<p class="text-gray-700">{edu.description}</p>
				</div>
			{/each}
		</div>

		<!-- Additional achievements -->
		<div class="mt-12 text-center">
			<h3 class="mb-6 text-2xl font-bold text-gray-800">Continuous Learning</h3>
			<div class="grid gap-4 md:grid-cols-3">
				<div class="rounded-lg bg-white p-4 shadow">
					<h4 class="font-bold text-gray-800">Cloud Certifications</h4>
					<p class="text-sm text-gray-600">AWS & Azure certified</p>
				</div>
				<div class="rounded-lg bg-white p-4 shadow">
					<h4 class="font-bold text-gray-800">Technical Conferences</h4>
					<p class="text-sm text-gray-600">Regular attendee of tech conferences</p>
				</div>
				<div class="rounded-lg bg-white p-4 shadow">
					<h4 class="font-bold text-gray-800">Open Source</h4>
					<p class="text-sm text-gray-600">Contributing to open source projects</p>
				</div>
			</div>
		</div>
	</div>
</section>
