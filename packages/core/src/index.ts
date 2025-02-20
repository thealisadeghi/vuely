// Styles
import './styles/base.css';
import './styles/tokens.css';

// Components
export * from './components';

// Composables
export * from './composables';

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

// Create plugin
export const plugin = { install };

// Export everything as named exports
export { plugin as default }; 