<script setup lang="ts">
import type { TabsListProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { computed, inject } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { TabsList } from 'reka-ui'
import { cn } from '@mts241alikhlash/ui/utils'
import { tabsVariantKey, type TabsVariant } from './variant'

const props = defineProps<TabsListProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')

const variant = inject(
  tabsVariantKey,
  computed<TabsVariant>(() => 'default'),
)

const LIST_CLASSES: Record<TabsVariant, string> = {
  default:
    'bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]',
  line: 'text-muted-foreground flex h-auto items-center justify-start gap-0 overflow-x-auto overflow-y-hidden rounded-none border-b bg-transparent p-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
}
</script>

<template>
  <TabsList
    data-slot="tabs-list"
    v-bind="delegatedProps"
    :class="cn(LIST_CLASSES[variant], props.class)"
  >
    <slot />
  </TabsList>
</template>
