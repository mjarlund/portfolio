import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Get default values from environment variables, fallback to true
const getDefaultFlags = () => {
  // In development, default to true. In production, check env vars
  const isDev = import.meta.env.DEV;
  
  if (isDev) {
    return {
      showSkillsSection: true,
      showExperienceSection: true,
      showEducationSection: true,
      showContactSection: true
    };
  }

  // Production: check environment variables
  return {
    showSkillsSection: import.meta.env.VITE_ENABLE_SKILLS_SECTION !== 'false',
    showExperienceSection: import.meta.env.VITE_ENABLE_EXPERIENCE_SECTION !== 'false',
    showEducationSection: import.meta.env.VITE_ENABLE_EDUCATION_SECTION !== 'false',
    showContactSection: import.meta.env.VITE_ENABLE_CONTACT_SECTION !== 'false'
  };
};

// Feature flag store
function createFeatureFlags() {
  const { subscribe, set, update } = writable(getDefaultFlags());

  return {
    subscribe,
    set,
    update,
    // Toggle individual flags
    toggleSkills: () => {
      update(flags => {
        const newFlags = { ...flags, showSkillsSection: !flags.showSkillsSection };
        console.log('Toggling skills:', newFlags.showSkillsSection);
        return newFlags;
      });
    },
    toggleExperience: () => {
      update(flags => {
        const newFlags = { ...flags, showExperienceSection: !flags.showExperienceSection };
        console.log('Toggling experience:', newFlags.showExperienceSection);
        return newFlags;
      });
    },
    toggleEducation: () => {
      update(flags => {
        const newFlags = { ...flags, showEducationSection: !flags.showEducationSection };
        console.log('Toggling education:', newFlags.showEducationSection);
        return newFlags;
      });
    },
    toggleContact: () => {
      update(flags => {
        const newFlags = { ...flags, showContactSection: !flags.showContactSection };
        console.log('Toggling contact:', newFlags.showContactSection);
        return newFlags;
      });
    },
    // Load flags from URL parameters (for Vercel deployment previews)
    loadFromURL: () => {
      if (browser) {
        const params = new URLSearchParams(window.location.search);
        update(flags => {
          const newFlags = {
            ...flags,
            showSkillsSection: params.get('skills') !== 'false',
            showExperienceSection: params.get('experience') !== 'false', 
            showEducationSection: params.get('education') !== 'false',
            showContactSection: params.get('contact') !== 'false'
          };
          console.log('Loading flags from URL:', newFlags);
          return newFlags;
        });
      }
    }
  };
}

export const featureFlags = createFeatureFlags();
