export type EditorialArticle = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  category: string;
  keywords: string[];
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export const editorial = {
  title: "Editorial",
  description:
    "Textos informativos sobre psicoterapia, gênero, sexualidade, identidade e cuidado clínico.",
  intro:
    "Um espaço para textos informativos, escritos com responsabilidade clínica, sem promessas de resultado e sem substituir uma avaliação profissional.",
} as const;

export const editorialArticles: EditorialArticle[] = [
  {
    slug: "terapia-afirmativa-o-que-e",
    title: "Terapia afirmativa: o que significa na prática clínica",
    description:
      "Texto informativo sobre escuta afirmativa em psicoterapia, sem patologização de gênero e sexualidade e sem respostas prontas.",
    datePublished: "2026-07-31",
    dateModified: "2026-07-31",
    category: "Gênero e sexualidade",
    keywords: [
      "terapia afirmativa o que é",
      "psicoterapia afirmativa",
      "psicologia gênero e sexualidade",
    ],
    sections: [
      {
        heading: "Uma postura clínica, não um roteiro",
        paragraphs: [
          "A expressão terapia afirmativa costuma aparecer em buscas sobre psicoterapia, gênero e sexualidade. Em uma prática clínica responsável, ela não significa conduzir alguém a uma identidade, oferecer respostas prontas ou tratar a sessão como confirmação automática de qualquer decisão.",
          "O ponto central é outro: orientação sexual, identidade de gênero, expressão de gênero e experiências corporais não são tomadas como erro, desvio ou diagnóstico. A escuta parte da história que chega ao consultório e do sofrimento que pede elaboração.",
        ],
      },
      {
        heading: "Sem patologizar e sem reduzir",
        paragraphs: [
          "Uma escuta afirmativa recusa práticas de correção, reversão ou normalização de gênero e sexualidade. Ao mesmo tempo, não reduz a vida psíquica a uma categoria identitária.",
          "Família, trabalho, vínculos, corpo, religião, luto, ansiedade, tristeza, desejos e conflitos podem aparecer no processo. Gênero e sexualidade podem estar no centro em alguns momentos e ser apenas uma parte da história em outros.",
        ],
      },
      {
        heading: "O que pode ser trabalhado em psicoterapia",
        paragraphs: [
          "A psicoterapia oferece um espaço de fala e elaboração sobre aquilo que se apresenta como sofrimento, dúvida, conflito ou mudança. O percurso é construído ao longo dos encontros, considerando singularidade, contexto e responsabilidade técnica.",
          "Este texto tem finalidade informativa. A indicação, a continuidade e o formato de qualquer acompanhamento dependem de avaliação profissional e dos combinados clínicos de cada caso.",
        ],
      },
    ],
  },
  {
    slug: "psicoterapia-online-genero-sexualidade",
    title: "Psicoterapia online, gênero e sexualidade: pontos de atenção",
    description:
      "Como pensar a modalidade online em um atendimento psicológico voltado a gênero, sexualidade e identidade, com cuidado ético.",
    datePublished: "2026-07-31",
    dateModified: "2026-07-31",
    category: "Psicoterapia online",
    keywords: [
      "terapia online gênero",
      "psicoterapia online gênero e sexualidade",
      "psicoterapia afirmativa online",
    ],
    sections: [
      {
        heading: "A modalidade não define sozinha o cuidado",
        paragraphs: [
          "A psicoterapia online pode ser uma forma de atendimento psicológico quando há condições técnicas, privacidade e adequação clínica para o processo. A modalidade por si só não garante nem impede a qualidade da escuta.",
          "Em temas relacionados a gênero, sexualidade e identidade, o cuidado ético envolve não presumir caminhos, não apressar definições e não transformar experiências singulares em modelos gerais.",
        ],
      },
      {
        heading: "Privacidade e enquadre",
        paragraphs: [
          "O atendimento online exige atenção ao ambiente escolhido para a sessão, à estabilidade de conexão e aos combinados sobre horário, pagamento, faltas e eventual necessidade de encaminhamentos.",
          "Também é importante que a conversa aconteça em um espaço no qual seja possível falar com reserva. Quando isso não é viável, o tema pode ser discutido para avaliar alternativas de cuidado.",
        ],
      },
      {
        heading: "Atendimento no Brasil",
        paragraphs: [
          "No caso da íris, as sessões online são particulares, têm 50 minutos e podem atender pessoas em diferentes regiões do Brasil quando a modalidade for adequada ao acompanhamento.",
          "O conteúdo desta página é informativo e não substitui uma avaliação psicológica. O início de um processo depende de disponibilidade, demanda apresentada e combinados clínicos.",
        ],
      },
    ],
  },
  {
    slug: "atendimento-presencial-grande-florianopolis",
    title: "Atendimento psicológico presencial na Grande Florianópolis",
    description:
      "Informações sobre atendimento psicológico presencial na Grande Florianópolis e online em todo o Brasil, em sessões particulares.",
    datePublished: "2026-07-31",
    dateModified: "2026-07-31",
    category: "Atendimento presencial",
    keywords: [
      "psicólogo Grande Florianópolis",
      "psicólogo São José SC",
      "psicoterapia presencial Grande Florianópolis",
    ],
    sections: [
      {
        heading: "Onde acontece o atendimento presencial",
        paragraphs: [
          "O atendimento presencial da íris acontece em São José, na Grande Florianópolis, na Avenida Marechal Castelo Branco, 65, Bloco B, Sala 205, Campinas, SC, 88101-020.",
          "As sessões são particulares e têm duração de 50 minutos. O atendimento online também está disponível para todo o Brasil quando essa modalidade fizer sentido para o acompanhamento.",
        ],
      },
      {
        heading: "Gênero, sexualidade e identidade na escuta clínica",
        paragraphs: [
          "A proposta clínica considera que gênero, sexualidade e identidade podem atravessar diferentes dimensões da vida, sem que isso transforme a pessoa em um rótulo ou defina sozinho o motivo da procura por psicoterapia.",
          "O processo terapêutico pode acolher sofrimento, dúvidas, mudanças, vínculos e contextos sociais, sempre sem prometer resultados e sem substituir decisões que pertencem ao percurso de cada pessoa.",
        ],
      },
      {
        heading: "Primeiro contato",
        paragraphs: [
          "O agendamento pode ser iniciado pelo WhatsApp. A primeira sessão já faz parte do processo terapêutico e serve para compreender a demanda, apresentar o funcionamento do atendimento e avaliar possibilidades de início.",
          "Este texto descreve o serviço e não oferece aconselhamento personalizado. Situações específicas devem ser discutidas em atendimento profissional.",
        ],
      },
    ],
  },
];

export function getEditorialArticle(slug: string) {
  return editorialArticles.find((article) => article.slug === slug);
}
