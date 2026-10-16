<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@mts241alikhlash/ui/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  size?: 'md' | 'lg'
}>()
</script>

<template>
  <h3
    data-slot="card-title"
    :class="
      cn(
        'leading-none font-semibold',
        props.size === 'md' && 'text-base',
        props.size === 'lg' && 'text-xl',
        props.class,
      )
    "
  >
    <slot />
  </h3>
</template>
