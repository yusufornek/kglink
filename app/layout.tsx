import type React from "react"
import type { Viewport } from "next"
import { Geist } from "next/font/google"
import { Providers } from "@/context"
import { Header } from "@/components/header"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"
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
  maximumScale: 1, // Disable auto-zoom on mobile Safari
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Varsayılan tema ayarları
  const defaultTheme = "system"
  const forcedTheme = null

  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased max-w-screen min-h-svh bg-slate-1 text-slate-12`}>
        <Providers defaultTheme={defaultTheme} forcedTheme={forcedTheme}>
          <div className="relative min-h-screen w-full bg-black">
            {/* Stars background - shooting stars ve stars */}
            <div className="absolute inset-0 z-0">
              <ShootingStars 
                minDelay={100}
                maxDelay={400}
                starColor="#ffffff"
                trailColor="#cccccc"
                minSpeed={15}
                maxSpeed={35}
              />
              <StarsBackground 
                starDensity={0.0005}
                allStarsTwinkle={true}
                twinkleProbability={0.9}
                minTwinkleSpeed={0.3}
                maxTwinkleSpeed={1.2}
              />
            </div>
            
            {/* Scrollable content */}
            <div className="relative z-10 min-h-screen">
              <div className="max-w-screen-sm mx-auto w-full flex flex-col min-h-screen">
                <div className="px-5 gap-8 flex flex-col flex-1 py-[12vh]">
                  <Header />
                  <main className="flex justify-center">{children}</main>
                </div>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
