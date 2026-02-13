import type React from "react"
import type { Viewport } from "next"
import { Geist } from "next/font/google"
import { Providers } from "@/context"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: true,
})

export const dynamic = "force-static"
export const revalidate = 30

export const metadata = {
  title: "Kanatlı Gençlik",
  description: "Kanatlı Gençlik - Havacılık tutkusu ve teknoloji sevgisiyle hareket eden gençlik topluluğu",
  icons: {
    icon: "/images/kg-logo.png",
    apple: "/images/kg-logo.png",
    shortcut: "/images/kg-logo.png",
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const defaultTheme = "system"
  const forcedTheme = null

  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased max-w-screen min-h-svh bg-slate-1 text-slate-12`}>
        <Providers defaultTheme={defaultTheme} forcedTheme={forcedTheme}>
          {children}
        </Providers>
      </body>
    </html>
  )
}
