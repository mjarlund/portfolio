<script>
	// Experience data (keeping details general to respect NDAs)
	const experiences = [
		{
			period: "2020 - Present",
			role: "Senior Software Engineer",
			company: "Enterprise Technology Company",
			description: "Leading development of scalable web applications and cloud solutions. Mentoring junior developers and contributing to architectural decisions.",
			technologies: ["TypeScript", "React", "Node.js", "AWS", "Microservices"]
		},
		{
			period: "2018 - 2020",
			role: "Full Stack Developer",
			company: "Technology Startup",
			description: "Built end-to-end web applications from concept to deployment. Worked closely with product teams to deliver user-focused solutions.",
			technologies: ["JavaScript", "Vue.js", "Python", "PostgreSQL", "Docker"]
		},
		{
			period: "2016 - 2018",
			role: "Software Developer",
			company: "Software Consultancy",
			description: "Developed custom software solutions for various clients across different industries. Gained experience with diverse tech stacks and business requirements.",
			technologies: ["C#", ".NET", "SQL Server", "Azure", "Angular"]
		}
	];
</script>

<!-- Experience Section -->
<section class="flex min-h-screen snap-start snap-always flex-col items-center justify-center bg-white p-6">
	<div class="container mx-auto max-w-4xl">
		<h2 class="font-display mb-12 text-center text-4xl text-gray-800">Experience</h2>
		
		<div class="relative">
			<!-- Timeline line -->
			<div class="absolute left-4 top-0 h-full w-0.5 bg-amber-500 md:left-1/2 md:transform md:-translate-x-1/2"></div>
			
			{#each experiences as exp, index}
				<div class="relative mb-8 flex items-center">
					<!-- Timeline dot -->
					<div class="absolute left-2 h-4 w-4 rounded-full bg-amber-500 md:left-1/2 md:transform md:-translate-x-1/2"></div>
					
					<!-- Content -->
					<div class="ml-10 w-full md:ml-0 md:w-5/12 {index % 2 === 0 ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}">
						<div class="rounded-lg bg-gray-50 p-6 shadow-lg">
							<div class="mb-2 text-sm font-bold text-amber-600">{exp.period}</div>
							<h3 class="mb-1 text-xl font-bold text-gray-800">{exp.role}</h3>
							<h4 class="mb-3 text-lg text-gray-600">{exp.company}</h4>
							<p class="mb-4 text-gray-700">{exp.description}</p>
							<div class="flex flex-wrap gap-2">
								{#each exp.technologies as tech}
									<span class="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-800">{tech}</span>
								{/each}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
