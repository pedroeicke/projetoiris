/**
 * Fonte da verdade da copy: docs/content.md (dono: content-writer).
 * Markup separado do conteúdo para facilitar edição e futuro CMS.
 * `[ … ]` indica placeholder pendente de dado real do cliente.
 */

// WhatsApp da Carolina (48 98851-5774) → formato internacional p/ wa.me
const WHATSAPP_NUMBER = "5548988515774";
// Mensagem pré-preenchida enviada ao abrir a conversa (tom da marca)
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de agendar uma primeira conversa. 🌱";

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
  eyebrow: "Gênero, sexualidade e cuidado psicológico",
  // a palavra entre * vira ênfase em itálico da Fraunces
  titleLead: "Um lugar para ser",
  titleEmphasis: "visto por inteiro",
  titleTrail: ".",
  lead: "Atendimento psicológico para diferentes momentos da vida, com escuta ética e sensível às questões de gênero, sexualidade e identidade, sem patologizar e sem reduzir sua história a um rótulo.",
  ctaPrimary: { label: "Agendar primeira conversa", href: "#contato" },
  ctaSecondary: { label: "Conhecer a abordagem", href: "#abordagem" },
} as const;

export const concept = {
  titleLead: "O que te atravessa",
  titleEmphasis: "merece escuta",
  titleTrail: ".",
  body: "Na clínica, há espaço para trabalhar o que pesa, o que se repete e o que ainda não encontrou nome. Aqui, há um lugar de cuidado onde essas questões podem ganhar atenção, tempo e elaboração.",
} as const;

export const approach = {
  title: "Antes de qualquer resposta, escuta.",
  intro:
    "A psicoterapia não parte de fórmulas sobre quem você é, nem tenta encaixar sua experiência em uma explicação pronta.",
  duo: [
    {
      title: "Sem patologização",
      body: "Gênero, sexualidade e identidade podem fazer parte da sua história sem serem tratados como erro, desvio ou diagnóstico. Na clínica, essas experiências são acolhidas com cuidado e responsabilidade.",
    },
    {
      title: "Sem reducionismo",
      body: "Você não se resume a uma identidade, a uma demanda ou a um sofrimento. É necessário considerar suas contradições, escolhas, relações e aquilo que há de próprio no modo como você vive sua vida.",
    },
  ],
  pillars: [
    {
      n: "01",
      title: "Fundamentação",
      body: "Pesquisa, formação e estudo contínuo sustentam o atendimento. A teoria orienta o cuidado, mas não apaga a singularidade de cada experiência.",
    },
    {
      n: "02",
      title: "Tempo de elaboração",
      body: "Cada processo tem seu próprio ritmo. A psicoterapia acompanha perguntas, mudanças e decisões à medida que elas podem ser formuladas no encontro clínico.",
    },
    {
      n: "03",
      title: "Atenção às condições de vida",
      body: "O sofrimento não aparece separado do mundo. Família, trabalho, relações, preconceitos e expectativas sociais também importam no cuidado clínico.",
    },
    {
      n: "04",
      title: "Combinados terapêuticos",
      body: "O início do atendimento envolve uma conversa sobre formato, frequência, honorários e possibilidades de acompanhamento.",
    },
  ],
} as const;

export const audience = {
  title: "Para quem busca um espaço de cuidado.",
  intro:
    "Atendimento psicológico para adolescentes e pessoas adultas. Gênero, sexualidade e identidade podem aparecer no processo, mas não precisam ser a única razão para começar a terapia.",
  situations: [
    "Processos de descoberta, afirmação ou mudança",
    "Conflitos familiares, rejeição ou falta de acolhimento",
    "Momentos de vida que pedem escuta e cuidado",
    "Ansiedade, tristeza, crises e outros sofrimentos cotidianos",
    "Relações, escolhas e mudanças na forma de viver",
  ],
  note: "Algumas questões chegam como ansiedade, tristeza, dúvida, cansaço ou conflito. Na clínica, elas podem ser cuidadas em relação com a história, os afetos e as condições concretas de vida.",
} as const;

export const founder = {
  title: "Entre pesquisa e clínica",
  body: [
    "Carolina Franco Brito é psicóloga, Mestre e Doutora em Psicologia pela UFSC. Sua pesquisa em gênero, sexualidade e identidade contribui para uma atuação atenta às formas como essas questões podem aparecer na vida psíquica e nas experiências de sofrimento.",
    "A prática clínica é acompanhada por supervisão clínica regular e formação permanente, entendendo o atendimento psicológico como um trabalho que exige estudo, responsabilidade técnica e atualização constante.",
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
      value: "Online, para todo o Brasil, e presencial em Florianópolis.",
    },
    {
      label: "Sessões",
      value: "50 minutos · atendimento particular, sem convênios.",
    },
    {
      label: "Primeiro contato",
      value:
        "A conversa inicial serve para compreender sua demanda, apresentar o formato do atendimento e avaliar, com cuidado, as possibilidades de acompanhamento.",
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
      a: "Você pode agendar uma primeira conversa pelo WhatsApp. Esse encontro inicial serve para compreender sua demanda, apresentar o formato do atendimento e avaliar as possibilidades de início do processo.",
    },
  ],
} as const;

export const contact = {
  title: "Quando fizer sentido, você começa",
  sub: "Marque uma primeira conversa. A partir daí, o tempo é seu.",
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
  ctaSub: "Marque uma primeira conversa pelo WhatsApp. A partir daí, o tempo é seu.",
} as const;
