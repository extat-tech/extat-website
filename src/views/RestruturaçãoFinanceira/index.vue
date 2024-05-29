<template>
  <HeaderNavigation></HeaderNavigation>
  <ServiceBanner
    title="Reestruturação Financeira"
    description="Oferecemos Reestruturação Financeira completa, incluindo diagnóstico financeiro, análise de mercado, planejamento financeiro e estruturação de fluxos de trabalho. Nosso objetivo é impulsionar o seu negócio com resultados tangíveis."
  />
  <ClientsCarousel
    title="Conheça as empresas que com a nossa ajuda, já tem um resultado financeiro claro:"
  ></ClientsCarousel>
  <CompanyFeatures
  title="Metodologia"
  description="Na nossa jornada em direção ao sucesso empresarial, reconhecemos que alguns pilares são fundamentais para sustentar o crescimento, a estabilidade e a rentabilidade de qualquer negócio."
  :items="methodology"
  />
  <Metrics />
  <section class="px-6 py-24 flex flex-col justify-center bg-brand-50 items-center">
    <div class=" flex w-full max-w-screen-xl flex-col gap-10 ">
      <h4 class="font-medium text-left text-xl">Outros Serviços</h4>
      <ServiceCarousel/>
    </div>
  </section>
  <Billboard
    title="Tome melhores decisões para sua empresa."
    description="Conte com nossa expertise e saiba como ajudamos diferentes empresas a ter melhores resultados, entre em contato agora conosco para agendar uma consultoria gratuita. "
  />
  <Footer />
</template>

<script setup>
import HeaderNavigation from '../../templates/HeaderNavigation.vue'
import ServiceBanner from '../../templates/ServiceBanner.vue'
import ClientsCarousel from '../../templates/ClientsCarousel.vue'
import ServiceCarousel from '../../templates/ServiceCarousel.vue'
import CompanyFeatures from '../../templates/CompanyFeatures.vue'
import Metrics from '../../templates/Metrics.vue'
import Billboard from '../../templates/Billboard.vue'
import Footer from '../../templates/Footer.vue'

const methodology = [
  {
    title: 'Diagnóstico Financeiro',
    description:
      'Avaliação detalhada das finanças da empresa para identificar pontos fortes, fraquezas, oportunidades e ameaças, oferecendo uma visão clara da situação financeira atual.',
    icon: 'pi pi-eye'
  },
  {
    title: 'Diagnóstico da Gestão',
    description:
      'Análise dos processos e práticas de gestão da empresa para identificar ineficiências e áreas de melhoria, garantindo uma base sólida para a reestruturação.',
    icon: 'pi pi-wallet'
  },
  {
    title: 'Elaboração do Plano Financeiro',
    description:
      'Desenvolvimento de um plano estratégico que inclui metas financeiras, orçamentos e ações específicas para melhorar a saúde financeira da empresa.',
    icon: 'pi pi-arrow-up-right-and-arrow-down-left-from-center'
  },
  {
    title: 'Nova visão a partir dos Resultados',
    description:
      'Redefinição dos objetivos e estratégias da empresa com base nos resultados do diagnóstico, criando uma visão renovada e alinhada às novas metas financeiras.',
    icon: 'pi pi-arrows-alt'
  },
  {
    title: 'Elaboração dos Fluxos de Trabalho',
    description:
      'Desenho e implementação de fluxos de trabalho otimizados para garantir eficiência operacional e melhor controle financeiro, alinhados às metas estabelecidas.',
    icon: 'pi pi-arrows-alt'
  }
]
</script>
