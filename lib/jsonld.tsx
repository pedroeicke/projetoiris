import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from "@/lib/seo";
import { faq } from "@/content/site";

/**
 * Dados estruturados (docs/seo.md). Sem inflar credenciais (conformidade CFP).
 * Renderiza um único <script> por bloco; usado no layout/seções.
 */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // conteúdo controlado por nós (sem input de usuário)
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Psychologist"],
    "@id": `${SITE_URL}/#clinic`,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    medicalSpecialty: "Psychiatric",
    priceRange: "R$$",
    founder: {
      "@type": "Person",
      name: "Carolina Franco Brito",
      jobTitle: "Psicóloga",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universidade Federal de Santa Catarina",
      },
    },
    areaServed: [
      { "@type": "City", name: "Florianópolis" },
      { "@type": "Country", name: "Brasil" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Florianópolis",
      addressRegion: "SC",
      addressCountry: "BR",
    },
    availableService: {
      "@type": "MedicalTherapy",
      name: "Psicoterapia para gênero, sexualidade e identidade",
    },
  };
  return <JsonLd data={data} />;
}

export function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return <JsonLd data={data} />;
}
