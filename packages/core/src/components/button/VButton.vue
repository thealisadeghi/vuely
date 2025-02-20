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
    :style="buttonStyles"
    @click="handleClick"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    @mouseleave="handleMouseLeave"
  >
    <span v-if="loading" class="v-button__loader" :style="loaderStyles"></span>
    <span v-else-if="$slots.icon" class="v-button__icon" :style="iconStyles">
      <slot name="icon" />
    </span>
    <span v-if="$slots.default" class="v-button__content" :class="{ 'v-button__content--loading': loading }">
      <slot />
    </span>
    <span v-if="!loading && $slots['icon-right']" class="v-button__icon" :style="iconStyles">
      <slot name="icon-right" />
    </span>
    <span v-if="loading && loadingText" class="v-button__loading-text">{{ loadingText }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { ButtonType, Size } from '../../types';
import { useComponentTheme, defaultButtonTheme } from '../../composables/useComponentTheme';

const props = withDefaults(defineProps<{
  type?: ButtonType;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  block?: boolean;
  rounded?: boolean;
  theme?: typeof defaultButtonTheme;
}>(), {
  type: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  block: false,
  rounded: false,
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const isActive = ref(false);
const { getThemeStyles } = useComponentTheme(props.theme);

const themeStyles = computed(() => {
  const variant = getThemeStyles.value.variants[props.type];
  const size = getThemeStyles.value.sizes[props.size];
  return { variant, size };
});

const buttonStyles = computed(() => {
  const { variant, size } = themeStyles.value;
  const styles: Record<string, string> = {
    height: size.height,
    padding: size.padding,
    fontSize: size.fontSize,
    background: variant.background,
    color: variant.color,
  };

  if (variant.border) {
    styles.border = variant.border;
  }

  if (isActive.value && !props.disabled && !props.loading) {
    if (variant.activeBackground) styles.background = variant.activeBackground;
    if (variant.activeColor) styles.color = variant.activeColor;
    if (variant.activeBorder) styles.border = variant.activeBorder;
  }

  if (props.disabled || props.loading) {
    styles.opacity = '0.6';
    if (variant.disabledBackground) styles.background = variant.disabledBackground;
    if (variant.disabledColor) styles.color = variant.disabledColor;
    if (variant.disabledBorder) styles.border = variant.disabledBorder;
  }

  return styles;
});

const iconStyles = computed(() => ({
  width: themeStyles.value.size.iconSize,
  height: themeStyles.value.size.iconSize,
}));

const loaderStyles = computed(() => ({
  width: themeStyles.value.size.iconSize,
  height: themeStyles.value.size.iconSize,
  borderWidth: props.size === 'small' ? '2px' : '3px',
}));

const handleClick = (event: MouseEvent) => {
  if (!props.loading && !props.disabled) {
    emit('click', event);
  }
};

const handleMouseDown = () => {
  if (!props.loading && !props.disabled) {
    isActive.value = true;
  }
};

const handleMouseUp = () => {
  isActive.value = false;
};

const handleMouseLeave = () => {
  isActive.value = false;
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
  box-shadow: var(--v-shadow-sm);
}

.v-button:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: var(--v-shadow-md);
}

.v-button:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: var(--v-shadow-sm);
}

.v-button:focus-visible {
  box-shadow: 0 0 0 2px var(--v-primary-color-10);
}

.v-button--block {
  width: 100%;
}

.v-button--rounded {
  border-radius: 9999px;
}

.v-button--disabled {
  cursor: not-allowed;
  opacity: 0.6;
  box-shadow: none !important;
}

.v-button--loading {
  cursor: wait;
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