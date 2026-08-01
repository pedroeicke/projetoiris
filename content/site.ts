/**
 * Fonte da verdade da copy: docs/content.md (dono: content-writer).
 * Markup separado do conteúdo para facilitar edição e futuro CMS.
 * `[ … ]` indica placeholder pendente de dado real do cliente.
 */

// WhatsApp da Carolina (48 98851-5774) → formato internacional p/ wa.me
const WHATSAPP_NUMBER = "5548988515774";
// Mensagem pré-preenchida enviada ao abrir a conversa (tom da marca)
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de agendar uma primeira sessão. 🌱";

export const site = {
  name: "Carolina Franco Brito",
  tagline: "Psicoterapia · gênero, sexualidade e identidade",
  founder: "Carolina Franco Brito",
  crp: "CRP 12/18469",
  location: "Florianópolis, SC · e online em todo o Brasil",
  email: "[ contato@iris.psi ]", // placeholder
  instagram: "[ @iris.psi ]", // placeholder
  whatsappNumber: WHATSAPP_NUMBER,
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`,
  doctoralia: "#", // placeholder — link Doctoralia
  address: {
    streetAddress:
      "Avenida Marechal Castelo Branco, 65, Bloco B, Sala 205, Campinas",
    city: "São José",
    region: "SC",
    postalCode: "88101-020",
    country: "BR",
    full: "Avenida Marechal Castelo Branco, 65, Bloco B, Sala 205, Campinas, São José, SC, 88101-020",
  },
} as const;

export const nav = [
  { label: "Conceito", href: "/#conceito" },
  { label: "Abordagem", href: "/#abordagem" },
  { label: "Para quem", href: "/#para-quem" },
  { label: "Quem atende", href: "/#quem-atende" },
  { label: "Gênero e sexualidade", href: "/genero-sexualidade-cuidado-psicologico" },
  { label: "Atendimento", href: "/#atendimento" },
  { label: "Dúvidas", href: "/#faq" },
] as const;

export const hero = {
  eyebrow: "Psicoterapia",
  // a palavra entre * vira ênfase em itálico da Fraunces
  titleLead: "Um lugar para ser",
  titleEmphasis: "visto por inteiro",
  titleTrail: ".",
  lead: "Atendimento psicológico para adolescentes e pessoas adultas, com uma escuta atenta à sua história, às suas relações e ao contexto em que você vive. Para compreender o que está difícil, atravessar mudanças e construir caminhos possíveis.",
  ctaPrimary: { label: "Agendar primeira sessão", href: "#contato" },
  ctaSecondary: { label: "Conhecer a abordagem", href: "#abordagem" },
} as const;

export const concept = {
  titleLead: "O que te atravessa",
  titleEmphasis: "merece escuta",
  titleTrail: ".",
  body: "Na clínica, o que pesa, se repete ou ainda não encontrou palavras pode ganhar tempo, atenção e elaboração.",
} as const;

export const approach = {
  title: "Cada experiência tem seu próprio sentido.",
  intro:
    "Você não precisa chegar sabendo explicar tudo o que está vivendo. O trabalho terapêutico se constrói a partir do que faz sentido para você, ao longo dos encontros.",
  duo: [
    {
      title: "Sem patologização",
      body: "Gênero e sexualidade fazem parte da experiência humana e podem ocupar lugares diferentes na história de cada pessoa. Na terapia, essas experiências podem ser acolhidas com cuidado, sem julgamentos e sem a ideia de que precisam ser mudadas.",
    },
    {
      title: "Sem reducionismo",
      body: "A escuta não reduz ninguém a uma categoria, a uma demanda ou a um sofrimento. Contradições, escolhas, vínculos e contextos também fazem parte do trabalho clínico.",
    },
  ],
  pillars: [
    {
      n: "01",
      title: "Fundamentação",
      body: "Pesquisa e formação continuada sustentam o trabalho clínico. A teoria oferece referências, sem antecipar o sentido de cada experiência.",
    },
    {
      n: "02",
      title: "Tempo de elaboração",
      body: "Cada pessoa tem seu próprio ritmo. Perguntas, mudanças e decisões podem ser trabalhadas à medida que encontram espaço para ser formuladas.",
    },
    {
      n: "03",
      title: "Atenção às condições de vida",
      body: "O sofrimento não aparece separado do mundo. Família, trabalho, relações, preconceitos e expectativas sociais também importam no cuidado clínico.",
    },
    {
      n: "04",
      title: "Vínculo e diálogo",
      body: "O acompanhamento é construído na relação terapêutica, com espaço para dúvidas, incômodos e ajustes ao longo do processo.",
    },
  ],
} as const;

export const audience = {
  title: "Para quem busca um espaço de cuidado.",
  intro:
    "Cada pessoa chega à terapia por razões diferentes. O que tem sido vivido, sentido ou questionado pode ser trabalhado considerando também como gênero, sexualidade e contexto social atravessam sua experiência.",
  situations: [
    "Mudanças, escolhas e momentos de transição",
    "Conflitos familiares e dificuldades nos vínculos",
    "Ansiedade, tristeza, crises e sobrecarga",
    "Sentimentos de não pertencimento e dificuldades de encontrar acolhimento",
    "Dúvidas e mudanças na relação consigo e com os outros",
  ],
  note: "Você não precisa saber nomear tudo para começar.",
  diversity: {
    title: "Uma clínica aberta à diversidade.",
    body: "Pessoas LGBTQIA+ são bem-vindas. O atendimento se orienta por uma escuta respeitosa.",
  },
} as const;

export const founder = {
  title: "Uma prática entre clínica e pesquisa",
  body: [
    "Carolina Franco Brito é psicóloga, mestra e doutora em Psicologia pela UFSC. Sua trajetória acadêmica nos estudos de gênero, sexualidade e processos de subjetivação contribui para uma prática atenta às relações entre histórias pessoais e contextos sociais.",
    "Sua prática clínica respeita a singularidade de cada percurso e não parte de respostas prontas sobre o que cada pessoa vive. O trabalho se orienta pelo compromisso ético com a autonomia de quem busca atendimento.",
  ],
  name: "Carolina Franco Brito",
  crp: "CRP 12/18469",
  photoAlt:
    "Carolina Franco Brito, psicóloga, sentada em seu espaço de atendimento ao lado de uma planta",
} as const;

export const care = {
  title: "Como funciona o atendimento.",
  items: [
    {
      label: "Onde",
      value:
        "Presencial no endereço Avenida Marechal Castelo Branco, 65, Bloco B, Sala 205, Campinas, São José, SC, 88101-020 · online em todo o Brasil.",
    },
    {
      label: "Sessões",
      value: "50 minutos · atendimento particular, sem convênios.",
    },
    {
      label: "Primeira sessão",
      value:
        "A primeira sessão já faz parte do processo terapêutico. É um momento para compreender o que você busca, apresentar o funcionamento do atendimento e avaliar se o acompanhamento faz sentido para você.",
    },
  ],
} as const;

export const faq = {
  title: "Antes de começar.",
  items: [
    {
      q: "Preciso ser LGBTQIA+ para começar terapia?",
      a: "Não. O atendimento é aberto a pessoas com diferentes demandas. Questões de gênero, sexualidade e identidade podem aparecer no processo, mas não precisam ser o motivo da procura.",
    },
    {
      q: "Atende adolescentes?",
      a: "Sim. O atendimento a adolescentes é realizado com os cuidados éticos que essa fase exige, incluindo os combinados necessários com responsáveis. Não há atendimento infantil.",
    },
    {
      q: "É online ou presencial?",
      a: "Os dois. O atendimento é online para todo o Brasil e presencial em Florianópolis. A modalidade leva em consideração preferência, disponibilidade e adequação clínica.",
    },
    {
      q: "Atende por convênio?",
      a: "Não. No momento, o atendimento é particular.",
    },
    {
      q: "Emite laudos ou documentos psicológicos?",
      a: "No momento, não são emitidos laudos ou documentos psicológicos para finalidades específicas. O atendimento oferecido é psicoterapia, e questões de gênero podem ser trabalhadas quando fizerem parte da sua demanda.",
    },
    {
      q: "Como eu começo?",
      a: "Você pode agendar uma primeira sessão pelo WhatsApp. Esse encontro inicial serve para compreender sua demanda, apresentar o formato do atendimento e avaliar as possibilidades de início do processo.",
    },
  ],
} as const;

export const contact = {
  title: "Quando fizer sentido, você começa",
  sub: "Marque um primeiro encontro. A partir daí, o tempo é seu.",
  ctaWhatsapp: "Agendar pelo WhatsApp",
  ctaDoctoralia: "Agendar pela Doctoralia",
} as const;

export const footer = {
  tagline: "Psicoterapia · gênero, sexualidade e identidade",
  quote: "Um lugar para o qual você queira chegar e ser visto por inteiro.",
} as const;

/** Página dedicada /genero-sexualidade-cuidado-psicologico (fonte: doc do cliente) */
export const generoPage = {
  slug: "/genero-sexualidade-cuidado-psicologico",
  eyebrow: "Psicoterapia afirmativa",
  title: "Gênero, sexualidade e cuidado psicológico",
  lead: "Uma psicoterapia atenta às experiências LGBTQIA+, sem reduzir a pessoa à sua identidade e sem tratar gênero ou sexualidade como problema em si.",
  intro: [
    "A psicoterapia pode ser um espaço para trabalhar sofrimento, relações, corpo, identidade, escolhas e momentos de vida. Para pessoas LGBTQIA+, esse processo muitas vezes envolve uma questão adicional: a necessidade de encontrar uma escuta que não trate gênero ou sexualidade como problema em si.",
    "Na clínica, gênero, sexualidade e identidade podem aparecer no atendimento quando forem importantes para a sua história. Mas eles não precisam ser o motivo principal da procura. A terapia também pode ser sobre ansiedade, tristeza, família, trabalho, relações, luto, dúvidas, mudanças ou qualquer outra questão que esteja pedindo cuidado.",
    "A proposta é oferecer uma clínica atenta a essas experiências, sem reduzir a pessoa a uma identidade.",
  ],
  sections: [
    {
      heading: "Por que isso importa na psicoterapia?",
      paragraphs: [
        "Nem todo sofrimento nasce apenas de conflitos individuais. Muitas vezes, aquilo que aparece como ansiedade, vergonha, medo, culpa, cansaço ou sensação de inadequação também se relaciona com o modo como uma pessoa foi recebida, nomeada, silenciada ou julgada ao longo da vida.",
        "Questões de gênero e sexualidade podem atravessar a família, os vínculos afetivos, o trabalho, a escola, a relação com o corpo, a espiritualidade, os projetos de futuro e a forma como alguém se sente autorizado a existir no mundo.",
        "Por isso, uma clínica atenta a essas dimensões parte da escuta sobre como sua história foi sendo construída, quais sofrimentos se colocam hoje e que caminhos podem ser elaborados no processo terapêutico.",
      ],
    },
    {
      heading: "O que significa uma escuta afirmativa?",
      paragraphs: [
        "Uma escuta afirmativa não significa conduzir a pessoa para uma identidade específica, confirmar respostas antes que elas sejam elaboradas ou transformar a terapia em um espaço de validação automática.",
        "Significa, antes de tudo, não tratar orientação sexual, identidade de gênero, expressão de gênero ou experiências corporais como erro, desvio ou diagnóstico.",
        "Na prática clínica, isso implica acolher perguntas, ambivalências, conflitos, desejos, medos e mudanças sem presumir que existe um caminho correto a ser seguido. A afirmação, aqui, não é uma pressão para definir quem você é. É a recusa de transformar sua existência em problema.",
      ],
    },
    {
      heading: "A terapia precisa ser sobre gênero ou sexualidade?",
      paragraphs: [
        "Não. Uma pessoa LGBTQIA+ pode procurar psicoterapia por muitos motivos.",
        "Gênero e sexualidade podem aparecer no processo se fizerem parte da sua demanda, mas não precisam ocupar o centro da terapia. A diferença é que, quando essas questões aparecerem, elas não precisarão ser escondidas, justificadas ou traduzidas para caber em uma norma.",
      ],
    },
    {
      heading: "O que dizem as orientações éticas da Psicologia?",
      paragraphs: [
        "A Psicologia brasileira tem compromissos éticos importantes nesse campo. A atuação profissional deve se orientar pela dignidade, liberdade, igualdade e integridade das pessoas, sem práticas discriminatórias ou formas de indução moral, religiosa, ideológica ou sexual.",
        "Também há normativas específicas do Conselho Federal de Psicologia que orientam uma prática não patologizante diante da diversidade sexual, das transgeneridades e das travestilidades.",
        "Isso significa que gênero e sexualidade não devem ser tratados como algo a corrigir, reverter ou normalizar. O trabalho clínico deve estar comprometido com a promoção de saúde, autonomia, responsabilidade técnica e enfrentamento de práticas discriminatórias.",
      ],
    },
    {
      heading: "O que este atendimento não propõe",
      paragraphs: [
        "Este atendimento não propõe corrigir gênero ou sexualidade. Não trabalha com cura, reversão, adequação a normas ou promessa de uma identidade final.",
        "Também não se trata de apressar decisões, oferecer respostas prontas ou transformar toda questão da vida em tema identitário.",
        "A clínica é um espaço para elaborar, com cuidado, aquilo que se apresenta como sofrimento, dúvida, conflito ou desejo de mudança. Em alguns momentos, gênero e sexualidade estarão no centro. Em outros, serão apenas uma parte da história. Em ambos os casos, poderão ser acolhidos com responsabilidade.",
      ],
    },
  ],
  ctaTitle: "Quando fizer sentido, você começa",
  ctaSub: "Marque um primeiro encontro pelo WhatsApp. A partir daí, o tempo é seu.",
} as const;
