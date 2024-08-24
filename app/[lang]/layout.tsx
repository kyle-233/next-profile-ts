import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "../globals.css"
import { absoluteUrl, cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { SiteHeader } from "@/components/layouts/site-header"
import { dir } from "i18next"
import { siteConfig } from "@/config/site"

const font = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
  },
  manifest: absoluteUrl("/site.webmanifest"),
}

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode
  params: {
    lang: string
  }
}>) {
  return (
    <html lang={lang} dir={dir(lang)} suppressHydrationWarning>
      <body className={cn("tracking-wide", font.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
