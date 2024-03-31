import { LinksFunction } from "@remix-run/cloudflare"
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"

import appStyles from "~/styles/app.css?url"
import iconsStyles from "~/styles/icons.css?url"

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  // @ts-expect-error: crossOrigin "" is not in the type definition
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap",
  },
  { rel: "stylesheet", href: appStyles },
  { rel: "stylesheet", href: iconsStyles },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-black text-white">
        {children}
        <span className="icon-arrow-down absolute top-0 opacity-0"></span>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
