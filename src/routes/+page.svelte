<script>
	import {
		HeroSection,
		AboutSection,
		SkillsSection,
		ExperienceSection,
		EducationSection,
		ContactSection
	} from '$lib';
	import FeatureFlagPanel from '$lib/FeatureFlagPanel.svelte';
	import { featureFlags } from '$lib/featureFlags.ts';
	import { onMount } from 'svelte';

	let flags;
	$: flags = $featureFlags;

	onMount(() => {
		featureFlags.loadFromURL();
	});
</script>

<!-- Always show Hero and About -->
<HeroSection />
<AboutSection />

<!-- Conditionally show other sections based on feature flags -->
{#if flags.showSkillsSection}
	<SkillsSection />
{/if}

{#if flags.showExperienceSection}
	<ExperienceSection />
{/if}

{#if flags.showEducationSection}
	<EducationSection />
{/if}

{#if flags.showContactSection}
	<ContactSection />
{/if}

<!-- Development feature flag panel -->
<FeatureFlagPanel />

<style lang="postcss">
</style>
