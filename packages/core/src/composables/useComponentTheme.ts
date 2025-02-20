import { computed } from 'vue';
import type { Size } from '../types';

export interface ComponentThemeConfig {
  sizes: Record<Size, {
    height: string;
    padding: string;
    fontSize: string;
    iconSize?: string;
    gap?: string;
  }>;
  variants: Record<string, {
    background: string;
    color: string;
    border?: string;
    hoverBackground?: string;
    hoverColor?: string;
    hoverBorder?: string;
    activeBackground?: string;
    activeColor?: string;
    activeBorder?: string;
    disabledBackground?: string;
    disabledColor?: string;
    disabledBorder?: string;
  }>;
}

export const defaultButtonTheme: ComponentThemeConfig = {
  sizes: {
    small: {
      height: '32px',
      padding: '0 12px',
      fontSize: 'var(--v-font-size-sm)',
      iconSize: '16px',
      gap: '6px',
    },
    medium: {
      height: '40px',
      padding: '0 16px',
      fontSize: 'var(--v-font-size-base)',
      iconSize: '18px',
      gap: '8px',
    },
    large: {
      height: '48px',
      padding: '0 24px',
      fontSize: 'var(--v-font-size-lg)',
      iconSize: '20px',
      gap: '10px',
    },
  },
  variants: {
    primary: {
      background: 'var(--v-primary-color)',
      color: 'var(--v-primary-contrast)',
      hoverBackground: 'var(--v-primary-color-hover)',
      activeBackground: 'var(--v-primary-color-active, var(--v-primary-color-hover))',
    },
    secondary: {
      background: 'var(--v-secondary-color)',
      color: 'var(--v-secondary-contrast)',
      hoverBackground: 'var(--v-secondary-color-hover)',
      activeBackground: 'var(--v-secondary-color-active, var(--v-secondary-color-hover))',
    },
    tertiary: {
      background: 'transparent',
      color: 'var(--v-primary-color)',
      border: '1px solid var(--v-primary-color)',
      hoverBackground: 'var(--v-primary-color-10)',
      hoverBorder: '1px solid var(--v-primary-color-hover)',
      activeBackground: 'var(--v-primary-color-20, var(--v-primary-color-10))',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--v-text-color)',
      hoverBackground: 'var(--v-background-hover)',
      activeBackground: 'var(--v-background-active, var(--v-background-hover))',
    },
    link: {
      background: 'transparent',
      color: 'var(--v-primary-color)',
      hoverColor: 'var(--v-primary-color-hover)',
      activeColor: 'var(--v-primary-color-active, var(--v-primary-color-hover))',
    },
  },
};

export function useComponentTheme(config: ComponentThemeConfig = defaultButtonTheme) {
  const getThemeStyles = computed(() => {
    return {
      sizes: config.sizes,
      variants: config.variants,
    };
  });

  return {
    getThemeStyles,
  };
} 