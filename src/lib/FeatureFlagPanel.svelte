<script>
  import { featureFlags } from './featureFlags.ts';
  import { onMount } from 'svelte';

  let showPanel = false;
  let isCollapsed = false;

  onMount(() => {
    // Show admin panel only in development or with special URL parameter
    const isDev = import.meta.env.DEV;
    const urlParams = new URLSearchParams(window.location.search);
    showPanel = isDev || urlParams.has('admin');
    
    featureFlags.loadFromURL();
  });

  // Handle checkbox changes directly
  function handleSkillsToggle() {
    console.log('Skills toggle clicked');
    featureFlags.toggleSkills();
  }

  function handleExperienceToggle() {
    console.log('Experience toggle clicked');
    featureFlags.toggleExperience();
  }

  function handleEducationToggle() {
    console.log('Education toggle clicked');
    featureFlags.toggleEducation();
  }

  function handleContactToggle() {
    console.log('Contact toggle clicked');
    featureFlags.toggleContact();
  }

  function toggleCollapse() {
    isCollapsed = !isCollapsed;
  }
</script>

{#if showPanel}
  <div class="fixed bottom-4 right-4 z-50 rounded-lg bg-gray-800 text-white shadow-xl transition-all duration-300 {isCollapsed ? 'p-2' : 'p-4'}">
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-bold {isCollapsed ? 'text-xs' : ''}">
        {isCollapsed ? '🏴‍☠️' : 'Feature Flags'}
      </h3>
      <button 
        class="text-xs text-gray-400 hover:text-white ml-2"
        on:click={toggleCollapse}
        title={isCollapsed ? 'Expand panel' : 'Collapse panel'}
      >
        {isCollapsed ? '↗️' : '↙️'}
      </button>
    </div>
    
    {#if !isCollapsed}
      <div class="mt-3 space-y-2 text-xs">
        <label class="flex items-center gap-2">
          <input 
            type="checkbox" 
            checked={$featureFlags.showSkillsSection}
            on:change={handleSkillsToggle}
          />
          Skills Section
        </label>
        <label class="flex items-center gap-2">
          <input 
            type="checkbox" 
            checked={$featureFlags.showExperienceSection}
            on:change={handleExperienceToggle}
          />
          Experience Section
        </label>
        <label class="flex items-center gap-2">
          <input 
            type="checkbox" 
            checked={$featureFlags.showEducationSection}
            on:change={handleEducationToggle}
          />
          Education Section
        </label>
        <label class="flex items-center gap-2">
          <input 
            type="checkbox" 
            checked={$featureFlags.showContactSection}
            on:change={handleContactToggle}
          />
          Contact Section
        </label>
      </div>
    {/if}
  </div>
{/if}
