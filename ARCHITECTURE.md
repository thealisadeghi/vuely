# Vuely Architecture Documentation

## Overview
Vuely is a modern, flexible UI component library for Vue 3 applications. It features a robust theming system, responsive components, and a seamless development experience powered by Vite. This document explains the architecture and key concepts of the library.

## Project Structure

```
vuely/
├── packages/
│   ├── core/           # Main component library
│   ├── docs/           # Documentation site
│   └── playground/     # Example application
```

### Core Package Structure

```
packages/core/
├── src/
│   ├── components/     # UI components
│   ├── composables/    # Vue composables
│   ├── styles/         # Global styles and themes
│   ├── types/          # TypeScript types
│   └── utils/          # Utility functions
```

## Key Features

### 1. Theme System

#### Base Theme (`src/styles/base.css`)
- Defines CSS custom properties (variables) for colors, typography, spacing, etc.
- Implements both light and dark themes using CSS custom properties
- Prevents Flash of Unstyled Content (FOUC) using opacity transitions

#### Theme Initialization (`src/utils/theme-init.ts` & `init-script.js`)
- Implements early theme detection and application
- Handles theme persistence using both cookies and localStorage
- Supports system color scheme preference
- Prevents FOUC by controlling initial page visibility

### 2. Component Architecture

#### Base Components
Each component follows a consistent structure:
- Vue SFC (Single File Component) with TypeScript
- Scoped CSS using component-specific classes
- Props validation and TypeScript interfaces
- Consistent naming convention (e.g., `VButton`, `VInput`)

Example Component Structure:
```
components/button/
├── VButton.vue        # Main component file
└── index.ts          # Export definitions
```

#### Component Features
- Responsive design
- Accessibility support
- Theme integration
- Size variants
- State handling (disabled, loading, etc.)

### 3. Composables

#### useTheme
- Manages theme state
- Provides theme switching functionality
- Handles theme persistence
- Syncs with system preferences

#### useComponentTheme
- Provides component-specific theming
- Defines size and variant configurations
- Enables component customization

## Build System

### Vite Configuration
- Library mode build configuration
- CSS extraction and processing
- TypeScript support
- Development server setup

### Package Structure
- UMD and ES module builds
- TypeScript declarations
- CSS bundle
- Tree-shakeable exports

## Theme Implementation Details

### CSS Architecture
1. Base Theme Variables
   - Color palettes
   - Typography scale
   - Spacing system
   - Shadows
   - Transitions

2. Component-specific Themes
   - Variant styles
   - Size configurations
   - State styles

3. Dark Theme
   - Color variable overrides
   - Background adjustments
   - Shadow modifications

### Theme Initialization Process
1. Early Script Injection
   ```javascript
   // Injected before any other scripts
   const script = document.createElement('script');
   script.textContent = initScript;
   document.head.insertBefore(script, document.head.firstChild);
   ```

2. Theme Detection Flow
   ```javascript
   // Priority order:
   1. Cookie storage
   2. Local storage
   3. System preference
   4. Default theme (light)
   ```

3. FOUC Prevention
   ```css
   html:not([data-vuely-initialized]) * {
     opacity: 0 !important;
   }
   ```

## Component Development Guide

### Creating New Components
1. Create component directory
2. Implement Vue component with TypeScript
3. Add component styles
4. Create index.ts for exports
5. Add to main exports
6. Add types to vuely.d.ts

### Component Guidelines
- Use semantic HTML
- Implement ARIA attributes
- Support keyboard navigation
- Follow consistent prop naming
- Include proper TypeScript types
- Add appropriate CSS variables
- Support theme customization

## Usage Example

```vue
<template>
  <v-button type="primary" size="large" @click="handleClick">
    Click Me
  </v-button>
</template>

<script setup lang="ts">
import { VButton } from '@vuely/core';
</script>
```

## Development Workflow

1. Install Dependencies
   ```bash
   pnpm install
   ```

2. Start Development
   ```bash
   pnpm dev
   ```

3. Build Library
   ```bash
   pnpm build
   ```

## Best Practices

### Theme Customization
- Use CSS custom properties
- Override at the root level
- Maintain color contrast ratios
- Test in both light and dark modes

### Component Development
- Keep components focused
- Use composition
- Implement proper prop validation
- Add proper TypeScript types
- Test edge cases
- Document props and events

### Performance
- Lazy load when possible
- Minimize bundle size
- Use tree-shaking
- Optimize transitions
- Cache theme preferences

## Testing

### Component Testing
- Unit tests for components
- Integration tests for composables
- Theme switching tests
- Accessibility tests
- Browser compatibility tests

### Theme Testing
- Light/dark mode switches
- System preference changes
- Storage persistence
- FOUC prevention
- CSS variable inheritance

## Future Improvements

1. Additional Components
   - Form elements
   - Navigation components
   - Data display components
   - Feedback components

2. Enhanced Features
   - RTL support
   - Animation system
   - Custom theme builder
   - Component playground

3. Documentation
   - Interactive examples
   - Theme customization guide
   - Component API reference
   - Best practices guide 