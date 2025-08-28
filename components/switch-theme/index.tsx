"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ThemeSwitcher({ className }: { className?: string }) {
  const { setTheme } = useTheme()

  React.useEffect(() => {
    setTheme("light")
  }, [setTheme])

  return null
}
