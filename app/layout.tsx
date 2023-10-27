import type { Metadata } from "next"
import "@/styles/global.css"

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
      <body>{children}</body>
    </html>
  )
}
