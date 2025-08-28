import { NavbarLink, NavbarLinkBackground } from "./link"
import clsx from "clsx"
import Image from "next/image"

export const Header = async () => {
  const navbarItems = [
    { href: "/", _title: "Bağlantılar" },
    { href: "/manifesto", _title: "Manifesto" },
  ]

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-6">
        <Image src="/images/kg-logo.png" alt="Kanatlı Gençlik Logo" width={120} height={120} className="rounded-full" />
      </div>

      <nav className="bg-slate-1 rounded-full">
        <div
          className={clsx(
            "bg-slate-1 rounded-full p-1 flex relative items-center",
            "shadow-[0px_-1px_3px_0px_rgba(0,_0,_0,_0.05),_0px_7px_2px_0px_rgba(0,_0,_0,_0.02),_0px_4px_2px_0px_rgba(0,_0,_0,_0.05),_0px_2px_1px_0px_rgba(0,_0,_0,_0.05),_0px_1px_1px_0px_rgba(0,_0,_0,_0.03),_0px_0px_1px_0px_rgba(0,_0,_0,_0.04)]",
            "dark:shadow-[0px_-1px_3px_0px_rgba(0,_0,_0,_0.03),_0px_7px_2px_0px_rgba(0,_0,_0,_0.03),_0px_4px_2px_0px_rgba(0,_0,_0,_0.05),_0px_2px_1px_0px_rgba(0,_0,_0,_0.1),_0px_1px_1px_0px_rgba(0,_0,_0,_0.1),_0px_0px_1px_0px_rgba(0,_0,_0,_0.1)]",
          )}
        >
          {/* Animated background */}
          <NavbarLinkBackground links={navbarItems.map((item) => item.href)} />

          {/* Navigation items */}
          {navbarItems.map(({ href, _title }) => (
            <NavbarLink key={href} href={href ?? "/"}>
              {_title}
            </NavbarLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
