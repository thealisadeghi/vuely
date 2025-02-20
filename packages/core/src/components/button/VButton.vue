<template>
  <button
    :class="[
      'v-button',
      `v-button--${type}`,
      `v-button--${size}`,
      {
        'v-button--loading': loading,
        'v-button--disabled': disabled,
        'v-button--block': block,
        'v-button--rounded': rounded,
      }
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="v-button__loader"></span>
    <span v-else-if="$slots.icon" class="v-button__icon">
      <slot name="icon" />
    </span>
    <span v-if="$slots.default" class="v-button__content" :class="{ 'v-button__content--loading': loading }">
      <slot />
    </span>
    <span v-if="!loading && $slots['icon-right']" class="v-button__icon">
      <slot name="icon-right" />
    </span>
    <span v-if="loading && loadingText" class="v-button__loading-text">{{ loadingText }}</span>
  </button>
</template>

<script setup lang="ts">
import { ButtonType, Size } from '../../types';

const props = withDefaults(defineProps<{
  type?: ButtonType;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  block?: boolean;
  rounded?: boolean;
}>(), {
  type: 'default',
  size: 'medium',
  disabled: false,
  loading: false,
  block: false,
  rounded: false,
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const handleClick = (event: MouseEvent) => {
  if (!props.loading && !props.disabled) {
    emit('click', event);
  }
};
</script>

<style scoped>
.v-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--v-spacing-2);
  border: none;
  border-radius: var(--v-border-radius-base);
  cursor: pointer;
  font-weight: 500;
  transition: var(--v-transition-base);
  position: relative;
  text-decoration: none;
  font-family: var(--v-font-family);
  line-height: 1.5;
  white-space: nowrap;
  outline: none;
  user-select: none;
  box-shadow: var(--v-shadow-xs);
}

/* Default variant */
.v-button--default {
  background: var(--v-default-color);
  color: var(--v-default-text);
  border: 1px solid var(--v-default-border);
}

.v-button--default:hover:not(:disabled) {
  background: var(--v-default-color-hover);
  border-color: var(--v-default-border);
}

.v-button--default:active:not(:disabled) {
  background: var(--v-default-color-active);
  border-color: var(--v-default-border);
}

/* Primary variant */
.v-button--primary {
  background: var(--v-primary-color);
  color: var(--v-primary-contrast);
  border: 1px solid transparent;
}

.v-button--primary:hover:not(:disabled) {
  background: var(--v-primary-color-hover);
}

.v-button--primary:active:not(:disabled) {
  background: var(--v-primary-color-active);
}

/* Purple variant */
.v-button--purple {
  background: var(--v-purple-color);
  color: var(--v-purple-contrast);
  border: 1px solid transparent;
}

.v-button--purple:hover:not(:disabled) {
  background: var(--v-purple-color-hover);
}

.v-button--purple:active:not(:disabled) {
  background: var(--v-purple-color-active);
}

/* Success variant */
.v-button--success {
  background: var(--v-success-color);
  color: var(--v-success-contrast);
  border: 1px solid transparent;
}

.v-button--success:hover:not(:disabled) {
  background: var(--v-success-color-hover);
}

.v-button--success:active:not(:disabled) {
  background: var(--v-success-color-active);
}

/* Warning variant */
.v-button--warning {
  background: var(--v-warning-color);
  color: var(--v-warning-contrast);
  border: 1px solid transparent;
}

.v-button--warning:hover:not(:disabled) {
  background: var(--v-warning-color-hover);
}

.v-button--warning:active:not(:disabled) {
  background: var(--v-warning-color-active);
}

/* Danger variant */
.v-button--danger {
  background: var(--v-danger-color);
  color: var(--v-danger-contrast);
  border: 1px solid transparent;
}

.v-button--danger:hover:not(:disabled) {
  background: var(--v-danger-color-hover);
}

.v-button--danger:active:not(:disabled) {
  background: var(--v-danger-color-active);
}

/* Sizes */
.v-button--small {
  height: 31px;
  padding: 0 12px;
  font-size: var(--v-font-size-sm);
}

.v-button--medium {
  height: 38px;
  padding: 0 16px;
  font-size: var(--v-font-size-base);
}

.v-button--large {
  height: 48px;
  padding: 0 20px;
  font-size: var(--v-font-size-lg);
}

/* States */
.v-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: var(--v-shadow-sm);
}

.v-button:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: var(--v-shadow-xs);
}

.v-button:focus-visible {
  outline: 2px solid var(--v-primary-color);
  outline-offset: 2px;
}

.v-button--block {
  width: 100%;
}

.v-button--rounded {
  border-radius: 9999px;
}

.v-button--disabled,
.v-button:disabled {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.65;
  box-shadow: none;
}

.v-button--loading {
  cursor: wait;
  pointer-events: none;
}

.v-button__content {
  transition: opacity 0.2s ease;
}

.v-button__content--loading {
  opacity: 0;
}

.v-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
}

.v-button--small .v-button__icon {
  width: 16px;
  height: 16px;
}

.v-button--large .v-button__icon {
  width: 20px;
  height: 20px;
}

.v-button__loader {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: button-spin 0.75s linear infinite;
  width: 18px;
  height: 18px;
}

.v-button--small .v-button__loader {
  width: 16px;
  height: 16px;
  border-width: 2px;
}

.v-button--large .v-button__loader {
  width: 20px;
  height: 20px;
  border-width: 3px;
}

.v-button__loading-text {
  margin-left: var(--v-spacing-2);
}

@keyframes button-spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style> 