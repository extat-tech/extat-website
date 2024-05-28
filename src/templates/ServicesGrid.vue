<template>
  <div class="mx-auto w-full px-6 py-24 flex flex-wrap gap-6 bg-brand-50">
    <router-link
        to="/service/reestruturacao-financeira"
        class="rounded-2xl focus:outline-none focus:ring-offset-2 focus:ring focus:ring-brand-950 group w-full max-w-7xl mx-auto cursor-pointer bg-white hover:bg-brand-700 transition-all flex flex-col"
      >
        <div class="flex lg:flex-row flex-wrap flex-col gap-6 md:gap-10 h-auto md:min-h-[280px] items-start p-6 md:p-10">
          <h3
            class="text-brand-900 block max-w-80 group-hover:text-white text-xl md:text-3xl w-full font-semibold"
          >
            Reestruturação Financeira
          </h3>
          <p
            class="text-gray-950/60 w-full md:max-w-96 group-hover:text-white text-sm md:text-base"
          >
            Oferecemos Reestruturação Financeira completa, incluindo diagnóstico
            financeiro, análise de mercado, planejamento financeiro e
            estruturação de fluxos de trabalho. Nosso objetivo é impulsionar o
            seu negócio com resultados tangíveis.
          </p>
          <div
            class="ml-0 lg:ml-auto self-start  md:self-start gap-4 px-4 font-semibold h-11 rounded-full border-brand-200 border group-hover:bg-white bg-brand-50 text-brand-700 justify-self-end flex w-fit  items-center"
          >
            <span class="w-fit">Saiba mais</span>
            <i class="transition-all group-hover:-rotate-45 pi pi-arrow-right"></i>
          </div>
        </div>
      </router-link>
    <div
      
      class="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6"
    >
      <div
      v-for="(service, index) in services"
      :key="index"
        class="rounded-xl h-auto lg:h-[220px] col-span-1 p-6 md:p-8 bg-white flex flex-col"
      >
        <div class="space-y-5 w-full">
          <h3
            class="text-brand-900 w-full truncate text-base font-semibold"
          >
            {{ service.nome }}
          </h3>
          <p class="text-gray-950/60 w-full text-sm">
            {{ service.descricao }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'

defineOptions({
  name: 'services-grid'
})

const services = ref([
  {
    nome: 'Reestruturação Financeira',
    descricao:
      'Reorganização das finanças para melhorar eficiência, reduzir custos e aumentar a transparência através da revisão de processos.'
  },
  {
    nome: 'Auditoria Financeira',
    descricao:
      'Exame detalhado das demonstrações financeiras para garantir precisão e conformidade, identificando irregularidades e melhorias.'
  },
  {
    nome: 'Orçamento Financeiro',
    descricao:
      'Desenvolvimento de um plano financeiro que projeta receitas e despesas futuras, ajudando na gestão eficiente dos recursos.'
  },
  {
    nome: 'Análise de Preços + Precificação',
    descricao:
      'Avaliação e formulação de estratégias de precificação para maximizar lucratividade e competitividade considerando custos e demanda.'
  },
  {
    nome: 'Elaboração de Metas do Comercial',
    descricao:
      'Definição de objetivos específicos para a equipe de vendas, criando planos de ação alinhados com as metas da empresa.'
  },
  {
    nome: 'Capacitação de Equipe Financeira',
    descricao:
      'Treinamento para aprimorar habilidades e conhecimentos em práticas contábeis, gestão de custos, análise financeira e tecnologia.'
  },
  {
    nome: 'Análise de Viabilidade de Projetos',
    descricao:
      'Avaliação de projetos propostos para determinar viabilidade financeira e operacional, considerando custos, benefícios e riscos.'
  },
  {
    nome: 'Mapeamento e Estruturação de Processos',
    descricao:
      'Análise e redesenho de processos empresariais para melhorar eficiência e produtividade com documentação de fluxos de trabalho.'
  }
])
</script>
