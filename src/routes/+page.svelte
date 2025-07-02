<script>
	import {
		HeroSection,
		AboutSection,
		ExperienceSection,
		EducationSection,
		ContactSection
	} from '$lib';
	import {
		PUBLIC_FEATURE_EXPERIENCE_SECTION,
		PUBLIC_FEATURE_EDUCATION_SECTION,
		PUBLIC_FEATURE_CONTACT_SECTION
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

{#if PUBLIC_FEATURE_EDUCATION_SECTION == 'true'}
	<EducationSection />
{/if}

{#if PUBLIC_FEATURE_CONTACT_SECTION == 'true'}
	<ContactSection />
{/if}
