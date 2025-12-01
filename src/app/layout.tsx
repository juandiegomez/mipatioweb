import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import Navbar from "../components/ui/Navbar";
import SmoothScroll from "../components/ui/SmoothScroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Mi Portafolio | Diseño & Desarrollo",
  description: "Portafolio profesional inspirado en diseño minimalista.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`min-h-screen bg-white text-black font-sans antialiased ${inter.variable} ${syne.variable}`}>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
