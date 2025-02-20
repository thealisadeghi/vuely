# Prompt for Building Vuely UI Library for Vue and Nuxt

Please help me create a UI library called "Vuely" for Vue.js and Nuxt.js. This library will have a minimal design and will be suitable for both small and large-scale projects.

## Project Information

**Library Name**: Vuely  
**Goal**: Provide minimal and flexible UI components for Vue and Nuxt projects of all sizes  
**Design Style**: Minimal, focusing on simplicity, readability, and efficiency  
**Target Audience**: Vue and Nuxt developers of all experience levels  

## Required Guidance Steps

### 1. Project Structure and Setup
- Guide on creating an optimal file structure for Vuely
- Setting up the development environment with Vue 3 and its ecosystem
- Configuring TypeScript for strong typing
- Setting up Vite for faster development
- Configuring a monorepo for better component management (using PNPM Workspaces or Turborepo)

### 2. Design System
- Defining a minimal design system with a limited yet harmonious color palette
- Creating Design Tokens for:
  - Colors (primary, secondary, neutral, warning)
  - Typography (modern sans-serif fonts with high readability)
  - Spacing (4px or 8px system)
  - Shadows (subtle and minimal)
  - Border radius
- Implementing CSS using CSS Variables and a Utility-First approach
- Theme system supporting light/dark modes with customization options
- Fully responsive design using a Mobile-First approach

### 3. Core Components (Complete Code for Each)

#### Buttons (VButton)
- Types: Primary, Secondary, Tertiary, Ghost, Link
- Sizes: Small, Medium, Large
- States: Disabled, Loading, Danger
- Icon support (before/after text)
- Button groups

#### Forms and Inputs
- VInput (text, number, email)
- VTextarea
- VSelect (with async options support)
- VCheckbox and VRadio
- VSwitch
- VDatePicker (minimal)
- VFileUpload

#### Display Components
- VCard (with header, body, footer, and multiple variants)
- VAlert (for notifications, warnings, errors, and success messages)
- VBadge (for counters and statuses)
- VAvatar (image, text, color)
- VTooltip and VPopover
- VProgress (linear and circular)
- VSkeleton (for loading states)

#### Navigation and Layout
- VTabs (horizontal and vertical)
- VAccordion
- VMenu (dropdown and sidebar)
- VPagination
- VBreadcrumb
- VSidebar
- VNavbar

#### Modals and Notifications
- VModal (various sizes with customizable animations)
- VDrawer (from all four directions)
- VToast (temporary notifications)
- VConfirmDialog (confirmation dialogs)

#### Complex Data Components
- VTable (with sorting, filtering, and pagination)
- VVirtualList (for large lists)
- VTree (for hierarchical structures)
- VCalendar (simple calendar view)

### 4. Advanced Features
- Form validation system with ready-made integrations for Vuelidate and Yup
- Lightweight animation library using Composition API
- Useful Directives:
  - v-click-outside
  - v-long-press
  - v-resize
  - v-intersect
  - v-copy
- Composables for:
  - useForm
  - useModal
  - useTheme
  - useBreakpoint
  - useToast
- Full RTL support
- Implementing WAI-ARIA for complete accessibility
- Easy integration with state management (Pinia)

### 5. Documentation
- Creating a documentation website with VitePress
- Introduction and quick start guide
- Design guide and Design Tokens system
- Dedicated pages for each component with:
  - Full API reference
  - Practical usage examples
  - Interactive Playground
- Tutorials with complete examples
- Migration guide from other UI libraries (Vuetify, Quasar, etc.)

### 6. Testing and Deployment
- Unit testing with Vitest
- Component testing with Vue Test Utils
- E2E testing with Cypress
- CI/CD setup with GitHub Actions
- Publishing to npm with namespaced packages (@vuely/core, @vuely/icons)
- Using Semantic Versioning

### 7. Optimization
- Ensuring full Tree-shaking for optimized bundle size
- Providing ESM and CommonJS versions
- Lazy-loading for heavy components
- CSS optimization by merging and removing duplicate styles
- Performance-optimized animations

## Expected Output
- Complete TypeScript code for each component
- All necessary templates and styles
- Test files and documentation
- Practical examples for Vue 3 and Nuxt 3
- Guide on publishing and maintaining the library

Please provide step-by-step explanations and complete code snippets for each section so that I can develop Vuely as a minimal yet powerful UI library for the Vue ecosystem.
