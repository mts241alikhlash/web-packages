<script setup lang="ts">
import type { TabsTriggerProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { computed, inject } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { TabsTrigger, useForwardProps } from 'reka-ui'
import { cn } from '@mts241alikhlash/ui/utils'
import { tabsVariantKey, type TabsVariant } from './variant'

const props = defineProps<
  TabsTriggerProps & { class?: HTMLAttributes['class'] }
>()

const delegatedProps = reactiveOmit(props, 'class')

const forwardedProps = useForwardProps(delegatedProps)

const variant = inject(
  tabsVariantKey,
  computed<TabsVariant>(() => 'default'),
)

const TRIGGER_CLASSES: Record<TabsVariant, string> = {
  default:
    "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  line: "text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 focus-visible:outline-ring relative -mb-px inline-flex min-h-11 flex-none items-center justify-center gap-1.5 rounded-none border-0 border-b-2 border-transparent bg-transparent px-3 py-2 text-sm font-medium whitespace-nowrap shadow-none transition-colors focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none dark:data-[state=active]:border-primary dark:data-[state=active]:bg-transparent [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
}
</script>

<template>
  <TabsTrigger
    data-slot="tabs-trigger"
    :class="cn(TRIGGER_CLASSES[variant], props.class)"
    v-bind="forwardedProps"
  >
    <slot />
  </TabsTrigger>
</template>
