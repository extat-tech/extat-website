<template>
  <HeaderNavigation></HeaderNavigation>
  <ServiceBanner
    title="Indicadores e Métricas Chave"
    subtitle="Com nossa expertise em indicadores e métricas chave, fornecemos relatórios financeiros personalizados sob demanda para o seu negócio. Mantenha-se informado e tome decisões estratégicas com base em dados precisos e relevantes."
  />
  <Logos title="Conheça as empresas que com a nossa ajuda, conseguem ter um resultado financeiro claro" />
  <CompanyFeatures
    title="Metodologia"
    description="Na nossa jornada em direção ao sucesso empresarial, reconhecemos que alguns pilares são fundamentais para sustentar o crescimento, a estabilidade e a rentabilidade de qualquer negócio."
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
</script>
