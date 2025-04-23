"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { ReactNode } from "react"

interface ClientThemeProviderProps {
  children: ReactNode
}

export default function ClientThemeProvider({ children }: ClientThemeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
