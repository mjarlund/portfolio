import { linkedInService } from '$lib/services/linkedin.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const timelineData = await linkedInService.getAllTimelineData();
		
		return {
			timelineData
		};
	} catch (error) {
		console.error('Error loading LinkedIn data:', error);
		
		// Fallback data if LinkedIn API fails
		return {
			timelineData: [
				{
					period: "Sep 2020 - Present",
					title: "Software Pilot",
					subtitle: "Trifork",
					location: "Aalborg, North Jutland, Denmark",
					description: "Leading development of scalable web applications and cloud solutions. Working with Representational State Transfer (REST), .NET Core and modern technologies.",
					technologies: ["REST", ".NET Core", "C#", "Microservices", "Cloud Architecture"],
					type: "experience" as const
				},
				{
					period: "2018 - 2020",
					title: "Master of Science - MS",
					subtitle: "Computer Software Engineering • Aalborg University",
					location: "Aalborg, Denmark",
					description: "Advanced studies in software engineering, system architecture, and modern development methodologies.",
					technologies: [],
					type: "education" as const
				},
				{
					period: "Jul 2018 - Jun 2019",
					title: "Student Programmer",
					subtitle: "Aalborg University",
					location: "Aalborg, North Jutland, Denmark",
					description: "Worked as a student programmer while completing my studies, gaining practical experience in software development.",
					technologies: ["C#", ".NET", "Software Development", "Academic Research"],
					type: "experience" as const
				},
				{
					period: "Mar 2017 - May 2020",
					title: "Full-stack Developer",
					subtitle: "Scanditek IT solutions ApS",
					location: "Randers, Middle Jutland, Denmark",
					description: "Built end-to-end web applications from concept to deployment. Worked closely with product teams to deliver user-focused solutions.",
					technologies: ["JavaScript", "Vue.js", "Python", "PostgreSQL", "Docker"],
					type: "experience" as const
				},
				{
					period: "Sep 2016 - Sep 2019",
					title: "Tutor",
					subtitle: "Aalborg University",
					location: "Aalborg, Denmark",
					description: "Mentored and tutored fellow students in computer science subjects, helping them succeed in their studies.",
					technologies: [],
					type: "volunteering" as const
				},
				{
					period: "2015 - 2018",
					title: "Bachelor of Science - BS",
					subtitle: "Computer Software Engineering • Aalborg University",
					location: "Aalborg, Denmark",
					description: "Foundational studies in computer science, software development, and engineering principles.",
					technologies: [],
					type: "education" as const
				}
			]
		};
	}
};
