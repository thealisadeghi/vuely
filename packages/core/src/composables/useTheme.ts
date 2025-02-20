import { ref, watch } from 'vue';

type Theme = 'light' | 'dark';

const currentTheme = ref<Theme>('light');

export function useTheme() {
  const setTheme = (theme: Theme) => {
    currentTheme.value = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('vuely-theme', theme);
  };

  const toggleTheme = () => {
    const newTheme = currentTheme.value === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Initialize theme
  const initTheme = () => {
    const savedTheme = localStorage.getItem('vuely-theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  };

  // Watch system preference changes
  if (typeof window !== 'undefined') {
    watch(
      () => window.matchMedia('(prefers-color-scheme: dark)').matches,
      (isDark) => {
        if (!localStorage.getItem('vuely-theme')) {
          setTheme(isDark ? 'dark' : 'light');
        }
      }
    );
  }

  return {
    theme: currentTheme,
    setTheme,
    toggleTheme,
    initTheme,
  };
}

export type { Theme }; 