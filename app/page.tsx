"use client"

import { WaitlistWrapper } from "@/components/box"
import ParticleButton from "@/components/particle-button"

export default function Home() {
  return (
    <WaitlistWrapper>
      <div className="space-y-1 text-center">
        <h1 className="text-2xl sm:text-3xl font-medium text-slate-12 whitespace-pre-wrap text-pretty">
          Kanatlı Gençlik
        </h1>
      </div>

      <div className="w-full space-y-4 mt-8">
        <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
          <ParticleButton
            className="w-full text-sm h-auto py-4 px-6 whitespace-normal text-center"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSf2WK6xHRtv77QHWxh-GRTr783-lP_viYyBezzF5c_yMpacWQ/viewform?usp=dialog",
                "_blank",
              )
            }
          >
            KG Web Ekibi Başvuru Formu
          </ParticleButton>

          <ParticleButton
            className="w-full text-sm h-auto py-4 px-6 whitespace-normal text-center"
            onClick={() => window.open("https://chat.whatsapp.com/EUlm1ssJ2xD4wVDAID6Jtj?mode=ems_copy_c", "_blank")}
          >
            KG WhatsApp
          </ParticleButton>

          <ParticleButton
            className="w-full text-sm h-auto py-4 px-6 whitespace-normal text-center"
            onClick={() => window.open("https://www.instagram.com/kgsavunma?igsh=MXhxemdtY2hxeHNjdg==", "_blank")}
          >
            KG Savunma
          </ParticleButton>

          <ParticleButton
            className="w-full text-sm h-auto py-4 px-6 whitespace-normal text-center"
            onClick={() => window.open("https://t.me/kgkayit2_bot", "_blank")}
          >
            KG Telegram
          </ParticleButton>

          <ParticleButton
            className="w-full text-sm h-auto py-4 px-6 whitespace-normal text-center"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfSyKeMQtbV8Q2e4MTbeaLlXDFMKGNjkIerdqOMpzp7i-_YDw/viewform?usp=sf_link",
                "_blank",
              )
            }
          >
            KG Ekip Başvuru Formu
          </ParticleButton>

          <ParticleButton
            className="w-full text-sm h-auto py-4 px-6 whitespace-normal text-center"
            onClick={() =>
              window.open("https://drive.google.com/drive/folders/1KVJwA5FcD2nX1n9DLQgONhX3lVlkTnPf", "_blank")
            }
          >
            KG Duvar Kağıtları
          </ParticleButton>

          <ParticleButton
            className="w-full text-sm h-auto py-4 px-6 whitespace-normal text-center"
            onClick={() => window.open("mailto:info@kanatligenclik.com", "_self")}
          >
            İletişim
          </ParticleButton>
        </div>
      </div>
    </WaitlistWrapper>
  )
}
