<template>
  <section class="px-8 py-24 flex justify-center bg-white">
    <!-- Container -->
    <div class="grid grid-cols-1 gap-10 max-w-7xl w-full">
      <!-- Texts -->
      <div class="flex flex-col max-w-2xl gap-10">
        <h3 class="w-full text-brand-950 text-4xl font-semibold">
          {{ title }}
        </h3>
        <p class="w-full text-xl text-gray-950/70">{{ description }}</p>
      </div>
      <CardGrid :cardList="pilars"></CardGrid>
    </div>
  </section>
</template>

<script setup>
import CardGrid from './CardGrid.vue'

defineOptions({
  name: 'company-features'
})

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

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
