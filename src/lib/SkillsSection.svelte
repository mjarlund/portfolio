<script>
	import { BuildingOffice, PuzzlePiece, Cog6Tooth } from 'svelte-hero-icons';
	import { Icon } from 'svelte-hero-icons';

	// Skills data
	const skillCategories = [
		{
			title: 'Frontend',
			emoji: '⚡',
			skills: [
				{ name: 'TypeScript', level: 95 },
				{ name: 'JavaScript', level: 95 },
				{ name: 'Svelte/SvelteKit', level: 90 },
				{ name: 'React', level: 85 },
				{ name: 'Vue.js', level: 80 },
				{ name: 'HTML/CSS', level: 90 },
				{ name: 'TailwindCSS', level: 90 }
			]
		},
		{
			title: 'Backend',
			emoji: '⚙️',
			skills: [
				{ name: 'Node.js', level: 90 },
				{ name: 'Python', level: 85 },
				{ name: 'C#/.NET', level: 80 },
				{ name: 'Java', level: 75 },
				{ name: 'REST APIs', level: 90 },
				{ name: 'GraphQL', level: 80 },
				{ name: 'Microservices', level: 85 }
			]
		},
		{
			title: 'Cloud & DevOps',
			emoji: '☁️',
			skills: [
				{ name: 'AWS', level: 85 },
				{ name: 'Azure', level: 80 },
				{ name: 'Docker', level: 85 },
				{ name: 'Kubernetes', level: 75 },
				{ name: 'CI/CD', level: 85 },
				{ name: 'Terraform', level: 80 },
				{ name: 'Monitoring', level: 80 }
			]
		},
		{
			title: 'Tools & Other',
			emoji: '🧩',
			skills: [
				{ name: 'Git', level: 95 },
				{ name: 'PostgreSQL', level: 85 },
				{ name: 'MongoDB', level: 80 },
				{ name: 'Redis', level: 75 },
				{ name: 'Linux', level: 85 },
				{ name: 'Agile/Scrum', level: 90 },
				{ name: 'System Design', level: 85 }
			]
		}
	];
</script>

<!-- Skills Section -->
<section class="flex min-h-screen snap-start snap-always flex-col items-center justify-center bg-gray-800 p-6">
	<div class="container mx-auto max-w-6xl">
		<h2 class="font-display mb-12 text-center text-4xl text-amber-500">Skills & Technologies</h2>
		
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
			{#each skillCategories as category}
				<div class="rounded-lg bg-gray-700 p-6 shadow-xl">
					<div class="mb-6 flex items-center gap-3">
						<div class="text-3xl">
							{category.emoji}
						</div>
						<h3 class="text-2xl font-bold text-white">{category.title}</h3>
					</div>
					
					<div class="space-y-4">
						{#each category.skills as skill}
							<div>
								<div class="mb-2 flex justify-between">
									<span class="text-gray-200">{skill.name}</span>
									<span class="text-amber-400">{skill.level}%</span>
								</div>
								<div class="h-2 w-full rounded-full bg-gray-600">
									<div 
										class="h-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-1000 ease-out"
										style="width: {skill.level}%"
									></div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<!-- Professional Skills -->
		<div class="mt-12">
			<h3 class="mb-8 text-center text-3xl font-bold text-white">Professional Skills</h3>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				<div class="rounded-lg bg-gray-700 p-6 text-center">
					<div class="mb-4 text-4xl">
						🏢
					</div>
					<h4 class="mb-3 text-xl font-bold text-white">Technical Leadership</h4>
					<p class="text-gray-300">Leading development teams and making architectural decisions for complex software systems.</p>
				</div>
				
				<div class="rounded-lg bg-gray-700 p-6 text-center">
					<div class="mb-4 text-4xl">
						🧩
					</div>
					<h4 class="mb-3 text-xl font-bold text-white">Problem Solving</h4>
					<p class="text-gray-300">Analyzing complex problems and designing efficient, scalable solutions.</p>
				</div>
				
				<div class="rounded-lg bg-gray-700 p-6 text-center">
					<div class="mb-4 text-4xl">
						⚙️
					</div>
					<h4 class="mb-3 text-xl font-bold text-white">System Architecture</h4>
					<p class="text-gray-300">Designing robust, maintainable systems with modern architectural patterns.</p>
				</div>
			</div>
		</div>
	</div>
</section>
