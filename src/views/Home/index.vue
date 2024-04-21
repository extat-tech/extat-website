<template>
  <HeaderNavigation></HeaderNavigation>
  <Banner
    :title="contentBanner.title"
    :description="contentBanner.description"
  />
  <SocialProof title="Conheça as empresas que com a nossa ajuda, conseguem ter um resultado financeiro claro" />
  <FeaturedServices
    id="anchorScroll"
    title="Como podemos te ajudar?"
    description="Explore como nossos serviços especializados podem ser uma vantagem estratégica para alcançar seus objetivos financeiros. Nossa equipe está pronta para colaborar com você para impulsionar o sucesso de sua empresa."
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
    description: 'Oferecemos consultoria financeira completa, incluindo diagnóstico financeiro, análise de mercado, planejamento financeiro e estruturação de fluxos de trabalho. Nosso objetivo é impulsionar o seu negócio com resultados tangíveis.',
    icon: 'pi pi-arrow-right',
    to: 'service/consultoria-financeira'
  },
  {
    title: 'Indicadores e Métricas Chave',
    description: 'Com nossa expertise em indicadores e métricas chave, fornecemos relatórios financeiros personalizados sob demanda para o seu negócio. Mantenha-se informado e tome decisões estratégicas com base em dados precisos e relevantes.',
    icon: 'pi pi-arrow-right',
    to: 'service/indicadores-metricas'
  },
  {
    title: 'Treinamentos e Capacitação',
    description: 'Capacite sua equipe para enfrentar os desafios financeiros do mercado atual com nossos programas de treinamento e capacitação. Oferecemos cursos especializados para aprimorar as habilidades financeiras de sua equipe e prepará-la para o sucesso em um ambiente competitivo.',
    icon: 'pi pi-arrow-right',
    to: 'service/treinamentos-capacitacao'
  }
]
</script>
