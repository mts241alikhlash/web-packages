// @vitest-environment happy-dom
import { afterEach, describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './index'

function mountTabs(props: Record<string, unknown> = {}, listClass?: string) {
  return mount(
    defineComponent({
      render: () =>
        h(
          Tabs,
          { defaultValue: 'a', ...props },
          {
            default: () => [
              h(TabsList, { class: listClass }, () => [
                h(TabsTrigger, { value: 'a' }, () => 'A'),
                h(TabsTrigger, { value: 'b' }, () => 'B'),
              ]),
              h(TabsContent, { value: 'a' }, () => 'Isi A'),
              h(TabsContent, { value: 'b' }, () => 'Isi B'),
            ],
          },
        ),
    }),
    { attachTo: document.body },
  )
}

const list = (wrapper: ReturnType<typeof mountTabs>) =>
  wrapper.get('[data-slot="tabs-list"]')
const triggers = (wrapper: ReturnType<typeof mountTabs>) =>
  wrapper.findAll('[data-slot="tabs-trigger"]')

describe('Tabs variants', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('keeps the pill style when no variant is given', () => {
    const wrapper = mountTabs()

    expect(list(wrapper).classes()).toEqual(
      expect.arrayContaining(['bg-muted', 'rounded-lg', 'h-9']),
    )
    expect(list(wrapper).classes()).not.toContain('border-b')
    expect(triggers(wrapper)[0].classes()).toContain(
      'data-[state=active]:bg-background',
    )
    wrapper.unmount()
  })

  it('keeps the pill style for variant="default"', () => {
    const wrapper = mountTabs({ variant: 'default' })

    expect(list(wrapper).classes()).toContain('bg-muted')
    wrapper.unmount()
  })

  it('draws a thin bottom border and a thick active underline for variant="line"', () => {
    const wrapper = mountTabs({ variant: 'line' })

    expect(list(wrapper).classes()).toEqual(
      expect.arrayContaining(['border-b', 'bg-transparent', 'overflow-x-auto']),
    )
    expect(list(wrapper).classes()).not.toContain('bg-muted')
    for (const trigger of triggers(wrapper)) {
      expect(trigger.classes()).toEqual(
        expect.arrayContaining([
          'border-b-2',
          'min-h-11',
          'data-[state=active]:border-primary',
          'data-[state=active]:bg-transparent',
        ]),
      )
      expect(trigger.classes()).not.toContain(
        'data-[state=active]:bg-background',
      )
    }
    wrapper.unmount()
  })

  it('draws the focus ring inside the trigger so the list does not clip it in the line variant', () => {
    const wrapper = mountTabs({ variant: 'line' })

    for (const trigger of triggers(wrapper)) {
      expect(trigger.classes()).toEqual(
        expect.arrayContaining([
          'focus-visible:inset-ring-[3px]',
          'focus-visible:inset-ring-ring/50',
        ]),
      )
      expect(trigger.classes()).not.toContain('focus-visible:ring-[3px]')
    }
    wrapper.unmount()
  })

  it('keeps the exact default class strings', () => {
    const wrapper = mountTabs()

    expect(list(wrapper).attributes('class')).toBe(
      'bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]',
    )
    expect(triggers(wrapper)[0].attributes('class')).toBe(
      "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    )
    wrapper.unmount()
  })

  it('hides the scrollbar and keeps the active underline unclipped in the line variant', () => {
    const wrapper = mountTabs({ variant: 'line' })

    expect(list(wrapper).classes()).toEqual(
      expect.arrayContaining([
        '[scrollbar-width:none]',
        '[&::-webkit-scrollbar]:hidden',
      ]),
    )
    for (const trigger of triggers(wrapper)) {
      expect(trigger.classes()).not.toContain('-mb-px')
    }
    wrapper.unmount()
  })

  it('fills the container and bleeds with negative margins without w-auto', () => {
    const wrapper = mountTabs({ variant: 'line' }, '-mx-4 px-4')

    expect(list(wrapper).classes()).toContain('flex')
    expect(list(wrapper).classes()).not.toContain('inline-flex')
    expect(list(wrapper).classes()).not.toContain('w-full')
    wrapper.unmount()
  })

  it('activates a tab that receives focus in the line variant', async () => {
    const wrapper = mountTabs({ variant: 'line' })

    ;(triggers(wrapper)[1].element as HTMLElement).focus()
    await flushPromises()

    expect(triggers(wrapper)[1].attributes('data-state')).toBe('active')
    expect(wrapper.text()).toContain('Isi B')
    wrapper.unmount()
  })

  it('lets a page add classes to the list', () => {
    const wrapper = mountTabs({ variant: 'line' }, '-mx-4 px-4')

    expect(list(wrapper).classes()).toEqual(
      expect.arrayContaining(['border-b', '-mx-4', 'px-4']),
    )
    wrapper.unmount()
  })

  it('still switches tabs in the line variant', async () => {
    const wrapper = mountTabs({ variant: 'line' })

    expect(triggers(wrapper)[0].attributes('data-state')).toBe('active')
    expect(wrapper.text()).toContain('Isi A')

    await triggers(wrapper)[1].trigger('mousedown', { button: 0 })

    expect(triggers(wrapper)[1].attributes('data-state')).toBe('active')
    expect(triggers(wrapper)[0].attributes('data-state')).toBe('inactive')
    expect(wrapper.text()).toContain('Isi B')
    wrapper.unmount()
  })
})
