<template>
  <HeaderNavigation></HeaderNavigation>
  <ServiceBanner
    title="Indicadores e Métricas Chave"
    description="Com nossa expertise em indicadores e métricas chave, fornecemos relatórios financeiros personalizados sob demanda para o seu negócio. Mantenha-se informado e tome decisões estratégicas com base em dados precisos e relevantes."
  />
  <Logos title="Conheça as empresas que com a nossa ajuda, conseguem ter um resultado financeiro claro" />
  <CompanyFeatures
    title="Metodologia"
    description="Na nossa jornada em direção ao sucesso empresarial, reconhecemos que alguns pilares são fundamentais para sustentar o crescimento, a estabilidade e a rentabilidade de qualquer negócio."
    :items="methodology"
  />
  <FeaturedServices
    title="Outros serviços"
    description="Na nossa jornada em direção ao sucesso empresarial, reconhecemos que alguns pilares são fundamentais para sustentar o crescimento, a estabilidade e a rentabilidade de qualquer negócio."
    :serviceList="otherServices"
  />
  <Metrics />
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
    title: 'Reestruturação Financeira',
    description: 'Oferecemos Reestruturação Financeira completa, incluindo diagnóstico financeiro, análise de mercado, planejamento financeiro e estruturação de fluxos de trabalho. Nosso objetivo é impulsionar o seu negócio com resultados tangíveis.',
    icon: 'pi pi-arrow-right',
    to: 'consultoria-financeira'
  },
  {
    title: 'Treinamentos e Capacitação',
    description: 'Capacite sua equipe para enfrentar os desafios financeiros do mercado atual com nossos programas de treinamento e capacitação. Oferecemos cursos especializados para aprimorar as habilidades financeiras de sua equipe e prepará-la para o sucesso em um ambiente competitivo.',
    icon: 'pi pi-arrow-right',
    to: 'treinamentos-capacitacao'
  }
]

const methodology = [
  {
    title: 'Identificação de Indicadores Relevantes',
    description: 'Colaboração com a empresa para identificar os indicadores-chave de desempenho (KPIs) mais relevantes para seu setor e objetivos específicos.',
    icon: 'pi pi-eye'
  },
  {
    title: 'Desenvolvimento de Relatórios Personalizados',
    description: 'Criação de relatórios financeiros personalizados que apresentem os indicadores e métricas mais importantes de forma clara e acessível.',
    icon: 'pi pi-file-o'
  },
  {
    title: 'Análise e Interpretação de Dados',
    description: 'Análise profunda dos dados financeiros para extrair insights valiosos e tomar decisões estratégicas embasadas.',
    icon: 'pi pi-search'
  },
  {
    title: 'Monitoramento Contínuo',
    description: 'Estabelecimento de um sistema de monitoramento regular dos indicadores financeiros para acompanhar o progresso em relação às metas estabelecidas.',
    icon: 'pi pi-clock'
  }
];

</script>
