<template>
    <div class="mx-auto gap-20 flex flex-col w-full">
      <Carousel 
        :value="servicos" 
        :showIndicators="true" 
        :showNavigators="false" 
        :responsiveOptions="responsiveOptions" 
        :autoplayInterval="4000"
      >
        <template #item="{ data }">
    
            <div class="">
              <div class="rounded-2xl h-auto lg:h-[280px] p-6 w-full md:p-8 bg-white flex flex-col">
                <div class="space-y-5 w-full">
                  <h3 class="text-brand-900 w-full truncate group-hover:text-white text-base font-semibold">
                    {{ data.nome }}
                  </h3>
                  <p class="text-gray-950/70 w-full group-hover:text-white text-sm">
                    {{ data.descricao }}
                  </p>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Carousel from 'primevue/carousel';

const servicos = [
  {
    nome: 'Reestruturação Financeira',
    descricao: 'Reorganização das finanças para melhorar eficiência, reduzir custos e aumentar a transparência através da revisão de processos.'
  },
  {
    nome: 'Auditoria Financeira',
    descricao: 'Exame detalhado das demonstrações financeiras para garantir precisão e conformidade, identificando irregularidades e melhorias.'
  },
  {
    nome: 'Orçamento Financeiro',
    descricao: 'Desenvolvimento de um plano financeiro que projeta receitas e despesas futuras, ajudando na gestão eficiente dos recursos.'
  },
  {
    nome: 'Análise de Preços + Precificação',
    descricao: 'Avaliação e formulação de estratégias de precificação para maximizar lucratividade e competitividade considerando custos e demanda.'
  },
  {
    nome: 'Elaboração de Metas do Comercial',
    descricao: 'Definição de objetivos específicos para a equipe de vendas, criando planos de ação alinhados com as metas da empresa.'
  },
  {
    nome: 'Capacitação de Equipe Financeira',
    descricao: 'Treinamento para aprimorar habilidades e conhecimentos em práticas contábeis, gestão de custos, análise financeira e tecnologia.'
  },
  {
    nome: 'Análise de Viabilidade de Projetos',
    descricao: 'Avaliação de projetos propostos para determinar viabilidade financeira e operacional, considerando custos, benefícios e riscos.'
  },
  {
    nome: 'Mapeamento e Estruturação de Processos',
    descricao: 'Análise e redesenho de processos empresariais para melhorar eficiência e produtividade com documentação de fluxos de trabalho.'
  }
];

const responsiveOptions = [
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
];
</script>

