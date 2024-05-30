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
  <ClientsCarousel title="Conheça as empresas que com a nossa ajuda, já tem um resultado financeiro claro:"></ClientsCarousel>
  <FeaturedServices
    id="anchorScroll"
    title="Como podemos te ajudar?"
    description="Nós te entendemos, por isso temos serviços especializados que serão uma vantagem estratégica pra te ajudar a alcançar melhores resultados financeiros, nossa equipe está pronta pra impulsionar o sucesso da sua empresa."
    :serviceList="featuredServices"
  />
  <CompanyFeatures
  title="Nossos pilares para o sucesso estratégico"
  description="Na nossa jornada em direção ao sucesso empresarial, reconhecemos que alguns pilares são fundamentais para sustentar o crescimento, a estabilidade e a rentabilidade de qualquer negócio. "
  :items="pilars"
  ></CompanyFeatures>
  <Testimonial
    quote="O Centro de Movimento Soraya Lira (CMSL) enfrentava uma grande crise e estava à beira do fechamento, mas, com a orientação financeira de Jozerly Júnior da Extat, reorganizou sua estrutura em três anos e se recuperou, tornando-se um sucesso. A confiança na gestão de Jozerly foi crucial para superar a crise, mesmo durante a pandemia."
    client="Soraya Lira"
    role="Sócia proprietária, Centro de Movimento Soraya Lira."
    image="/client.png"
  />
  <Billboard
    title="Tome melhores decisões para sua empresa."
    description="Conte com nossa expertise e saiba como ajudamos diferentes empresas a ter melhores resultados, entre em contato agora conosco para agendar uma consultoria gratuita."
  ></Billboard>
  <Footer></Footer>
</template>

<script setup>
import { contentBanner } from '../../utils/language'
import ClientsCarousel from '../../templates/ClientsCarousel.vue';
import HeaderNavigation from '../../templates/HeaderNavigation.vue'
import Banner from '../../templates/Banner.vue'
import ProblemStatement from '../../templates/ProblemStatement.vue'
import FeaturedServices from '../../templates/FeaturedServices.vue'
import Testimonial from '../../templates/Testimonial.vue'
import CompanyFeatures from '../../templates/CompanyFeatures.vue'
import Billboard from '../../templates/Billboard.vue'
import Footer from '../../templates/Footer.vue'

defineOptions({
  name: 'home-view'
})

const problems = [
    { title: 'Desorganização financeira', icon: 'pi pi-times' },
    { title: 'Atrasos nos pagamentos', icon: 'pi pi-times' },
    { title: 'Falhas na gestão de recebíveis', icon: 'pi pi-times' },
    { title: 'Dificuldade em interpretar resultados mensais', icon: 'pi pi-times' }
  ]

  const pilars = [
  {
    title: 'Transparência e Clareza',
    description: 'Fornecer informações financeiras claras para decisões informadas, garantindo transparência em todos os dados.',
    icon: 'pi pi-eye' 
  },
  {
    title: 'Expertise Financeira',
    description: 'Contar com consultores experientes para oferecer soluções precisas e baseadas em profundo conhecimento.',
    icon: 'pi pi-wallet' 
  },
  {
    title: 'Inovação e Tecnologia',
    description: 'Utilizar ferramentas e tecnologias avançadas para aumentar a eficiência e fornecer soluções modernas.',
    icon: 'pi pi-code' 
  },
  {
    title: 'Personalização do Serviço',
    description: 'Definir a melhor rota com um planejamento estratégico.',
    icon: 'pi pi-user-edit' 
  },
  {
    title: 'Educação e Capacitação',
    description: 'Capacitar clientes continuamente, empoderando-os para manter a saúde financeira a longo prazo.',
    icon: 'pi pi-book' 
  },
  {
    title: 'Parceria e Colaboração',
    description: 'Trabalhar junto aos clientes para implementar soluções, construindo relacionamentos de confiança e parceria.',
    icon: 'pi pi-users' 
  },
  {
    title: 'Resultados Mensuráveis',
    description: 'Focar em resultados tangíveis e mensuráveis, demonstrando impacto claro e melhoria no desempenho financeiro.',
    icon: 'pi pi-chart-line'
  }
];

</script>
