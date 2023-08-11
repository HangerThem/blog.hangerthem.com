import type { Metadata } from "next";
import "@/styles/global.css";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
  title: "Ephemeris • HangerThem",
  description: "Blog of one and only HangerThem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
