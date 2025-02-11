// src/components/SolutionSection.tsx
import React from 'react'

export interface Solution {
  icon: string
  title: string
  description: string
  features: string[]
}

export interface SoluctionSectionData {
  title: string
  description: string
  solutions: Solution[]
}

interface Props {
  data: SoluctionSectionData
}

const SolutionSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="bg-gray-100 py-20 text-black">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold">{data.title}</h2>
          <p className="text-xl text-gray-600">{data.description}</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {data.solutions.map((solution, index) => (
            <div key={index} className="rounded-xl bg-white p-8 shadow-lg">
              <div className="mb-6 text-5xl">{solution.icon}</div>
              <h3 className="mb-4 text-xl font-bold text-blue-900">
                {solution.title}
              </h3>
              <p className="mb-6 text-gray-600">{solution.description}</p>
              <ul className="space-y-3">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 text-green-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionSection

const solutions: Solution[] = [
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
