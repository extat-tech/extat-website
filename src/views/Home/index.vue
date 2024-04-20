<template>
  <HeaderNavigation></HeaderNavigation>
  <Banner
    :title="contentBanner.title"
    :description="contentBanner.description"
  />
  <SocialProof title="Conheça as empresas que com a nossa ajuda, conseguem ter um resultado financeiro claro" />
  <FeaturedServices
    id="anchorScroll"
    title="Nossos serviços em destaque"
    description="Na nossa jornada em direção ao sucesso empresarial, reconhecemos que alguns pilares são fundamentais para sustentar o crescimento, a estabilidade e a rentabilidade de qualquer negócio."
    :serviceList="featuredServices"
  />
  <Testimonial
    quote="A Extat foi fundamental para a saúde financeira do meu negócio."
    client="Jozerly Junior"
    role="Diretor Executivo, Bio Data Ltda."
  />
  <CompanyFeatures
    title="Nossos pilares para o sucesso estratégico"
    description="Na nossa jornada em direção ao sucesso empresarial, reconhecemos que alguns pilares são fundamentais para sustentar o crescimento, a estabilidade e a rentabilidade de qualquer negócio. "
  ></CompanyFeatures>
  <Billboard
    title="Faça as melhores decisões para o seu negócio"
    description="Explore nossa expertise e produtos e saiba como ajudamos diferentes empresas com sucesso. Ou entre em contato conosco para agendar uma ligação introdutória."
  ></Billboard>
  <Footer></Footer>
</template>

<script setup>
import { contentBanner } from '../../utils/language'
import Banner from '../../templates/Banner.vue'
import HeaderNavigation from '../../templates/HeaderNavigation.vue'
import SocialProof from '../../templates/SocialProof.vue'
import FeaturedServices from '../../templates/FeaturedServices.vue'
import Testimonial from '../../templates/Testimonial.vue'
import CompanyFeatures from '../../templates/CompanyFeatures.vue'
import Billboard from '../../templates/Billboard.vue'
import Footer from '../../templates/Footer.vue'

defineOptions({
  name: 'home-view'
})


const featuredServices = [
  {
    title: 'Consultoria Financeira',
    description: 'Organize, entenda os números e crie processos confiáveis.',
    icon: 'pi pi-arrow-right',
    to: 'service/consultoria-financeira'
  },
  {
    title: 'Indicadores e Métricas Chave',
    description: 'Crie relatórios financeiros sob demanda para o seu negócio',
    icon: 'pi pi-arrow-right',
    to: 'service/indicadores-metricas'
  },
  {
    title: 'Treinamentos e Capacitação',
    description: 'Capacite sua equipe para os desafios financeiros do mercado atual.',
    icon: 'pi pi-arrow-right',
    to: 'service/treinamentos-capacitacao'
  }
]
</script>
