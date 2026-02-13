import { Alex_Brush } from "next/font/google"
import Image from "next/image"
import clsx from "clsx"
import type { Metadata } from "next"
import { ShootingStars } from "@/components/ui/shooting-stars"
import { StarsBackground } from "@/components/ui/stars-background"

const font = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: "400",
})

export const dynamic = "force-static"
export const revalidate = 30

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Bakım - Kanatlı Gençlik",
    description: "Kanatlı Gençlik dijital platformu yenileniyor. Çok yakında yenilenen yüzümüzle yeniden buradayız.",
  }
}

export default function Bakim() {
  return (
    <div className="relative min-h-screen w-full bg-black flex items-center justify-center">
      {/* Stars background */}
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

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-10">
          {/* Logo */}
          <div>
            <Image
              src="/images/kg-logo.png"
              alt="Kanatlı Gençlik Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          {/* Title */}
          <div className="flex flex-col items-center gap-3 text-center">
            <h1 className={clsx("text-5xl sm:text-6xl text-white font-medium italic transform -rotate-6", font.className)}>
              Kanatlı Gençlik
            </h1>
            <p className="text-slate-9 text-sm font-medium tracking-tight mt-2">
              Web Teknolojileri Geliştirme Ekibi olarak;
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-7 to-transparent" />

          {/* Content */}
          <div className="flex flex-col gap-6 text-center">
            <p className="text-slate-11 leading-[1.8] tracking-tight text-pretty">
              Uzun süredir üzerinde çalıştığımız yeni dijital platformumuzu sizlerle buluşturmaya hazırlanıyoruz.
            </p>

            <p className="text-slate-11 leading-[1.8] tracking-tight text-pretty">
              Havacılığa dair güvenilir içerikler ve gelişmelerle; bilgi kirliliğinin önüne geçmeyi, genç
              zihinlere ilham olmayı ve gökyüzüne uzanan hayalleri hedeflere dönüştürmeyi amaçlıyoruz.
            </p>

            <p className="text-slate-10 text-sm leading-[1.7] tracking-tight mt-2">
              Bu dönüşüm sürecinde platformumuz kısa süreli olarak bakım modundadır.
            </p>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-7 to-transparent" />

          {/* Footer */}
          <div className="flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-7/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-slate-10 font-medium tracking-tight">Bakım Modu</span>
            </div>
            <p className="text-white text-sm font-medium tracking-tight mt-1">
              Çok yakında yenilenen yüzümüzle yeniden buradayız.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
