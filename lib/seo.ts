import type { Metadata } from "next";

export const SITE_URL = "https://www.irispsicologia.com";

export const SITE_NAME = "Carolina Franco Brito";

export const DEFAULT_DESCRIPTION =
  "Psicologia para gênero, sexualidade e identidade. Atendimento online no Brasil e presencial na Grande Florianópolis, com escuta ética.";

export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Carolina Franco Brito — psicologia para gênero, sexualidade e identidade",
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Carolina Franco Brito · Um lugar para ser visto por inteiro",
    template: "%s · Carolina Franco Brito",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Carolina Franco Brito" }],
  creator: "Carolina Franco Brito",
  keywords: [
    "psicólogo gênero",
    "psicoterapia LGBTQIA+",
    "psicólogo para pessoas trans",
    "terapia gênero e sexualidade",
    "psicólogo LGBT Florianópolis",
    "psicólogo São José SC",
    "psicoterapia Grande Florianópolis",
    "terapia online gênero",
    "psicoterapia afirmativa",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Carolina Franco Brito · Um lugar para ser visto por inteiro",
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carolina Franco Brito · Um lugar para ser visto por inteiro",
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  category: "health",
};
