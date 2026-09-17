<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@mts241alikhlash/ui/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    data-slot="card"
    :class="
      cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-0 shadow-sm [--ff-label-bg:var(--card)]',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
