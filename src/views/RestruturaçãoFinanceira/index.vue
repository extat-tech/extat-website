<template>
  <HeaderNavigation></HeaderNavigation>
  <ServiceBanner
    title="Reestruturação Financeira"
    description="Oferecemos Reestruturação Financeira completa, incluindo diagnóstico financeiro, análise de mercado, planejamento financeiro e estruturação de fluxos de trabalho. Nosso objetivo é impulsionar o seu negócio com resultados tangíveis."
  />
  <Logos title="Conheça as empresas que com a nossa ajuda, conseguem ter um resultado financeiro claro" />
  <CompanyFeatures
    title="Metodologia"
    description="Na nossa jornada em direção ao sucesso empresarial, reconhecemos que alguns pilares são fundamentais para sustentar o crescimento, a estabilidade e a rentabilidade de qualquer negócio."
    :items="methodology"
    />
  <Metrics />
  <FeaturedServices
    title="Outros serviços"
    description="Na nossa jornada em direção ao sucesso empresarial, reconhecemos que alguns pilares são fundamentais para sustentar o crescimento, a estabilidade e a rentabilidade de qualquer negócio."
    :serviceList="otherServices"
  />
  <Billboard
    title="Faça as melhores decisões para o seu negócio"
    description="Explore nossa expertise e produtos e saiba como ajudamos diferentes empresas com sucesso. Ou entre em contato conosco para agendar uma ligação introdutória."
  />
  <Footer />
</template>

<script setup>
import HeaderNavigation from '../../templates/HeaderNavigation.vue'
import ServiceBanner from '../../templates/ServiceBanner.vue'
import Logos from '../../templates/Logos.vue'
import CompanyFeatures from '../../templates/CompanyFeatures.vue'
import FeaturedServices from '../../templates/FeaturedServices.vue'
import Metrics from '../../templates/Metrics.vue'
import Billboard from '../../templates/Billboard.vue'
import Footer from '../../templates/Footer.vue'

const otherServices = [
  {
    title: 'Indicadores e Métricas Chave',
    description: 'Crie relatórios financeiros sob demanda para o seu negócio',
    icon: 'pi pi-arrow-right',
    to: 'indicadores-metricas'
  },
  {
    title: 'Treinamentos e Capacitação',
    description: 'Capacite sua equipe para os desafios financeiros do mercado atual.',
    icon: 'pi pi-arrow-right',
    to: 'treinamentos-capacitacao'
  }
]

const methodology = [
  {
    title: 'Diagnóstico Financeiro',
    description: 'Análise detalhada das finanças atuais da empresa, incluindo balanços, demonstrações de resultados e fluxo de caixa. Identificação de áreas de oportunidade e pontos fracos na estrutura financeira.',
    icon: 'pi pi-eye'
  },
  {
    title: 'Análise de Mercado',
    description: 'Avaliação do cenário econômico e competitivo no qual a empresa está inserida. Identificação de tendências de mercado e potenciais ameaças e oportunidades.',
    icon: 'pi pi-wallet'
  },
  {
    title: 'Planejamento Financeiro',
    description: 'Desenvolvimento de um plano estratégico para alcançar os objetivos financeiros da empresa. Definição de metas claras e mensuráveis, juntamente com a identificação de recursos necessários para alcançá-las.',
    icon: 'pi pi-arrow-up-right-and-arrow-down-left-from-center'
  },
  {
    title: 'Estruturação de Fluxos de Trabalho',
    description: 'Revisão e otimização dos processos financeiros existentes para garantir eficiência e eficácia. Implementação de sistemas e ferramentas para melhorar a gestão financeira da empresa.',
    icon: 'pi pi-arrows-alt'
  }
];


</script>
