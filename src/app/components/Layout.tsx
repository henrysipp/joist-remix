import type { Remix } from "@remix-run/dom";
import { routes } from "src/routes";

export function Document({ title = "Joist TS Sample", children }: { title?: string; children?: Remix.RemixNode }) {
  return (
    <html lang="en" class="wa-cloak">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="https://early.webawesome.com/webawesome@3.0.0-beta.6/dist/styles/webawesome.css" />
        <script
          type="module"
          src="https://early.webawesome.com/webawesome@3.0.0-beta.6/dist/webawesome.loader.js"
        ></script>
        {/* <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script> */}
        {/* <script type="module" async src={routes.assets.href({ path: 'entry.js' })} /> */}
      </head>
      <body>{children}</body>
    </html>
  );
}

export function Layout({ children }: { children?: Remix.RemixNode }) {
  return (
    <Document>
      <wa-page>
        <header slot="header"> 
          <div class="wa-cluster">
            <a href={routes.home.index.href()} class="wa-button">Home</a>
            <a href={routes.authors.index.href()} class="wa-button">Authors</a>
          </div>
        </header>
        {/* <div slot="navigation">Navigation sidebar</div> */}
        <main>
          <div>{children}</div>
        </main>
        <footer slot="footer">
          <p>&copy; {new Date().getFullYear()} Joist TS Sample. Built with Remix.</p>
        </footer>
      </wa-page>
    </Document>
  );
}
