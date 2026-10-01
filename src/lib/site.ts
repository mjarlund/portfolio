export const site = {
	url: 'https://www.mjarlund.dk',
	name: 'Mikkel Jarlund',
	jobTitle: 'Software Engineer',
	tagline: 'I build software products and systems, primarily across .NET, cloud, mobile and AI.',
	email: 'mail@mjarlund.dk',
	linkedin: 'https://www.linkedin.com/in/mjarlund',
	github: 'https://github.com/mjarlund'
} as const;

export const personJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	'@id': `${site.url}/#person`,
	name: site.name,
	url: site.url,
	jobTitle: site.jobTitle,
	description: site.tagline,
	image: `${site.url}/preview.png`,
	knowsAbout: ['.NET', 'C#', 'Cloud computing', 'Mobile development', 'Artificial intelligence'],
	sameAs: [site.linkedin, site.github]
};
