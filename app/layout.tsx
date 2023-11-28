import type { Metadata } from "next"
import { AuthProvider } from "@/context/authContext"
import { AppProvider } from "@/context/appContext"
import { Analytics } from "@vercel/analytics/react"
import "@/styles/global.css"
import "@/styles/variables.css"
import "@/styles/normalize.css"

export const metadata: Metadata = {
  title: "Ephemeris • HangerThem",
  description: "Blog of one and only HangerThem",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <AuthProvider>{children}</AuthProvider>
        </AppProvider>
        <Analytics />
      </body>
    </html>
  )
}
