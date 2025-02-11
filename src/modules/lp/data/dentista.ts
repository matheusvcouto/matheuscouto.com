import {
  HeroSectionProps,
  ProblemSectionData,
  SoluctionSectionData,
  Solution,
  TimelineData,
} from '~/modules/lp/sections'

export const heroSection: HeroSectionProps = {
  top: {
    title: 'Destaque Seu Consultório na Era Digital',
    subtitle: 'Um site profissional que atrai mais pacientes para você',
    alertText: 'Seu consultório pode estar invisível para novos pacientes',
  },
  paragraphs: [
    'Hoje, 89% dos pacientes particulares iniciam sua busca por um dentista no Google. Estar bem posicionado online significa estar à frente da concorrência.',
    'Enquanto você atende seus pacientes, outros estão buscando exatamente os serviços que você oferece. Ter um site otimizado garante que eles encontrem você primeiro.',
    'A presença digital deixou de ser um diferencial para se tornar essencial. Seu consultório está preparado para essa nova realidade?',
  ],
  button: {
    text: 'QUERO UM SITE PARA MEU CONSULTÓRIO',
  },
  availableText: 'Apenas 3 vagas disponíveis esta semana',
}

export const problemSection: ProblemSectionData = {
  title: 'Por que Ter um Site é Essencial para Seu Consultório?',
  description: `O comportamento dos pacientes mudou. Hoje, a maioria pesquisa online antes de escolher um dentista. Sem um site profissional, seu consultório pode estar perdendo oportunidades valiosas.`,
  problemBlocks: [
    {
      title: 'O Marketing Tradicional Está Perdendo Força',
      description:
        'As estratégias convencionais de captação de pacientes estão cada vez menos eficazes:',
      items: [
        'O boca-a-boca tem alcance limitado',
        'As redes sociais estão saturadas e exigem investimentos constantes',
        'Panfletos e outdoors raramente trazem novos pacientes',
        'As indicações são imprevisíveis',
      ],
    },
    {
      title: 'A Concorrência Está Se Adaptando Rápido',
      description: 'Consultórios que investem em presença digital estão: ',
      items: [
        'Aparecendo no topo das buscas no Google',
        'Conquistando novos pacientes com conteúdo relevante',
        'Convertendo visitas em agendamentos automaticamente',
        'Construindo uma imagem de autoridade no mercado',
      ],
      icon: 'check',
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
    icon: '👑',
    title: 'Presença Digital de Destaque',
    description: 'Destaque seu consultório como referência na sua região:',
    features: [
      'Posicionamento estratégico no Google',
      'Depoimentos autênticos',
      'Exibição de casos clínicos',
      'Perfil profissional otimizado',
      'Certificações em evidência',
    ],
  },
  {
    icon: '🎨',
    title: 'Design Exclusivo e Funcional',
    description: 'Um visual moderno e profissional que transmite confiança:',
    features: [
      'Layout personalizado',
      'Design responsivo (mobile-first)',
      'Imagens e vídeos de alta qualidade',
      'Identidade visual consistente',
      'Elementos de design atraentes',
    ],
  },
  {
    icon: '🛡️',
    title: 'Segurança e Confiabilidade',
    description: 'Proteja seu ambiente digital com tecnologia avançada:',
    features: [
      'Certificado SSL',
      'Backup automático',
      'Conformidade com LGPD',
      'Proteção contra ameaças',
      'Monitoramento contínuo',
      'Suporte técnico dedicado',
    ],
  },
]

export const timelineSection: TimelineData = {
  title: 'Seu Consultório Online em 2 Semanas',
  steps: [
    {
      icon: '🎨',
      title: 'Design e Desenvolvimento',
      description:
        'Elaboração de um site moderno e intuitivo, preparado para atrair e converter pacientes.',
      details: [
        'Design personalizado para seu consultório',
        'Otimização para dispositivos móveis',
        'Integração com sistemas de agendamento',
        'Implementação de chat online',
        'Configuração de formulários inteligentes',
        'Espaço para depoimentos e casos de sucesso',
      ],
    },
    {
      icon: '🚀',
      title: 'Otimização e Lançamento',
      description:
        'Aprimoramento técnico e lançamento estratégico para maximizar sua visibilidade online.',
      details: [
        'Otimização SEO para melhor posicionamento',
        'Configuração do Google Meu Negócio (opcional)',
        'Integração com redes sociais (opcional)',
        'Implementação de pixels de rastreamento (opcional)',
      ],
      bonus: 'Inclui 3 meses de suporte em otimização SEO',
    },
  ],
}

export const soluctionSection: SoluctionSectionData = {
  title: 'Conheça: Seu Consultório Digital',
  description: `Uma solução completa para construir uma presença online robusta e atrativa,
    desenvolvida especialmente para consultórios odontológicos que desejam crescer com pacientes particulares.`,
  solutions,
}
