// @vitest-environment happy-dom
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AppCombobox from './AppCombobox.vue'
import BackButton from './BackButton.vue'
import DatePicker from './DatePicker.vue'
import SearchInput from './SearchInput.vue'

const md = 'h-[var(--control-h-md,1.75rem)]'

const source = (name: string) =>
  readFileSync(fileURLToPath(new URL(name, import.meta.url)), 'utf8')

describe('custom components on the control tokens', () => {
  it('date picker trigger is a md control', () => {
    const w = mount(DatePicker, { props: { modelValue: '' } })
    expect(w.get('button').classes()).toContain(md)
    expect(w.get('button').classes()).not.toContain('h-10')
  })

  it('combobox trigger is a md control', () => {
    const w = mount(AppCombobox, { props: { options: [] } })
    expect(w.get('button').classes()).toContain(md)
    expect(w.get('button').classes()).not.toContain('h-9')
  })

  it('search input keeps the default md control height', () => {
    const w = mount(SearchInput, { props: { modelValue: '' } })
    expect(w.get('input').classes()).not.toContain('h-8')
  })

  it('back button is a md square', () => {
    const w = mount(BackButton, { props: { label: 'Kembali' } })
    expect(w.classes()).toContain('size-[var(--control-h-md,1.75rem)]')
  })

  it('floating field label rests in the middle of a md control and floats at 10px', () => {
    const css = source('./ui/form/FloatingLabelField.vue')
    expect(css).toContain('top: calc(1.25rem + var(--control-h-md, 1.75rem) / 2)')
    expect(css).toContain('font-size: var(--text-control, 0.75rem)')
    expect(css).toContain('font-size: 0.625rem')
  })
})
