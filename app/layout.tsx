import type { Metadata, Viewport } from "next";
import { Fraunces, Mulish } from "next/font/google";
import "./globals.css";
import { baseMetadata } from "@/lib/seo";
import { OrganizationJsonLd } from "@/lib/jsonld";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { GoogleTag } from "@/components/analytics/GoogleTag";
import { ConversionEvents } from "@/components/analytics/ConversionEvents";

// Display editorial — variável, com eixos opsz/SOFT/WONK para calor (design-system.md)
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

// Corpo/UI humanista de boa legibilidade
const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
});

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: "#F3E8D5",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${mulish.variable}`}>
      <body className="paper-grain font-sans antialiased">
        <OrganizationJsonLd />
        <GoogleTag />
        <ConversionEvents />
        {/* Skip link para acessibilidade por teclado */}
        <a
          href="#conteudo"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:rounded-full focus-visible:bg-teal focus-visible:px-5 focus-visible:py-2.5 focus-visible:text-paper"
        >
          Pular para o conteúdo
        </a>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
