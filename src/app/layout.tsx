import type { Metadata } from "next";
import "./globals.css";

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
      <body className="min-h-screen bg-white text-black">
        {children}
      </body>
    </html>
  );
}
