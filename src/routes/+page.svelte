<script>
	import { HeroSection, AboutSection } from '$lib';
	import { site, personJsonLd } from '$lib/site';

	const title = `${site.name} — ${site.jobTitle}`;
	const description = `${site.name} is a software engineer. ${site.tagline}`;
	// Escape "<" so the JSON can never close the script tag early.
	const jsonLd = JSON.stringify(personJsonLd).replace(/</g, '\\u003c');
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={site.url} />
	<meta property="og:type" content="profile" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={site.url} />
	<meta property="og:image" content="{site.url}/preview.png" />
	<meta property="og:image:alt" content="{site.name} — {site.jobTitle}" />
	<meta property="profile:first_name" content="Mikkel" />
	<meta property="profile:last_name" content="Jarlund" />
	<meta name="twitter:card" content="summary_large_image" />
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<HeroSection />
<AboutSection />
