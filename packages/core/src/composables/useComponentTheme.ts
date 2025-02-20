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
      height: '31px',
      padding: '0 12px',
      fontSize: 'var(--v-font-size-sm)',
      iconSize: '16px',
      gap: '6px',
    },
    medium: {
      height: '38px',
      padding: '0 16px',
      fontSize: 'var(--v-font-size-base)',
      iconSize: '18px',
      gap: '8px',
    },
    large: {
      height: '48px',
      padding: '0 20px',
      fontSize: 'var(--v-font-size-lg)',
      iconSize: '20px',
      gap: '10px',
    },
  },
  variants: {
    default: {
      background: 'var(--v-default-color)',
      color: 'var(--v-default-text)',
      border: '1px solid var(--v-default-border)',
      hoverBackground: 'var(--v-default-color-hover)',
      hoverBorder: '1px solid var(--v-default-border)',
      activeBackground: 'var(--v-default-color-active)',
      activeBorder: '1px solid var(--v-default-border)',
      disabledBackground: 'var(--v-background-disabled)',
      disabledColor: 'var(--v-text-color-disabled)',
      disabledBorder: '1px solid var(--v-border-color)',
    },
    primary: {
      background: 'var(--v-primary-color)',
      color: 'var(--v-primary-contrast)',
      hoverBackground: 'var(--v-primary-color-hover)',
      activeBackground: 'var(--v-primary-color-active)',
      disabledBackground: 'var(--v-primary-color)',
      disabledColor: 'var(--v-primary-contrast)',
    },
    purple: {
      background: 'var(--v-purple-color)',
      color: 'var(--v-purple-contrast)',
      hoverBackground: 'var(--v-purple-color-hover)',
      activeBackground: 'var(--v-purple-color-active)',
      disabledBackground: 'var(--v-purple-color)',
      disabledColor: 'var(--v-purple-contrast)',
    },
    success: {
      background: 'var(--v-success-color)',
      color: 'var(--v-success-contrast)',
      hoverBackground: 'var(--v-success-color-hover)',
      activeBackground: 'var(--v-success-color-active)',
      disabledBackground: 'var(--v-success-color)',
      disabledColor: 'var(--v-success-contrast)',
    },
    warning: {
      background: 'var(--v-warning-color)',
      color: 'var(--v-warning-contrast)',
      hoverBackground: 'var(--v-warning-color-hover)',
      activeBackground: 'var(--v-warning-color-active)',
      disabledBackground: 'var(--v-warning-color)',
      disabledColor: 'var(--v-warning-contrast)',
    },
    danger: {
      background: 'var(--v-danger-color)',
      color: 'var(--v-danger-contrast)',
      hoverBackground: 'var(--v-danger-color-hover)',
      activeBackground: 'var(--v-danger-color-active)',
      disabledBackground: 'var(--v-danger-color)',
      disabledColor: 'var(--v-danger-contrast)',
    },
  },
};

export function useComponentTheme(config?: ComponentThemeConfig) {
  const getThemeStyles = computed(() => {
    return {
      sizes: config?.sizes || defaultButtonTheme.sizes,
      variants: config?.variants || defaultButtonTheme.variants,
    };
  });

  return {
    getThemeStyles,
  };
} 