<template>
  <HeaderNavigation></HeaderNavigation>
  <ServiceBanner
    title="Outros Serviços"
    description="Nós te entendemos, por isso temos serviços especializados que serão uma vantagem estratégica pra te ajudar a alcançar melhores resultados financeiros, nossa equipe está pronta pra impulsionar o sucesso da sua empresa."
  />
  <ServicesGrid></ServicesGrid>
  <ClientsCarousel
    title="Conheça as empresas que com a nossa ajuda, já tem um resultado financeiro claro:"
  ></ClientsCarousel>
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
import ClientsCarousel from '../../templates/ClientsCarousel.vue'
import ServicesGrid from '../../templates/ServicesGrid.vue'
import Metrics from '../../templates/Metrics.vue'
import Billboard from '../../templates/Billboard.vue'
import Footer from '../../templates/Footer.vue'

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
