import type React from "react"
import { Header } from "@/components/header"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
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
  )
}
