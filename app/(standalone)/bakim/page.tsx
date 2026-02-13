import { Instrument_Serif } from "next/font/google"
import Image from "next/image"
import clsx from "clsx"
import type { Metadata } from "next"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
})

export const dynamic = "force-static"
export const revalidate = 30

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Kanatlı Gençlik",
    description:
      "Kanatlı Gençlik dijital platformu yenileniyor. Çok yakında yenilenen yüzümüzle yeniden buradayız.",
  }
}

export default function Bakim() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col" style={{ background: "#050508" }}>
      {/* Aurora blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Blob 1 — teal, top-right */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-[140px] opacity-[0.40]"
          style={{
            background: "radial-gradient(circle, #4a9fa8 0%, transparent 70%)",
            top: "-15%",
            right: "-12%",
            animation: "aurora-drift-1 18s ease-in-out infinite",
          }}
        />
        {/* Blob 2 — blue, bottom-left */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-[140px] opacity-[0.32]"
          style={{
            background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
            bottom: "-8%",
            left: "-10%",
            animation: "aurora-drift-2 22s ease-in-out infinite",
          }}
        />
        {/* Blob 3 — muted purple, center */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.25]"
          style={{
            background: "radial-gradient(circle, #7c5cbf 0%, transparent 70%)",
            top: "35%",
            left: "25%",
            animation: "aurora-drift-3 25s ease-in-out infinite",
          }}
        />
      </div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-20">
        {/* Logo */}
        <Image
          src="/images/kg-logo.png"
          alt="Kanatlı Gençlik"
          width={68}
          height={68}
          className="rounded-full mb-14"
        />

        {/* Headline */}
        <h1
          className={clsx(
            "text-[clamp(2.8rem,9vw,5rem)] leading-[1.05] text-white text-center mb-5 italic",
            instrumentSerif.className
          )}
        >
          Kanatlı Gençlik
        </h1>

        <p
          className="text-[11px] uppercase tracking-[0.35em] font-medium mb-16 text-center"
          style={{ color: "#5a6a72" }}
        >
          Web Teknolojileri Geliştirme Ekibi
        </p>

        {/* Body */}
        <div className="max-w-[400px] w-full space-y-5 mb-16">
          <p className="text-[15px] leading-[1.85] text-center text-pretty" style={{ color: "#c2c2c2" }}>
            Uzun süredir üzerinde çalıştığımız yeni dijital platformumuzu
            sizlerle buluşturmaya hazırlanıyoruz.
          </p>

          <p className="text-[15px] leading-[1.85] text-center text-pretty" style={{ color: "#c2c2c2" }}>
            Havacılığa dair güvenilir içerikler ve gelişmelerle; bilgi
            kirliliğinin önüne geçmeyi, genç zihinlere ilham olmayı ve
            gökyüzüne uzanan hayalleri hedeflere dönüştürmeyi amaçlıyoruz.
          </p>
        </div>

        {/* Separator */}
        <div className="w-8 h-px mb-8" style={{ background: "#2a2a2a" }} />

        <p className="text-[13px] text-center mb-4" style={{ color: "#606060" }}>
          Platformumuz kısa süreli olarak bakım modundadır.
        </p>

        <p className="text-white text-[15px] text-center tracking-tight">
          Çok yakında yeniden buradayız.
        </p>
      </div>
    </div>
  )
}
