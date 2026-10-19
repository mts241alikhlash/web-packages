# @mts241alikhlash/ui

Canonical source from the latest `admission-web/packages/ui`. App-specific
feature code stays in each web repository.

## Card, tab dan aksi tabel

| Bagian | Aturan |
| --- | --- |
| `Card` | `gap="none"` menghapus celah bawaan; `variant="flat"` untuk card di dalam card |
| `CardHeader` | `standard`: tinggi minimum 52 px, garis bawah, latar `bg-muted/30`, aksi utama di kanan |
| `CardFooter` | `standard`: aksi form rata kanan, garis atas, latar `bg-muted/30` sama dengan header |
| `CardTitle` | `size="md"` 16 px untuk card, `size="lg"` 20 px untuk judul halaman |
| `CardContent` | `variant="standard"` untuk isi, `variant="flush"` untuk tabel |
| `CardTabs` | tab bergaris dalam card (bar tab berlatar sama dengan header); `start="field"` bila isi pertama field (20 px), `start="block"` bila lain (16 px) |
| Aksi baris | satu aksi: tombol langsung; dua aksi atau lebih: `ActionCell` (aksi khusus lewat prop `items`); tanpa menu "Lihat" untuk berkas yang sudah tertaut di baris |
| Nama berkas | `AttachmentName`, tanpa `truncate` atau `max-w`; nama bawaan dari `formatAttachmentName` di `@mts241alikhlash/web-shared` |
| Linimasa | `HorizontalStepper` |

`check-card-overrides <dir>` menampilkan `Card`, `CardHeader`, `CardFooter` dan `CardTitle` yang masih menimpa `gap-0`, `py-0`, ukuran font, atau (khusus header dan footer) warna latar lewat `class`.

## DataTable: kolom yang menempel

`pinnedColumns` (`{ left?: string[]; right?: string[] }`) menempelkan kolom ke tepi tabel saat digulir. Tanpa prop ini hanya kolom `actions` menempel di kanan. Dengan prop ini setiap kolom yang menempel mengambil lebar dari `size` pada `ColumnDef`, jadi isi `size` untuk kolom `select`, `status`, dan `actions`.
