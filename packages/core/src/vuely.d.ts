declare module '@vuely/core' {
  import { App, Component } from 'vue';
  import { ButtonType, Size } from './types';

  export const VButton: Component;
  export const VInput: Component;
  
  export interface Theme {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
    toggleTheme: () => void;
    initTheme: () => void;
  }

  export function useTheme(): Theme;

  export function install(app: App): void;

  export const plugin: { install: typeof install };
  export default plugin;
} 