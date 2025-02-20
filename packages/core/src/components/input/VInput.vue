<template>
  <div
    class="v-input"
    :class="[
      `v-input--${size}`,
      {
        'v-input--disabled': disabled,
        'v-input--error': error,
        'v-input--success': success,
      }
    ]"
  >
    <label v-if="label" class="v-input__label" :for="id">{{ label }}</label>
    <div class="v-input__wrapper">
      <input
        :id="id"
        ref="input"
        v-bind="$attrs"
        :value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        class="v-input__field"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        @blur="$emit('blur', $event)"
        @focus="$emit('focus', $event)"
      >
    </div>
    <span v-if="error" class="v-input__error">{{ error }}</span>
    <span v-else-if="hint" class="v-input__hint">{{ hint }}</span>
  </div>
</template>

<script setup lang="ts">
import { Size } from '../../types';

withDefaults(defineProps<{
  modelValue?: string | number;
  label?: string;
  type?: string;
  placeholder?: string;
  size?: Size;
  disabled?: boolean;
  error?: string;
  success?: boolean;
  hint?: string;
  id?: string;
}>(), {
  type: 'text',
  size: 'medium',
  disabled: false,
  success: false,
});

defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'blur', event: FocusEvent): void;
  (e: 'focus', event: FocusEvent): void;
}>();
</script>

<style scoped>
.v-input {
  display: flex;
  flex-direction: column;
  gap: var(--v-spacing-1);
}

.v-input__label {
  color: var(--v-text-color);
  font-size: var(--v-font-size-sm);
  font-weight: 500;
}

.v-input__wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.v-input__field {
  width: 100%;
  border: 1px solid var(--v-border-color);
  border-radius: var(--v-border-radius-base);
  background-color: var(--v-background-color);
  color: var(--v-text-color);
  font-family: var(--v-font-family);
  transition: var(--v-transition-base);
}

.v-input__field:hover:not(:disabled) {
  border-color: var(--v-primary-color);
}

.v-input__field:focus {
  outline: none;
  border-color: var(--v-primary-color);
  box-shadow: 0 0 0 2px var(--v-primary-color-10);
}

/* Sizes */
.v-input--small .v-input__field {
  height: 32px;
  padding: 0 var(--v-spacing-3);
  font-size: var(--v-font-size-sm);
}

.v-input--medium .v-input__field {
  height: 40px;
  padding: 0 var(--v-spacing-4);
  font-size: var(--v-font-size-base);
}

.v-input--large .v-input__field {
  height: 48px;
  padding: 0 var(--v-spacing-5);
  font-size: var(--v-font-size-lg);
}

/* States */
.v-input--disabled .v-input__field {
  background-color: var(--v-background-disabled);
  border-color: var(--v-border-color);
  color: var(--v-text-color-disabled);
  cursor: not-allowed;
}

.v-input--error .v-input__field {
  border-color: var(--v-error-color);
}

.v-input--error .v-input__field:focus {
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.1);
}

.v-input--success .v-input__field {
  border-color: var(--v-success-color);
}

.v-input--success .v-input__field:focus {
  box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.1);
}

.v-input__error {
  color: var(--v-error-color);
  font-size: var(--v-font-size-sm);
}

.v-input__hint {
  color: var(--v-text-color-secondary);
  font-size: var(--v-font-size-sm);
}
</style> 