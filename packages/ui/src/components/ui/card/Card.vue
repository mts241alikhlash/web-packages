<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@mts241alikhlash/ui/utils'

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    variant?: 'default' | 'flat'
    gap?: 'default' | 'none'
  }>(),
  { variant: 'default', gap: 'default' },
)
</script>

<template>
  <div
    data-slot="card"
    :class="
      cn(
        'bg-card text-card-foreground flex flex-col rounded-xl border py-0 shadow-sm [--ff-label-bg:var(--card)]',
        props.gap === 'default' && 'gap-6',
        props.variant === 'flat' &&
          'bg-muted shadow-none [--ff-label-bg:var(--muted)]',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
