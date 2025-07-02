<script lang="ts">
	import type { TimelineItem } from './services/linkedin';

	export let timelineData: TimelineItem[] = [];

	// Fallback data if no timeline data is provided
	const fallbackData: TimelineItem[] = [
		{
			period: "Sep 2020 - Present",
			title: "Software Pilot",
			subtitle: "Trifork",
			location: "Aalborg, North Jutland, Denmark",
			description: "Leading development of scalable web applications and cloud solutions. Working with Representational State Transfer (REST), .NET Core and modern technologies.",
			technologies: ["REST", ".NET Core", "C#", "Microservices", "Cloud Architecture"],
			type: "experience"
		},
		{
			period: "2018 - 2020",
			title: "Master of Science - MS",
			subtitle: "Computer Software Engineering • Aalborg University",
			location: "Aalborg, Denmark",
			description: "Advanced studies in software engineering, system architecture, and modern development methodologies.",
			technologies: [],
			type: "education"
		},
		{
			period: "Jul 2018 - Jun 2019",
			title: "Student Programmer",
			subtitle: "Aalborg University",
			location: "Aalborg, North Jutland, Denmark",
			description: "Worked as a student programmer while completing my studies, gaining practical experience in software development.",
			technologies: ["C#", ".NET", "Software Development", "Academic Research"],
			type: "experience"
		},
		{
			period: "Mar 2017 - May 2020",
			title: "Full-stack Developer",
			subtitle: "Scanditek IT solutions ApS",
			location: "Randers, Middle Jutland, Denmark",
			description: "Built end-to-end web applications from concept to deployment. Worked closely with product teams to deliver user-focused solutions.",
			technologies: ["JavaScript", "Vue.js", "Python", "PostgreSQL", "Docker"],
			type: "experience"
		},
		{
			period: "Sep 2016 - Sep 2019",
			title: "Tutor",
			subtitle: "Aalborg University",
			location: "Aalborg, Denmark",
			description: "Mentored and tutored fellow students in computer science subjects, helping them succeed in their studies.",
			technologies: [],
			type: "volunteering"
		},
		{
			period: "2015 - 2018",
			title: "Bachelor of Science - BS",
			subtitle: "Computer Software Engineering • Aalborg University",
			location: "Aalborg, Denmark",
			description: "Foundational studies in computer science, software development, and engineering principles.",
			technologies: [],
			type: "education"
		}
	];

	// Use provided data or fallback
	const timelineItems = timelineData.length > 0 ? timelineData : fallbackData;

	// Get styling based on type
	function getItemStyling(type: TimelineItem['type']) {
		switch(type) {
			case 'experience':
				return {
					dotColor: 'bg-amber-500',
					bgColor: 'bg-amber-50',
					periodColor: 'text-amber-600',
					techBg: 'bg-amber-100',
					techText: 'text-amber-800'
				};
			case 'education':
				return {
					dotColor: 'bg-blue-500',
					bgColor: 'bg-blue-50',
					periodColor: 'text-blue-600',
					techBg: 'bg-blue-100',
					techText: 'text-blue-800'
				};
			case 'volunteering':
				return {
					dotColor: 'bg-green-500',
					bgColor: 'bg-green-50',
					periodColor: 'text-green-600',
					techBg: 'bg-green-100',
					techText: 'text-green-800'
				};
			default:
				return {
					dotColor: 'bg-gray-500',
					bgColor: 'bg-gray-50',
					periodColor: 'text-gray-600',
					techBg: 'bg-gray-100',
					techText: 'text-gray-800'
				};
		}
	}
</script>

<!-- Experience & Education Section -->
<section class="flex min-h-screen snap-start snap-always flex-col items-center justify-center bg-gray-800 p-6">
	<div class="container mx-auto max-w-4xl text-white">
		<h2 class="font-display mb-12 text-center text-4xl text-amber-500">Timeline</h2>
		
		<div class="relative">
			<!-- Timeline line -->
			<div class="absolute left-4 top-0 h-full w-0.5 bg-gray-300"></div>
			
			{#each timelineItems as item, index}
				{@const styling = getItemStyling(item.type)}
				<div class="relative mb-8">
					<!-- Timeline dot -->
					<div class="absolute left-2 h-4 w-4 rounded-full {styling.dotColor}"></div>
					
					<!-- Content -->
					<div class="ml-10">
						<div class="rounded-lg {styling.bgColor} p-6 shadow-lg">
							<div class="mb-2 text-sm font-bold {styling.periodColor}">{item.period}</div>
							<h4 class="mb-1 text-lg font-bold text-gray-800">{item.title}</h4>
							<h5 class="mb-1 text-md text-gray-600">{item.subtitle}</h5>
							<div class="mb-3 text-sm text-gray-500">{item.location}</div>
							<p class="mb-4 text-gray-700">{item.description}</p>
							{#if item.technologies.length > 0}
								<div class="flex flex-wrap gap-2">
									{#each item.technologies as tech}
										<span class="rounded-full {styling.techBg} px-3 py-1 text-sm {styling.techText}">{tech}</span>
									{/each}
								</div>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
