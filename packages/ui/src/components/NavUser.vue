<script setup lang="ts">
import { ChevronsUpDown, KeyRound, LogOut, UserRound } from '@lucide/vue'
import { computed } from 'vue'

import { Avatar, AvatarFallback, AvatarImage } from '@mts241alikhlash/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@mts241alikhlash/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@mts241alikhlash/ui/sidebar'

const props = defineProps<{
  user: {
    name: string
    email: string
    avatar: string
  }
  compact?: boolean
}>()

const emit = defineEmits<{
  viewProfile: []
  changePassword: []
  logout: []
}>()

const { isMobile } = useSidebar()

const initials = computed(() => {
  return (
    props.user.name
      .split(' ')
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase() || '?'
  )
})
</script>

<template>
  <component :is="compact ? 'div' : SidebarMenu">
    <component :is="compact ? 'div' : SidebarMenuItem">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <button
            v-if="compact"
            type="button"
            class="ring-ring rounded-full outline-hidden focus-visible:ring-2"
          >
            <Avatar class="size-8">
              <AvatarImage
                :src="user.avatar"
                :alt="user.name"
              />
              <AvatarFallback class="bg-muted">
                {{ initials }}
              </AvatarFallback>
            </Avatar>
            <span class="sr-only">{{ user.name }}</span>
          </button>
          <SidebarMenuButton
            v-else
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Avatar class="h-8 w-8 rounded-lg">
              <AvatarImage
                :src="user.avatar"
                :alt="user.name"
              />
              <AvatarFallback class="rounded-lg bg-muted">
                {{ initials }}
              </AvatarFallback>
            </Avatar>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-medium">{{ user.name }}</span>
              <span
                class="truncate text-xs text-muted-foreground in-[[data-sidebar=menu-button]:hover]:text-sidebar-accent-foreground in-[[data-sidebar=menu-button][data-state=open]]:text-sidebar-accent-foreground"
                >{{ user.email }}</span
              >
            </div>
            <ChevronsUpDown class="ml-auto size-4 text-muted-foreground" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg"
          :side="isMobile || compact ? 'bottom' : 'right'"
          align="end"
          :side-offset="4"
        >
          <DropdownMenuLabel class="font-normal">
            <div
              class="mt-2 flex items-center gap-2 px-1 py-1 text-left text-sm"
            >
              <Avatar class="h-8 w-8 rounded-lg">
                <AvatarImage
                  :src="user.avatar"
                  :alt="user.name"
                />
                <AvatarFallback class="rounded-lg">
                  {{ initials }}
                </AvatarFallback>
              </Avatar>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">{{ user.name }}</span>
                <span class="truncate text-xs">{{ user.email }}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem @click="emit('viewProfile')">
              <UserRound />
              Lihat Profil
            </DropdownMenuItem>
            <DropdownMenuItem @click="emit('changePassword')">
              <KeyRound />
              Ganti Password
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            variant="destructive"
            @click="emit('logout')"
          >
            <LogOut />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </component>
  </component>
</template>
