import type { Metadata } from "next";

/** Domínio definitivo pendente (docs/architecture.md). Ajustar antes do deploy. */
export const SITE_URL = "https://iris.psi.br";

export const SITE_NAME = "íris";

export const DEFAULT_DESCRIPTION =
  "Clínica de psicologia para gênero, sexualidade e identidade. Escuta séria e calorosa, sem patologizar e sem pressa. Online no Brasil e presencial em Florianópolis.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "íris — psicologia para gênero, sexualidade e identidade",
    template: "%s · íris",
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
    title: "íris — psicologia para gênero, sexualidade e identidade",
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "íris — psicologia para gênero, sexualidade e identidade",
    description: DEFAULT_DESCRIPTION,
  },
  category: "health",
};
