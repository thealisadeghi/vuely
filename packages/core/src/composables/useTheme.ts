import { ref, watch } from 'vue';
import { THEME_STORAGE_KEY } from '../utils/theme-init';

type Theme = 'light' | 'dark';

const currentTheme = ref<Theme>('light');

export function useTheme() {
  const setTheme = (theme: Theme) => {
    currentTheme.value = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    document.cookie = `${THEME_STORAGE_KEY}=${theme};path=/;max-age=31536000`; // 1 year
  };

  const toggleTheme = () => {
    const newTheme = currentTheme.value === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Initialize theme
  const initTheme = () => {
    const savedTheme = document.documentElement.getAttribute('data-theme') as Theme | null;
    if (savedTheme) {
      currentTheme.value = savedTheme;
    }
  };

  // Watch system preference changes
  if (typeof window !== 'undefined') {
    watch(
      () => window.matchMedia('(prefers-color-scheme: dark)').matches,
      (isDark) => {
        if (!localStorage.getItem(THEME_STORAGE_KEY)) {
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