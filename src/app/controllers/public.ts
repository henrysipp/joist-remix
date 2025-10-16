import * as path from 'node:path'
import * as fs from 'node:fs'
import type { InferRouteHandler } from '@remix-run/fetch-router'

import { routes } from '../../routes.ts'

const publicDir = path.join(import.meta.dirname, '..', '..', 'public')
const publicAssetsDir = path.join(publicDir, 'assets')
const publicImagesDir = path.join(publicDir, 'images')

export let assets: InferRouteHandler<typeof routes.assets> = async ({ params }) => {
  console.log(path.join(publicAssetsDir, params.path))
  return serveFile(path.join(publicAssetsDir, params.path))
}

// export let images: InferRouteHandler<typeof routes.images> = async ({ params }) => {
//   return serveFile(path.join(publicImagesDir, params.path))
// }

function serveFile(filename: string): Response {
  try {
    const content = fs.readFileSync(filename)
    const contentType = getContentType(filename)

    return new Response(content, {
      headers: {
        'Cache-Control': 'no-store, must-revalidate',
        'Content-Type': contentType,
      },
    })
  } catch (error) {
    if (isNoEntityError(error)) {
      return new Response('Not found', { status: 404 })
    }

    throw error
  }
}

function getContentType(filename: string): string {
  const ext = path.extname(filename).toLowerCase()
  const mimeTypes: Record<string, string> = {
    '.js': 'application/javascript',
    '.mjs': 'application/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.html': 'text/html',
    '.map': 'application/json',
  }
  return mimeTypes[ext] || 'application/octet-stream'
}

function isNoEntityError(error: unknown): error is NodeJS.ErrnoException & { code: 'ENOENT' } {
  return error instanceof Error && 'code' in error && error.code === 'ENOENT'
}