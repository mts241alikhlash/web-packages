// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import {
  SidebarInset,
  SidebarMenuSub,
  SidebarMenuSubButton,
  sidebarMenuButtonVariants,
} from './index'

describe('sidebar items', () => {
  it('menu button is muted until active', () => {
    const c = sidebarMenuButtonVariants()
    expect(c).toContain('text-muted-foreground')
    expect(c).toContain('data-[active=true]:text-sidebar-accent-foreground')
    expect(c).toContain('data-[active=true]:bg-sidebar-accent')
    expect(c).toContain('data-[active=true]:font-medium')
    expect(c).toContain('hover:text-sidebar-accent-foreground')
    expect(c).not.toMatch(/(^| )text-sidebar-foreground/)
  })

  it('sub button is muted until active', () => {
    const w = mount(SidebarMenuSubButton)
    expect(w.classes()).toEqual(
      expect.arrayContaining(['text-muted-foreground', 'h-7', 'rounded-md']),
    )
    expect(w.classes().join(' ')).toContain('data-[active=true]:font-medium')
    const active = mount(SidebarMenuSubButton, { props: { isActive: true } })
    expect(active.attributes('data-active')).toBe('true')
  })
})

describe('sidebar inset', () => {
  it('inset is a bordered 12px card', () => {
    const c = mount(SidebarInset).classes().join(' ')
    expect(c).toContain('md:peer-data-[variant=inset]:rounded-[12px]')
    expect(c).toContain('md:peer-data-[variant=inset]:border')
    expect(c).toContain('md:peer-data-[variant=inset]:border-sidebar-border')
    expect(c).toContain('md:peer-data-[variant=inset]:shadow-xs')
    expect(c).not.toContain('peer-data-[variant=inset]:rounded-xl')
  })

  it('sub menu keeps the 4px gap and left rule', () => {
    expect(mount(SidebarMenuSub).classes()).toEqual(
      expect.arrayContaining(['gap-1', 'border-l', 'border-sidebar-border', 'py-0.5']),
    )
  })
})
