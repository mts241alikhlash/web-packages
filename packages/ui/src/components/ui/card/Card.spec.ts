// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './index'

const classes = (w: ReturnType<typeof mount>) => w.classes()

describe('Card family', () => {
  it('keeps the old classes without props', () => {
    expect(classes(mount(Card))).toEqual(
      expect.arrayContaining(['gap-6', 'shadow-sm', 'flex', 'flex-col']),
    )
    expect(classes(mount(CardHeader))).toEqual(
      expect.arrayContaining(['grid', 'px-6', 'pt-5', 'pb-5']),
    )
    expect(classes(mount(CardTitle))).toEqual(
      expect.arrayContaining(['leading-none', 'font-semibold']),
    )
    expect(classes(mount(CardTitle))).not.toContain('text-base')
    expect(classes(mount(CardContent))).toContain('px-6')
  })

  it('removes the gap and the shadow on request', () => {
    const c = classes(mount(Card, { props: { gap: 'none', variant: 'flat' } }))
    expect(c).not.toContain('gap-6')
    expect(c).not.toContain('shadow-sm')
    expect(c).toContain('bg-muted')
    expect(c).not.toContain('bg-card')
  })

  it('lets a caller class win over the gap prop without duplicates', () => {
    const c = classes(mount(Card, { props: { class: 'gap-2' } }))
    expect(c).toContain('gap-2')
    expect(c).not.toContain('gap-6')
  })

  it('uses the standard header', () => {
    const c = classes(mount(CardHeader, { props: { standard: true } }))
    expect(c).toEqual(
      expect.arrayContaining([
        'flex',
        'min-h-[52px]',
        'items-center',
        'justify-between',
        'border-b',
        'px-4',
        'py-3',
        'sm:px-6',
        'bg-muted/30',
      ]),
    )
    expect(c).not.toContain('grid')
  })

  it('keeps the old footer without props', () => {
    const c = classes(mount(CardFooter))
    expect(c).toEqual(expect.arrayContaining(['flex', 'items-center', 'px-6']))
    expect(c).not.toContain('bg-muted/30')
  })

  it('uses the standard footer with the same tint as the header', () => {
    const c = classes(mount(CardFooter, { props: { standard: true } }))
    expect(c).toEqual(
      expect.arrayContaining([
        'flex',
        'items-center',
        'justify-end',
        'gap-2',
        'border-t',
        'bg-muted/30',
        'px-4',
        'py-3',
        'sm:px-6',
      ]),
    )
  })

  it('sizes the title', () => {
    expect(classes(mount(CardTitle, { props: { size: 'md' } }))).toContain('text-base')
    expect(classes(mount(CardTitle, { props: { size: 'lg' } }))).toContain('text-xl')
  })

  it('pads the content by variant', () => {
    expect(classes(mount(CardContent, { props: { variant: 'standard' } }))).toEqual(
      expect.arrayContaining(['p-4', 'sm:p-6']),
    )
    expect(classes(mount(CardContent, { props: { variant: 'flush' } }))).toContain('p-0')
  })
})
