<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '@mts241alikhlash/ui/utils'
import { useFormField } from './useFormField'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

const { formDescriptionId } = useFormField()
</script>

<template>
  <p
    :id="formDescriptionId"
    data-slot="form-description"
    :class="cn('text-muted-foreground text-[length:var(--text-control,0.75rem)]', props.class)"
  >
    <slot />
  </p>
</template>
