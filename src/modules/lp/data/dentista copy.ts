import {
  HeroSectionProps,
  ProblemSectionData,
  SoluctionSectionData,
  Solution,
  TimelineData,
} from '~/modules/lp/sections'

export const heroSection: HeroSectionProps = {
  top: {
    title: 'Nova Era da Odontologia Chegou.',
    subtitle: 'Seu Consultório Está Preparado?',
    alertText: 'ALERTA: Seu consultório está invisível digitalmente',
  },
  paragraphs: [
    'Em 2024, 89% dos pacientes particulares começam sua jornada no Google. E terminam no consultório do seu concorrente.',
    'Enquanto você lê este texto, dezenas de pacientes em potencial estão procurando exatamente os serviços que você oferece. Mas eles não conseguem te encontrar.',
    'questão não é mais SE você precisa de presença digital. A questão é QUANDO seu consultório vai se adaptar para sobreviver.',
  ],
  button: {
    text: 'QUERO MINHA ANÁLISE DIGITAL GRATUITA',
  },
  availableText: 'Apenas 3 vagas disponíveis esta semana',
}

export const problemSection: ProblemSectionData = {
  title: 'A Dura Realidade dos Consultórios em 2024',
  description: `O mercado odontológico mudou drasticamente nos últimos anos. Quem
  não se adaptar rapidamente está condenado a depender de convênios ou
  fechar as portas.`,
  problemBlocks: [
    {
      title: 'O Marketing Tradicional Está Morrendo',
      description:
        'As antigas estratégias de captação de pacientes já não funcionam como antes:',
      items: [
        'Marketing boca-a-boca não escala',
        'Instagram está saturado e cada vez mais caro',
        'Panfletos e outdoors têm retorno baixíssimo',
        'Indicações são inconsistentes',
      ],
    },
    {
      title: 'A Concorrência Está Anos à Frente',
      description: 'Enquanto você hesita, outros consultórios estão:',
      items: [
        'Dominando as buscas do Google na sua região',
        'Educando pacientes 24h por dia com conteúdo',
        'Convertendo pacientes enquanto dormem',
        'export Construindo autoridade digital',
      ],
    },
  ],
  costBlocks: [
    {
      value: 'R$ 45.000',
      description:
        'Valor médio perdido mensalmente em pacientes que escolhem a concorrência online',
    },
    {
      value: '73%',
      description:
        'Dos pacientes particulares pesquisam no Google antes de escolher um dentista',
    },
    {
      value: '312',
      description:
        'Pacientes em potencial procuram tratamentos na sua região todos os dias',
    },
  ],
}

export const solutions: Solution[] = [
  {
    icon: '🎯',
    title: 'Captação Automática 24/7',
    description: 'Sistema completo que trabalha enquanto você dorme:',
    features: [
      'Atendimento automático 24h',
      'Qualificação de pacientes',
      'Agendamento online',
      'Integração com WhatsApp',
      'Chatbot personalizado',
      'Formulários inteligentes',
    ],
  },
  {
    icon: '👑',
    title: 'Autoridade Digital Suprema',
    description: 'Posicione-se como referência no seu território:',
    features: [
      '1º lugar no Google local',
      'Blog profissional atualizado',
      'Depoimentos verificados',
      'Casos clínicos destacados',
      'Perfil do profissional otimizado',
      'Certificações em destaque',
    ],
  },
  {
    icon: '🚀',
    title: 'Marketing Científico',
    description: 'Estratégias baseadas em dados reais:',
    features: [
      'Análise de comportamento',
      'Mapa de calor do site',
      'Relatórios semanais',
      'A/B testing contínuo',
      'Otimização por dados',
      'Métricas em tempo real',
    ],
  },
  {
    icon: '💎',
    title: 'Pacientes Premium',
    description: 'Atraia pacientes com alto poder aquisitivo:',
    features: [
      'Filtro automático por perfil',
      'Foco em procedimentos caros',
      'Educação do paciente',
      'Qualificação prévia',
      'Nutrição de leads VIP',
      'Remarketing inteligente',
    ],
  },
  {
    icon: '🎨',
    title: 'Design Exclusivo',
    description: 'Visual profissional que transmite confiança:',
    features: [
      'Layout personalizado',
      'Mobile-first design',
      'Fotos profissionais',
      'Vídeos institucionais',
      'Identidade visual única',
      'Animações premium',
    ],
  },
  {
    icon: '🔄',
    title: 'Automação Completa',
    description: 'Processos automatizados para crescimento:',
    features: [
      'CRM integrado',
      'Follow-up automático',
      'Lembretes de consulta',
      'Pesquisa de satisfação',
      'Recuperação de pacientes',
      'Programa de indicações',
    ],
  },
  {
    icon: '📊',
    title: 'Resultados Mensuráveis',
    description: 'Acompanhe cada centavo investido:',
    features: [
      'Dashboard em tempo real',
      'ROI transparente',
      'Métricas de conversão',
      'Análise de custos',
      'Projeções futuras',
      'Relatórios personalizados',
    ],
  },
  {
    icon: '🛡️',
    title: 'Proteção Digital',
    description: 'Segurança e conformidade garantidas:',
    features: [
      'Certificado SSL',
      'Backup automático',
      'Conformidade LGPD',
      'Proteção contra hackers',
      'Monitoramento 24h',
      'Suporte técnico VIP',
    ],
  },
  {
    icon: '🎓',
    title: 'Educação do Paciente',
    description: 'Conteúdo que qualifica e convence:',
    features: [
      'Blog especializado',
      'Vídeos explicativos',
      'Infográficos profissionais',
      'E-books gratuitos',
      'Newsletter educativa',
      'FAQ interativo',
    ],
  },
]

export const timelineSection: TimelineData = {
  title: 'Em Apenas 4 Semanas, Seu Consultório Digital',
  steps: [
    {
      icon: '🎯',
      title: 'Análise e Planejamento',
      description:
        'Mapeamento completo da sua presença digital e desenvolvimento da estratégia personalizada.',
      details: [
        'Auditoria técnica completa do seu site atual',
        'Análise da concorrência local no Google',
        'Mapeamento de palavras-chave estratégicas',
        'Planejamento de conteúdo personalizado',
        'Definição de metas mensuráveis',
        'Criação do plano de ação detalhado',
      ],
      bonus: 'Relatório exclusivo de oportunidades digitais no seu território',
    },
    {
      icon: '🎨',
      title: 'Design e Desenvolvimento',
      description:
        'Criação do seu novo site otimizado para conversão de pacientes.',
      details: [
        'Design exclusivo para seu consultório',
        'Otimização para dispositivos móveis',
        'Integração com sistemas de agendamento',
        'Implementação de chat automático',
        'Configuração de formulários inteligentes',
        'Área de depoimentos e casos clínicos',
      ],
      bonus: 'Sessão profissional de fotos para seu consultório',
    },
    {
      icon: '🚀',
      title: 'Otimização e Lançamento',
      description: 'Preparação técnica e lançamento estratégico do seu site.',
      details: [
        'Otimização SEO avançada',
        'Configuração do Google Meu Negócio',
        'Integração com redes sociais',
        'Implementação de pixels de rastreamento',
        'Testes A/B de conversão',
        'Configuração de analytics avançado',
      ],
      bonus: '3 meses de otimização SEO gratuita',
    },
    {
      icon: '📈',
      title: 'Crescimento e Otimização',
      description:
        'Início da captação ativa de pacientes e otimização contínua.',
      details: [
        'Monitoramento de resultados em tempo real',
        'Ajustes baseados em dados',
        'Implementação de automações',
        'Treinamento da sua equipe',
        'Relatórios semanais de performance',
        'Estratégias de crescimento contínuo',
      ],
      bonus: 'Dashboard exclusivo de resultados',
    },
  ],
}

export const soluctionSection: SoluctionSectionData = {
  title: 'Apresentamos: Seu Consultório Digital',
  description: `Um sistema completo de presença digital projetado especificamente para consultórios
          odontológicos que querem crescer com pacientes particulares.`,
  solutions,
}
