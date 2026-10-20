// @vitest-environment happy-dom
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Alert, AlertDescription } from './alert'
import { Progress } from './progress'
import { Separator } from './separator'
import { Skeleton } from './skeleton'
import { Table } from './table'
import { Tabs, TabsList, TabsTrigger } from './tabs'
import { h } from 'vue'

const text = 'text-[length:var(--text-control,0.75rem)]'

function tabs(variant?: 'line') {
  return mount(Tabs, {
    props: { defaultValue: 'a', variant },
    slots: {
      default: () => [
        h(TabsList, null, () => h(TabsTrigger, { value: 'a' }, () => 'A')),
      ],
    },
  })
}


describe('tabs', () => {
  it('default list is a 32px rounded-lg strip with p-0.75', () => {
    const c = tabs().get('[data-slot=tabs-list]').classes()
    expect(c).toContain('h-[var(--control-h-lg,2rem)]')
    expect(c).toContain('rounded-lg')
    expect(c).toContain('p-0.75')
  })

  it('default trigger uses the control text token and tighter padding', () => {
    const c = tabs().get('[data-slot=tabs-trigger]').classes()
    expect(c).toContain(text)
    expect(c).toContain('px-1.5')
    expect(c).toContain('py-0.5')
  })

  it('line trigger keeps the 44px touch height and the underline', () => {
    const c = tabs('line').get('[data-slot=tabs-trigger]').classes()
    expect(c).toContain('min-h-11')
    expect(c).toContain('data-[state=active]:border-primary')
    expect(c).toContain(text)
  })
})

describe('surfaces', () => {
  it('table text follows the control token', () => {
    expect(mount(Table).get('table').classes()).toContain(text)
  })

  it('alert is compact', () => {
    const c = mount(Alert).classes()
    expect(c).toContain('px-2')
    expect(c).toContain('py-1.5')
    expect(c).toContain(text)
    expect(mount(AlertDescription).classes()).toContain(text)
  })

  it('progress track is the thin muted bar', () => {
    const c = mount(Progress, { props: { modelValue: 40 } }).classes()
    expect(c).toContain('bg-muted')
    expect(c).toContain('h-1')
  })

  it('skeleton is muted', () => {
    expect(mount(Skeleton).classes()).toContain('bg-muted')
  })

  it('vertical separator stretches', () => {
    const c = mount(Separator, { props: { orientation: 'vertical' } }).classes()
    expect(c).toContain('data-[orientation=vertical]:self-stretch')
  })
})
