<template>
  <section class="px-6 py-24 xl:px-16 flex flex-col justify-center items-center bg-white">
    <!-- Container -->
    <div class="grid grid-cols-1 gap-10 max-w-7xl w-full">
      <!-- Texts -->
      <div class="flex flex-col max-w-2xl gap-6 lg:gap-10">
        <h2 class="text-brand-950 w-full  md:text-4xl text-2xl font-semibold">
          {{ title }}
        </h2>
        <p class="w-full text-gray-950/70">{{ description }}</p>
        <PrimeButton
            @click="redirectToContact"
            class="w-full md:w-fit"
            size="large"
            label="Quero organizar meu financeiro"
            icon="pi pi-arrow-right"
            iconPos="right"
          />
      </div>
      <CardGrid :cardList="pilars"></CardGrid>
    </div>
  </section>
</template>

<script setup>
import CardGrid from './CardGrid.vue'
import PrimeButton from 'primevue/button'

defineOptions({
  name: 'company-features'
})

const redirectToContact = () => {
  window.location.href = '/contato';
}

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
