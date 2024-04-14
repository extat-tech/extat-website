<template>
  <HeaderNavigation></HeaderNavigation>
  <ServiceBanner
    title="Consultoria Financeira"
    subtitle="Organize, entenda os números e crie processos confiáveis."
  />
  <SocialProof title="Junte-se a mais de 100 empresas que já estão crescendo" />
  <CompanyFeatures
    title="Metodologia"
    description="Na nossa jornada em direção ao sucesso empresarial, reconhecemos que alguns pilares são fundamentais para sustentar o crescimento, a estabilidade e a rentabilidade de qualquer negócio."
  />
  <FeaturedServices
    title="Outros serviços"
    description="Na nossa jornada em direção ao sucesso empresarial, reconhecemos que alguns pilares são fundamentais para sustentar o crescimento, a estabilidade e a rentabilidade de qualquer negócio."
    :serviceList="featuredServices"
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
import SocialProof from '../../templates/SocialProof.vue'
import CompanyFeatures from '../../templates/CompanyFeatures.vue'
import FeaturedServices from '../../templates/FeaturedServices.vue'
import Metrics from '../../templates/Metrics.vue'
import Billboard from '../../templates/Billboard.vue'
import Footer from '../../templates/Footer.vue'

const featuredServices = [
  {
    title: 'Indicadores e Métricas Chave',
    description: 'Crie relatórios financeiros sob demanda para o seu negócio',
    icon: 'pi pi-arrow-right'
  },
  {
    title: 'Treinamentos e Capacitação',
    description:
      'Capacite sua equipe para os desafios financeiros do mercado atual.',
    icon: 'pi pi-arrow-right'
  }
]
</script>
