<template>
  <section class="px-6 py-24 xl:px-16 flex flex-col justify-center items-center bg-brand-50">
    <!-- Container -->
    <div class="flex flex-col gap-10 max-w-7xl items-center w-full">
      <!-- Texts -->
      <div class="grid w-full justify-between gap-6 lg:gap-10">
        <h2 class="text-brand-950 w-full lg:max-w-3xl md:text-4xl text-2xl font-medium">
          {{ title }}
        </h2>
        <p class="mc:text-xl w-full max-w-[592px] text-lg text-gray-950/70">
          {{ description }}
        </p>
      </div>
      <!-- Main Card -->
      <router-link to="/service/consultoria-financeira"
        class=" mt-20 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-brand-950 group w-full p-6 md:p-10 cursor-pointer bg-white hover:bg-brand-700 transition-all flex flex-col justify-between">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-32">
          <div class="space-y-5 w-full">
            <h3 class="text-brand-900 group-hover:text-white text-xl md:text-2xl font-medium">
              Reestruturação Financeira
            </h3>
            <p class="text-gray-950/70 group-hover:text-white text-sm md:text-base">
              Oferecemos Reestruturação Financeira completa, incluindo
              diagnóstico financeiro, análise de mercado, planejamento
              financeiro e estruturação de fluxos de trabalho. Nosso objetivo é
              impulsionar o seu negócio com resultados tangíveis.
            </p>
          </div>
          <div class="flex flex-col space-y-2 w-full">
            <span class="block text-brand-900 group-hover:text-white text-sm font-medium">Principais segmentos</span>
            <div class="flex gap-3 flex-wrap">
              <span class="rounded-full bg-brand-50 p-2 text-xs border text-brand-700 border-brand-200">Hospitais e
                Clínicas</span>
              <span class="rounded-full bg-brand-50 p-2 text-xs border text-brand-700 border-brand-200">Logística</span>
              <span class="rounded-full bg-brand-50 p-2 text-xs border text-brand-700 border-brand-200">Varejo</span>
              <span class="rounded-full bg-brand-50 p-2 text-xs border text-brand-700 border-brand-200">Turismo e
                Hotelaria</span>
            </div>
            <img class="pt-10" src="/src/assets/img/Pages/service-thumb.png" alt="" />
          </div>
        </div>
        <div
          class="rounded-full border-brand-200 border group-hover:-rotate-45 transition-all w-8 h-8 lg:w-16 lg:h-16 group-hover:bg-white bg-brand-50 text-brand-700 flex self-end mt-10 justify-center items-center">
          <i class="pi pi-arrow-right"></i>
        </div>
      </router-link>
      <h2 class="font-medium text-left block w-full text-xl">Outros Serviços</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2  gap-10">
        <div v-for="(servico, index) in servicos" :key="index" class="w-full p-6 md:p-10 bg-white flex flex-col justify-between">
          <div class="grid grid-cols-1 gap-32">
            <div class="space-y-5 w-full">
              <h3 class="text-brand-900 group-hover:text-white text-xl md:text-2xl font-medium">
                {{ servico.nome }}
              </h3>
              <p class="text-gray-950/70 group-hover:text-white text-sm md:text-base">
                {{ servico.descricao }}
              </p>
            </div>
            <div class="flex flex-col space-y-2 w-full" v-if="servico.segmentos && servico.segmentos.length">
              <span class="block text-brand-900 group-hover:text-white text-sm font-medium">Principais segmentos</span>
              <div class="flex gap-3 flex-wrap">
                <span v-for="(segmento, segIndex) in servico.segmentos" :key="segIndex" class="rounded-full bg-brand-50 p-2 text-xs border text-brand-700 border-brand-200">
                  {{ segmento }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineOptions({
  name: 'featured-services'
})

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
})

const servicos = [
  {
    nome: 'Reestruturação Financeira',
    descricao: 'Reorganização das finanças para melhorar eficiência, reduzir custos e aumentar a transparência através da revisão de processos.',
    segmentos: ['Indústrias', 'Tecnologia', 'Serviços']
  },
  {
    nome: 'Auditoria Financeira',
    descricao: 'Exame detalhado das demonstrações financeiras para garantir precisão e conformidade, identificando irregularidades e melhorias.',
    segmentos: ['Construção Civil', 'Educação', 'Saúde']
  },
  {
    nome: 'Orçamento Financeiro',
    descricao: 'Desenvolvimento de um plano financeiro que projeta receitas e despesas futuras, ajudando na gestão eficiente dos recursos.',
    segmentos: ['Varejo', 'Turismo e Hotelaria', 'Serviços']
  },
  {
    nome: 'Análise de Preços + Precificação',
    descricao: 'Avaliação e formulação de estratégias de precificação para maximizar lucratividade e competitividade considerando custos e demanda.',
    segmentos: ['E-commerce', 'Varejo', 'Manufatura']
  },
  {
    nome: 'Elaboração de Metas do Comercial',
    descricao: 'Definição de objetivos específicos para a equipe de vendas, criando planos de ação alinhados com as metas da empresa.',
    segmentos: ['Tecnologia', 'Serviços Financeiros', 'Educação']
  },
  {
    nome: 'Capacitação de Equipe Financeira',
    descricao: 'Treinamento para aprimorar habilidades e conhecimentos em práticas contábeis, gestão de custos, análise financeira e tecnologia.',
    segmentos: ['Saúde', 'Educação', 'Varejo']
  },
  {
    nome: 'Análise de Viabilidade de Projetos',
    descricao: 'Avaliação de projetos propostos para determinar viabilidade financeira e operacional, considerando custos, benefícios e riscos.',
    segmentos: ['Energia', 'Tecnologia', 'Construção Civil']
  },
  {
    nome: 'Mapeamento e Estruturação de Processos',
    descricao: 'Análise e redesenho de processos empresariais para melhorar eficiência e produtividade com documentação de fluxos de trabalho.',
    segmentos: ['Logística', 'Manufatura', 'Serviços']
  }
];
</script>

<style scoped>
/* Adicione seus estilos personalizados aqui */
</style>
