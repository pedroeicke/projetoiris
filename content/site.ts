/**
 * Fonte da verdade da copy: docs/content.md (dono: content-writer).
 * Markup separado do conteúdo para facilitar edição e futuro CMS.
 * `[ … ]` indica placeholder pendente de dado real do cliente.
 */

// WhatsApp da Carolina (48 98851-5774) → formato internacional p/ wa.me
const WHATSAPP_NUMBER = "5548988515774";
// Mensagem pré-preenchida enviada ao abrir a conversa (tom da marca)
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da íris e gostaria de agendar uma primeira conversa. 🌱";

export const site = {
  name: "íris",
  tagline: "Clínica de psicologia · gênero, sexualidade e identidade",
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
  { label: "Conceito", href: "#conceito" },
  { label: "Abordagem", href: "#abordagem" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Quem atende", href: "#quem-atende" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Dúvidas", href: "#faq" },
] as const;

export const hero = {
  eyebrow: "Clínica de psicologia · gênero, sexualidade e identidade",
  // a palavra entre * vira ênfase em itálico da Fraunces
  titleLead: "Um lugar para ser",
  titleEmphasis: "visto por inteiro",
  titleTrail: ".",
  lead: "Escuta clínica ética e acolhedora para o que atravessa gênero, sexualidade e identidade, sem patologizar, sem pressa e sem reduzir você a um rótulo.",
  ctaPrimary: { label: "Agendar uma conversa", href: "#contato" },
  ctaSecondary: { label: "Conhecer a abordagem", href: "#abordagem" },
} as const;

export const concept = {
  titleLead: "O que te atravessa",
  titleEmphasis: "merece escuta",
  titleTrail: ".",
  body: "Na clínica, aquilo que sempre esteve ali pode enfim se revelar: identidades, contradições, possibilidades e formas de ser. íris é o nome desse lugar, onde você encontra espaço, sem julgamento e sem rótulo.",
} as const;

export const approach = {
  title: "Nem patologia, nem rótulo.",
  intro:
    "A psicologia tradicional costumou tratar essas vivências de dois jeitos ruins: como doença a corrigir, ou como identidade a celebrar de forma rasa. íris recusa os dois.",
  duo: [
    {
      title: "Sem patologização",
      body: "Sua vivência de gênero ou sexualidade não é um transtorno a ser consertado. Aqui, ela não é o problema, mas uma dimensão de quem você é. O cuidado começa daí.",
    },
    {
      title: "Sem reducionismo",
      body: "Você é mais do que uma identidade. A escuta acolhe sua diversidade, seus conflitos mais profundos e aquilo que há de singular na sua experiência.",
    },
  ],
  pillars: [
    {
      n: "01",
      title: "Substância",
      body: "Clínica ancorada em pesquisa e formação contínua. Rigor teórico traduzido em escuta cuidadosa.",
    },
    {
      n: "02",
      title: "Ritmo de cuidado",
      body: "Sem pressa e sem etapas forçadas. O tempo do processo é seu, e o cuidado acompanha sem antecipar caminhos.",
    },
    {
      n: "03",
      title: "Despatologização",
      body: "Gênero e sexualidade não são sintomas. O sofrimento costuma vir de fora, e é dele que a clínica cuida.",
    },
    {
      n: "04",
      title: "Acesso",
      body: "Vagas a valor reduzido por critério, desde o primeiro dia. Cuidado de qualidade não pode ser privilégio.",
    },
  ],
} as const;

export const audience = {
  title: "A comunidade no centro, mas não só ela.",
  intro:
    "Adolescentes, jovens e adultos. Pessoas LGBTQIA+ no centro do cuidado, mas o espaço é aberto a qualquer pessoa.",
  situations: [
    "Processos de descoberta, afirmação ou mudança",
    "Conflitos familiares, rejeição ou falta de acolhimento",
    "Momentos de vida que pedem escuta e cuidado",
    "Ansiedade, tristeza, crises e outros sofrimentos cotidianos",
    "Vínculos, escolhas e modos de existir em transformação",
  ],
  note: "A escuta funciona melhor quando o sofrimento pode ser nomeado pelo que ele é: muitas vezes, algo ligado ao modo como sua identidade é recebida, julgada ou silenciada, e não à sua identidade em si.",
} as const;

export const founder = {
  title: "Pesquisadora do tema. Clínica do cuidado.",
  body: [
    "íris é fundada e conduzida por Carolina Franco Brito, psicóloga e doutoranda em Psicologia pela UFSC, com produção acadêmica em gênero, sexualidades e identidade. Une o rigor de quem estuda o tema a fundo à escuta de quem acolhe sem julgamento.",
    "O cuidado é construído com responsabilidade: supervisão clínica regular e formação contínua acompanham cada passo.",
  ],
  name: "Carolina Franco Brito",
  crp: "CRP 12/18469",
  photoAlt:
    "Carolina Franco Brito, psicóloga fundadora da íris, sentada em seu espaço de atendimento ao lado de uma planta",
} as const;

export const care = {
  title: "Claro, sem letras miúdas.",
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
      label: "Política de acesso",
      value:
        "Vagas a valor reduzido, por critério, para pessoas em vulnerabilidade e por indicação de coletivos parceiros.",
    },
  ],
} as const;

export const faq = {
  title: "Dúvidas honestas, respostas diretas.",
  items: [
    {
      q: "Preciso ser LGBTQIA+ para me atender aqui?",
      a: "Não. A comunidade está no centro do cuidado, mas o espaço é aberto a qualquer pessoa que se identifique com a escuta que oferecemos.",
    },
    {
      q: "Atende adolescentes?",
      a: "Sim, com o cuidado ético que a faixa exige. Não atendemos crianças.",
    },
    {
      q: "É online ou presencial?",
      a: "Os dois. Online para todo o Brasil e presencial em Florianópolis: você escolhe o que funciona melhor para você.",
    },
    {
      q: "Atende por convênio?",
      a: "O atendimento é particular.",
    },
    {
      q: "Fazem laudos ou acompanhamento de afirmação de gênero?",
      a: "Esse serviço está em estruturação e chegará em breve. Hoje o foco é a psicoterapia.",
    },
    {
      q: "Como eu começo?",
      a: "Você agenda uma primeira conversa, sem compromisso de continuar. Esse primeiro encontro é para você conhecer o espaço, contar um pouco da sua história e sentir se o processo faz sentido.",
    },
  ],
} as const;

export const contact = {
  title: "Dar o primeiro passo é fácil.",
  sub: "Marque uma primeira conversa. A partir daí, o tempo é seu.",
  ctaWhatsapp: "Agendar pelo WhatsApp",
  ctaDoctoralia: "Agendar pela Doctoralia",
} as const;

export const footer = {
  tagline: "Clínica de psicologia · gênero, sexualidade e identidade",
  quote: "Um lugar para o qual você queira chegar e ser visto por inteiro.",
} as const;
