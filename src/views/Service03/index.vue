<template>
  <HeaderNavigation></HeaderNavigation>
  <ServiceBanner
    title="Treinamentos e Capacitação"
    subtitle="Capacite sua equipe para enfrentar os desafios financeiros do mercado atual com nossos programas de treinamento e capacitação. Oferecemos cursos especializados para aprimorar as habilidades financeiras de sua equipe e prepará-la para o sucesso em um ambiente competitivo."
  />
  <SocialProof title="Junte-se a mais de 100 empresas que já estão crescendo" />
  <CompanyFeatures
    title="Metodologia"
    description="Na nossa jornada em direção ao sucesso empresarial, reconhecemos que alguns pilares são fundamentais para sustentar o crescimento, a estabilidade e a rentabilidade de qualquer negócio."
  />
  <Metrics />
  <FeaturedServices
    title="Outros serviços"
    description="Na nossa jornada em direção ao sucesso empresarial, reconhecemos que alguns pilares são fundamentais para sustentar o crescimento, a estabilidade e a rentabilidade de qualquer negócio."
    :serviceList="featuredServices"
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
import SocialProof from '../../templates/SocialProof.vue'
import CompanyFeatures from '../../templates/CompanyFeatures.vue'
import FeaturedServices from '../../templates/FeaturedServices.vue'
import Metrics from '../../templates/Metrics.vue'
import Billboard from '../../templates/Billboard.vue'
import Footer from '../../templates/Footer.vue'

const featuredServices = [
  {
    title: 'Indicadores e Métricas Chave',
    description: 'Com nossa expertise em indicadores e métricas chave, fornecemos relatórios financeiros personalizados sob demanda para o seu negócio. Mantenha-se informado e tome decisões estratégicas com base em dados precisos e relevantes.',
    icon: 'pi pi-arrow-right',
    to: 'indicadores-metricas'
  },
  {
    title: 'Treinamentos e Capacitação',
    description: 'Capacite sua equipe para enfrentar os desafios financeiros do mercado atual com nossos programas de treinamento e capacitação. Oferecemos cursos especializados para aprimorar as habilidades financeiras de sua equipe e prepará-la para o sucesso em um ambiente competitivo.',
    icon: 'pi pi-arrow-right',
    to: 'treinamentos-capacitacao'
  }
]
</script>
