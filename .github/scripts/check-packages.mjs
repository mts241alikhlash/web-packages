#!/usr/bin/env node

import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

const packageDirs = process.argv.slice(2)
if (packageDirs.length === 0) throw new Error('at least one package directory is required')
const pnpm = process.platform === 'win32' ? process.env.ComSpec ?? 'cmd.exe' : 'pnpm'
const pnpmArgs = process.platform === 'win32'
  ? ['/d', '/s', '/c', 'pnpm.cmd pack --dry-run --json']
  : ['pack', '--dry-run', '--json']

function anyFileEndsWith(directory, suffix) {
  return readdirSync(directory, { withFileTypes: true }).some((entry) => {
    const full = path.join(directory, entry.name)
    if (entry.isDirectory()) return anyFileEndsWith(full, suffix)
    return full.endsWith(suffix)
  })
}

function checkExport(value, packageDir, label) {
  if (typeof value === 'string') {
    const target = value.replace(/^\.\//, '')
    if (!target.includes('*')) {
      assert.ok(existsSync(path.join(packageDir, target)), `${label} target missing: ${value}`)
      return
    }

    const [prefix, suffix] = target.split('*')
    const directory = path.join(packageDir, prefix)
    assert.ok(existsSync(directory), `${label} wildcard directory missing: ${prefix}`)
    if (!suffix) return
    // "/rest/of/path" means the wildcard match names a subdirectory that must
    // contain that file (e.g. "./src/components/ui/*/index.ts"). Anything
    // else (e.g. ".ts") is a suffix appended straight onto the matched path,
    // which may span nested subdirectories, so search recursively instead.
    const found = suffix.startsWith('/')
      ? readdirSync(directory, { withFileTypes: true }).some((entry) =>
          existsSync(path.join(directory, entry.name, suffix)),
        )
      : anyFileEndsWith(directory, suffix)
    assert.ok(found, `${label} wildcard target missing: ${value}`)
    return
  }

  assert.equal(typeof value, 'object', `${label} must be a string or condition map`)
  for (const [condition, target] of Object.entries(value)) {
    checkExport(target, packageDir, `${label}.${condition}`)
  }
}

for (const packageDir of packageDirs) {
  const manifest = JSON.parse(
    readFileSync(path.join(packageDir, 'package.json'), 'utf8'),
  )
  const packed = JSON.parse(
    execFileSync(pnpm, pnpmArgs, {
      cwd: packageDir,
      encoding: 'utf8',
    }),
  )
  const report = Array.isArray(packed) ? packed[0] : packed

  assert.equal(typeof manifest.exports, 'object', `${manifest.name} needs exports`)
  assert.ok(existsSync(path.join(packageDir, 'src', 'index.ts')))
  for (const [subpath, target] of Object.entries(manifest.exports)) {
    checkExport(target, packageDir, `${manifest.name}${subpath}`)
  }

  const files = report.files.map(({ path: file }) => file)
  assert.ok(files.includes('src/index.ts'), `${manifest.name} archive lacks src/index.ts`)
  assert.ok(
    files.every((file) =>
      file === 'package.json' || file === 'README.md' || file.startsWith('src/'),
    ),
    `${manifest.name} archive contains files outside package allowlist`,
  )
  assert.ok(!files.some((file) => file.endsWith('.spec.ts')), `${manifest.name} archive contains tests`)

  console.log(`${manifest.name} pack/export check passed`)
}
