// Base styles must be imported first
import './styles/base.css';

// Theme initialization
import './utils/theme-init';

// Components
export * from './components';

// Composables
export { useTheme } from './composables/useTheme';

// Types
export * from './types';

// Install function
import { App } from 'vue';
import * as components from './components';

export function install(app: App) {
  for (const key in components) {
    // @ts-ignore - We know these are valid components
    app.component(key, components[key]);
  }
}

// Default export
export default { install }; 