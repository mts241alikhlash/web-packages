// @vitest-environment happy-dom
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import type { ColumnDef } from '@tanstack/vue-table'
import DataTable from './DataTable.vue'

interface Row {
  id: string
  name: string
}

const columns: ColumnDef<object, unknown>[] = [
  { id: 'select', header: 'Pilih', cell: () => 'x', size: 40 },
  { accessorKey: 'name', header: 'Nama' },
  { id: 'status', header: 'Status', cell: () => 's', size: 120 },
  { id: 'actions', header: 'Aksi', cell: () => 'a', size: 60 },
]
const data: Row[] = [{ id: '1', name: 'Ahmad' }]

const headers = (w: ReturnType<typeof mount>) =>
  Object.fromEntries(
    w.findAll('th').map((th) => [th.text(), th]),
  ) as Record<string, ReturnType<typeof w.get>>

describe('DataTable pinned columns', () => {
  it('pins only actions to the right by default', () => {
    const th = headers(mount(DataTable, { props: { columns, data } }))
    expect(th['Aksi']!.classes()).toEqual(
      expect.arrayContaining(['sticky', 'border-l']),
    )
    expect((th['Aksi']!.element as HTMLElement).style.right).toBe('0px')
    expect((th['Aksi']!.element as HTMLElement).style.width).toBe('')
    expect(th['Status']!.classes()).not.toContain('sticky')
    expect(th['Pilih']!.classes()).not.toContain('sticky')
  })

  it('pins left and several right columns without overlap', () => {
    const w = mount(DataTable, {
      props: {
        columns,
        data,
        pinnedColumns: { left: ['select'], right: ['status', 'actions'] },
      },
    })
    const th = headers(w)
    const style = (key: string) => (th[key]!.element as HTMLElement).style
    expect(style('Pilih').left).toBe('0px')
    expect(style('Aksi').right).toBe('0px')
    expect(style('Status').right).toBe('60px')
    expect(style('Status').width).toBe('120px')
    expect(th['Pilih']!.classes()).toContain('border-r')
    expect(th['Status']!.classes()).toContain('border-l')
    expect(th['Aksi']!.classes()).not.toContain('border-l')
    expect(th['Nama']!.classes()).not.toContain('sticky')
  })

  it('applies the same pins to body cells', () => {
    const w = mount(DataTable, {
      props: {
        columns,
        data,
        pinnedColumns: { left: ['select'], right: ['status', 'actions'] },
      },
    })
    const cells = w.findAll('td')
    expect((cells[0]!.element as HTMLElement).style.left).toBe('0px')
    expect((cells[2]!.element as HTMLElement).style.right).toBe('60px')
    expect((cells[3]!.element as HTMLElement).style.right).toBe('0px')
    expect(cells[1]!.classes()).not.toContain('sticky')
  })
})
