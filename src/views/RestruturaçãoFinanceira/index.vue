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
    description: 'Avaliação detalhada das finanças da empresa para identificar pontos fortes, fraquezas, oportunidades e ameaças, oferecendo uma visão clara da situação financeira atual.',
    icon: 'pi pi-eye'
  },
  {
    title: 'Diagnóstico da Gestão',
    description: 'Análise dos processos e práticas de gestão da empresa para identificar ineficiências e áreas de melhoria, garantindo uma base sólida para a reestruturação.',
    icon: 'pi pi-wallet'
  },
  {
    title: 'Elaboração do Plano Financeiro',
    description: 'Desenvolvimento de um plano estratégico que inclui metas financeiras, orçamentos e ações específicas para melhorar a saúde financeira da empresa.',
    icon: 'pi pi-arrow-up-right-and-arrow-down-left-from-center'
  },
  {
    title: 'Nova Visão da Empresa a partir dos Resultados',
    description: 'Redefinição dos objetivos e estratégias da empresa com base nos resultados do diagnóstico, criando uma visão renovada e alinhada às novas metas financeiras.',
    icon: 'pi pi-arrows-alt'
  },
  {
    title: 'Elaboração dos Fluxos de Trabalho',
    description: 'Desenho e implementação de fluxos de trabalho otimizados para garantir eficiência operacional e melhor controle financeiro, alinhados às metas estabelecidas.',
    icon: 'pi pi-arrows-alt'
  }
];

</script>
