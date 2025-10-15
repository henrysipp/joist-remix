import type { Remix } from '@remix-run/dom'

import { routes } from '../routes.ts'

export function Document({
  title = 'Joist TS Sample',
  children,
}: {
  title?: string
  children?: Remix.RemixNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        {/* <script type="module" async src={routes.assets.href({ path: 'entry.js' })} /> */}
      </head>
      <body>{children}</body>
    </html>
  )
}

export function Layout({ children }: { children?: Remix.RemixNode }) {
  return (
    <Document>
      <header></header>
      <main>
        <div className="p-8">{children}</div>
      </main>
      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Joist TS Sample. Built with Remix.</p>
        </div>
      </footer>
    </Document>
  )
}