<template>
  <HeaderNavigation></HeaderNavigation>
  <Banner
    :title="contentBanner.title"
    :description="contentBanner.description"
  />
  <ProblemStatement
  title="Identificou algum destes problemas no setor financeiro da sua empresa?"
  :problemList="problems"
  description="Se a resposta foi sim para algum destes problemas, então está na hora de organizar seu financeiro."
/>

  <Logos
    title="Conheça as empresas que com a nossa ajuda, conseguem ter um resultado financeiro claro"
  />

  <FeaturedServices
    id="anchorScroll"
    title="Como podemos te ajudar?"
    description="Explore como nossos serviços especializados podem ser uma vantagem estratégica para alcançar seus objetivos financeiros. Nossa equipe está pronta para colaborar com você para impulsionar o sucesso de sua empresa."
    :serviceList="featuredServices"
  />
  <CompanyFeatures
  title="Nossos pilares para o sucesso estratégico"
  description="Na nossa jornada em direção ao sucesso empresarial, reconhecemos que alguns pilares são fundamentais para sustentar o crescimento, a estabilidade e a rentabilidade de qualquer negócio. "
  :items="pilars"
  ></CompanyFeatures>
  <Testimonial
    quote="A Extat revolucionou a forma como gerencio as finanças da minha empresa."
    client="Jozerly Junior"
    role="Diretor Executivo, Bio Data Ltda."
  />
  <Billboard
    title="Faça as melhores decisões para o seu negócio"
    description="Explore nossa expertise e produtos e saiba como ajudamos diferentes empresas com sucesso. Ou entre em contato conosco para agendar uma ligação introdutória."
  ></Billboard>
  <Footer></Footer>
</template>

<script setup>
import { contentBanner } from '../../utils/language'
import HeaderNavigation from '../../templates/HeaderNavigation.vue'
import Banner from '../../templates/Banner.vue'
import ProblemStatement from '../../templates/ProblemStatement.vue'
import Logos from '../../templates/Logos.vue'
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
    title: 'Reestruturação Financeira',
    description:
      'Oferecemos Reestruturação Financeira completa, incluindo diagnóstico financeiro, análise de mercado, planejamento financeiro e estruturação de fluxos de trabalho. Nosso objetivo é impulsionar o seu negócio com resultados tangíveis.',
    icon: 'pi pi-arrow-right',
    to: 'service/consultoria-financeira'
  },
  {
    title: 'Indicadores e Métricas Chave',
    description:
      'Com nossa expertise em indicadores e métricas chave, fornecemos relatórios financeiros personalizados sob demanda para o seu negócio. Mantenha-se informado e tome decisões estratégicas com base em dados precisos e relevantes.',
    icon: 'pi pi-arrow-right',
    to: 'service/indicadores-metricas'
  },
  {
    title: 'Treinamentos e Capacitação',
    description:
      'Capacite sua equipe para enfrentar os desafios financeiros do mercado atual com nossos programas de treinamento e capacitação. Oferecemos cursos especializados para aprimorar as habilidades financeiras de sua equipe e prepará-la para o sucesso em um ambiente competitivo.',
    icon: 'pi pi-arrow-right',
    to: 'service/treinamentos-capacitacao'
  }
]

const problems = [
    { title: 'Desorganização financeira', icon: 'pi pi-times' },
    { title: 'Atrasos nos pagamentos', icon: 'pi pi-times' },
    { title: 'Falhas na gestão de recebíveis', icon: 'pi pi-times' },
    { title: 'Dificuldade em interpretar resultados mensais', icon: 'pi pi-times' }
  ]

const pilars = [
  {
    title: 'Clareza',
    description: 'Organizar, entender os números e criar processos confiáveis.',
    icon: 'pi pi-eye'
  },
  {
    title: 'Rentabilidade',
    description:
      'Reduzir despesas, interpretar custos e definir preços corretamente.',
    icon: 'pi pi-wallet'
  },
  {
    title: 'Expansão',
    description: 'Gerenciar endividamentos ou captar recursos para crescer',
    icon: 'pi pi-arrow-up-right-and-arrow-down-left-from-center'
  },
  {
    title: 'Direcionamento',
    description: 'Definir a melhor rota com um planejamento estratégico.',
    icon: 'pi pi-arrows-alt'
  },
  {
    title: 'Estabilidade',
    description: 'Fortalecer o caixa e a solidez da sua empresa.',
    icon: 'pi pi-chart-bar'
  }
]
</script>
