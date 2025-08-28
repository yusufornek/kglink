import { WaitlistWrapper } from "@/components/box"
import { Alex_Brush } from "next/font/google"
import clsx from "clsx"
import type { Metadata } from "next"

const font = Alex_Brush({
  variable: "--font-alex-brush",
  subsets: ["latin"],
  weight: "400",
})

export const dynamic = "force-static"
export const revalidate = 30

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Manifesto - Kanatlı Gençlik Web Teknolojileri",
    description: "Kanatlı Gençlik Web Teknolojileri Geliştirme Ekibi'nin misyonu ve vizyonu",
  }
}

export default function Manifesto() {
  return (
    <WaitlistWrapper>
      <div className="flex flex-col gap-10">
        <div className="text-slate-11 [&>p]:tracking-tight [&>p]:leading-[1.6] [&>p:not(:last-child)]:mb-6 text-pretty text-start">
          <h2 className="text-2xl font-semibold text-slate-12 mb-6">Amacımız</h2>
          <p>
            Kanatlı bir gençlik, köklerden göklere millî bilinçle kanat çırpan yükselen ve yükselten bir kuşaktır. Bu
            uğurda bize teslim edilen büyük emaneti koruma aktarma ve doğru bir şekilde yaymak için güvenilir
            kaynaklarla birçok aşamamızdan geçen eş güdümlü bir sistemle hareket ediyor, her taşı yakut olan bu vatanın
            semalarında dalgalanan karanlığı yok eden ay yıldızımızın sevgisinden gelen işte bu havacılık sevgisini
            arttırmak belki de başlatmak adına işe gönül vermiş uzman takımımız ile medeniyet yolunda ilerletmeye
            çalışıyoruz.
          </p>

          <h2 className="text-2xl font-semibold text-slate-12 mb-6 mt-10">Ülkümüz</h2>
          <p>
            Her gün büyümekte olan genç ve etkin bir topluluğuz. Havacılığa dair bilgi kirliliğinin önüne geçmek hitap
            ettiğimiz kitleyi havacılık alanında bilgilendirmek ve daha fazla insanı bu kitleye katmak, göklere asil
            milletimizin çelikten imzasını atan ve bu yolda ter döken yetkilileri sizlerle buluşturmak gökyüzünün
            gelecekteki görevlilerine ilham vererek onların hayallerini hedeflere dönüştürmek amacıyla özgün tasarım ve
            estetik içeriklerle yanınızdayız.
          </p>

          <p>
            Kanatlı Gençlik başta olmak üzere KG Savunma ve G Force Aviation sayfalarımızın yanında diğer sosyal
            mecralarda çeşitli topluluklarımız bulunmaktadır. Üretirken paylaşmayı kendine görev edinen bir ekip olarak
            daha fazla ve farklı projeler tasarlıyor, çeşitli alanlarda da boy göstermeyi hedefliyoruz.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-0.5 items-start">
            <p className={clsx("text-slate-12 text-4xl font-medium italic transform -rotate-12", font.className)}>
              Kanatlı Gençlik
            </p>
            <p className="text-slate-11 text-sm font-medium">
              Web Teknolojileri Geliştirme Ekibi{" "}
              <span className="text-slate-10 text-xs">Gönüllü Geliştirici Topluluğu</span>
            </p>
          </div>
        </div>
      </div>
    </WaitlistWrapper>
  )
}
