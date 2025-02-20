<template>
  <div class="app">
    <header>
      <h1>Vuely Playground</h1>
      <v-button @click="toggleTheme">
        <template #icon>
          <span class="theme-icon">{{ theme === 'light' ? '🌞' : '🌙' }}</span>
        </template>
        {{ theme === 'light' ? 'Dark Mode' : 'Light Mode' }}
      </v-button>
    </header>

    <main>
      <section>
        <h2>Buttons</h2>
        <div class="demo-section">
          <div class="demo-row">
            <h3>Types</h3>
            <v-button type="primary">Primary</v-button>
            <v-button type="secondary">Secondary</v-button>
            <v-button type="tertiary">Tertiary</v-button>
            <v-button type="ghost">Ghost</v-button>
            <v-button type="link">Link</v-button>
          </div>

          <div class="demo-row">
            <h3>Sizes</h3>
            <v-button size="small">Small</v-button>
            <v-button size="medium">Medium</v-button>
            <v-button size="large">Large</v-button>
          </div>

          <div class="demo-row">
            <h3>With Icons</h3>
            <v-button>
              <template #icon>👋</template>
              Left Icon
            </v-button>
            <v-button>
              Right Icon
              <template #icon-right>👉</template>
            </v-button>
            <v-button type="secondary">
              <template #icon>⭐</template>
              Both Icons
              <template #icon-right>⭐</template>
            </v-button>
          </div>

          <div class="demo-row">
            <h3>States</h3>
            <v-button disabled>Disabled</v-button>
            <v-button :loading="isLoading" @click="handleLoadingClick">
              {{ isLoading ? 'Loading...' : 'Click to Load' }}
            </v-button>
            <v-button loading loadingText="Processing...">Processing</v-button>
          </div>

          <div class="demo-row">
            <h3>Variants</h3>
            <v-button rounded>Rounded</v-button>
            <v-button type="secondary" rounded>Rounded</v-button>
            <div class="demo-block">
              <v-button block>Block Button</v-button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Inputs</h2>
        <div class="demo-section">
          <div class="demo-row">
            <h3>Basic</h3>
            <div class="demo-inputs">
              <v-input
                v-model="inputValue"
                label="Label"
                placeholder="Type something..."
              />
              <v-input
                v-model="inputValue2"
                label="With Hint"
                placeholder="Type something..."
                hint="This is a hint text"
              />
            </div>
          </div>

          <div class="demo-row">
            <h3>Sizes</h3>
            <div class="demo-inputs">
              <v-input
                size="small"
                placeholder="Small input"
              />
              <v-input
                size="medium"
                placeholder="Medium input"
              />
              <v-input
                size="large"
                placeholder="Large input"
              />
            </div>
          </div>

          <div class="demo-row">
            <h3>States</h3>
            <div class="demo-inputs">
              <v-input
                disabled
                label="Disabled"
                placeholder="Disabled input"
              />
              <v-input
                label="Error"
                placeholder="Error input"
                error="This field is required"
              />
              <v-input
                label="Success"
                placeholder="Success input"
                success
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { VButton, VInput, useTheme } from '@vuely/core';

const { theme, toggleTheme, initTheme } = useTheme();

const inputValue = ref('');
const inputValue2 = ref('');
const isLoading = ref(false);

const handleLoadingClick = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};

onMounted(() => {
  initTheme();
});
</script>

<style>
body {
  margin: 0;
  font-family: var(--v-font-family);
  background-color: var(--v-background-color);
  color: var(--v-text-color);
  min-height: 100vh;
}

.app {
  padding: var(--v-spacing-6);
  max-width: 1200px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--v-spacing-8);
  padding: var(--v-spacing-4) var(--v-spacing-6);
  border-radius: var(--v-border-radius-large);
  background-color: var(--v-background-color);
  box-shadow: var(--v-shadow-base);
  border: 1px solid var(--v-border-color);
}

h1 {
  margin: 0;
  font-size: var(--v-font-size-2xl);
  background: linear-gradient(135deg, var(--v-primary-color), var(--v-secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h2 {
  font-size: var(--v-font-size-xl);
  margin-bottom: var(--v-spacing-4);
  color: var(--v-text-color);
}

h3 {
  font-size: var(--v-font-size-lg);
  margin-bottom: var(--v-spacing-3);
  color: var(--v-text-color-secondary);
}

section + section {
  margin-top: var(--v-spacing-8);
}

.demo-section {
  background-color: var(--v-background-color);
  border: 1px solid var(--v-border-color);
  border-radius: var(--v-border-radius-large);
  padding: var(--v-spacing-6);
  box-shadow: var(--v-shadow-base);
}

.demo-row {
  margin-bottom: var(--v-spacing-6);
  padding: var(--v-spacing-4);
  border-radius: var(--v-border-radius-base);
  background-color: var(--v-background-hover);
}

.demo-row:last-child {
  margin-bottom: 0;
}

.demo-row > * + * {
  margin-left: var(--v-spacing-2);
}

.demo-inputs {
  display: flex;
  flex-direction: column;
  gap: var(--v-spacing-4);
  max-width: 400px;
}

.demo-block {
  margin-top: var(--v-spacing-4);
  max-width: 300px;
}

.theme-icon {
  font-size: 1.2em;
  line-height: 1;
}

/* Transitions */
* {
  transition: background-color 0.3s ease,
              color 0.3s ease,
              border-color 0.3s ease,
              box-shadow 0.3s ease;
}
</style> 