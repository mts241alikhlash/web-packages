<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@mts241alikhlash/ui/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  standard?: boolean
}>()
</script>

<template>
  <div
    data-slot="card-footer"
    :class="
      cn(
        props.standard
          ? 'flex items-center justify-end gap-2 border-t bg-muted/30 px-4 py-3 sm:px-6'
          : 'flex items-center px-6 [.border-t]:pt-6',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
