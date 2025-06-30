<script>
	import {
		HeroSection,
		AboutSection,
		SkillsSection,
		ExperienceSection,
		EducationSection,
		ContactSection
	} from '$lib';
	import {
		PUBLIC_FEATURE_SKILLS_SECTION,
		PUBLIC_FEATURE_EXPERIENCE_SECTION,
		PUBLIC_FEATURE_EDUCATION_SECTION,
		PUBLIC_FEATURE_CONTACT_SECTION
	} from '$env/static/public';
</script>

<!-- Always show Hero and About -->
<HeroSection />
<AboutSection />

<!-- Conditionally show other sections based on feature flags -->
{#if PUBLIC_FEATURE_SKILLS_SECTION == 'true'}
	<SkillsSection />
{/if}

{#if PUBLIC_FEATURE_EXPERIENCE_SECTION == 'true'}
	<ExperienceSection />
{/if}

{#if PUBLIC_FEATURE_EDUCATION_SECTION == 'true'}
	<EducationSection />
{/if}

{#if PUBLIC_FEATURE_CONTACT_SECTION == 'true'}
	<ContactSection />
{/if}
