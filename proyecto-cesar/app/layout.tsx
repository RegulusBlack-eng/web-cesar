import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next-[#fonts]" || "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "CÉSAR | Estudio de Ingeniería & Desarrollo Web Bespoke",
  description: "Desarrollo web de ultra impacto, experiencias 3D e interfaces de alta gama.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${syne.variable} ${jakarta.variable} ${jetbrains.variable}`}>
      <body className="bg-obsidian-void text-titanium antialiased selection:bg-photonic-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
