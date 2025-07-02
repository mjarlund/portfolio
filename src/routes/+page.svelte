<script>
	import {
		HeroSection,
		AboutSection,
		ExperienceSection
	} from '$lib';
	import {
		PUBLIC_FEATURE_EXPERIENCE_SECTION
	} from '$env/static/public';

	export let data;
</script>

<!-- Always show Hero and About -->
<HeroSection />
<AboutSection />

<!-- Conditionally show other sections based on feature flags -->
{#if PUBLIC_FEATURE_EXPERIENCE_SECTION == 'true'}
	<ExperienceSection timelineData={data.timelineData} />
{/if}
