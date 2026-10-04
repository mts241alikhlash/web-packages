<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useId, provide } from 'vue'
import { cn } from '@mts241alikhlash/ui/utils'
import { FORM_ITEM_INJECTION_KEY } from './injectionKeys'

const props = withDefaults(
  defineProps<{
    label: string
    required?: boolean
    floating?: boolean
    hideLabel?: boolean
    error?: string
    for?: string
    class?: HTMLAttributes['class']
  }>(),
  {
    required: false,
    floating: false,
    hideLabel: false,
  },
)

const id = useId()
provide(FORM_ITEM_INJECTION_KEY, id)
</script>

<template>
  <div
    data-slot="form-item"
    :class="
      cn(
        'ff relative grid gap-1 pt-5',
        !props.floating && 'ff-empty',
        props.error && 'ff-error',
        props.class,
      )
    "
  >
    <label
      v-if="!props.hideLabel"
      data-slot="ff-label"
      :for="props.for ?? `${id}-form-item`"
      :title="props.error || undefined"
    >
      {{ props.error || props.label }}
      <span
        v-if="props.required && !props.error"
        class="text-destructive"
        >*</span
      >
    </label>
    <slot />
  </div>
</template>

<style scoped>
.ff :deep([data-slot='ff-label']) {
  position: absolute;
  left: calc(0.375rem + 1px);
  top: 1.25rem;
  z-index: 1;
  transform: translateY(-50%);
  padding-inline: 0.375rem;
  background-color: var(--ff-label-bg, var(--background));
  font-size: 0.6875rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: color-mix(in oklab, var(--foreground) 70%, transparent);
  pointer-events: none;
  transition:
    top 150ms ease,
    font-size 150ms ease,
    color 150ms ease;
}

.ff.ff-empty:not(.ff-error):not(:focus-within) :deep([data-slot='ff-label']) {
  top: 2.5rem;
  font-size: 0.875rem;
  color: var(--muted-foreground);
}

.ff:focus-within :deep([data-slot='ff-label']) {
  color: var(--primary);
}

.ff:has([aria-invalid='true']) :deep([data-slot='ff-label']) {
  color: var(--destructive);
}

.ff.ff-error :deep([data-slot='ff-label']) {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ff.ff-error :deep(input, textarea, [data-slot='select-trigger']) {
  border-color: var(--destructive);
}
</style>
