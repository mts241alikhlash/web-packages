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
    data-slot="card-header"
    :class="
      cn(
        props.standard
          ? 'flex min-h-[52px] flex-row items-center justify-between gap-3 border-b bg-muted/30 px-4 py-3 sm:px-6'
          : '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-5 pb-5 has-data-[slot=card-action]:grid-cols-[1fr_auto]',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
