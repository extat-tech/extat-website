<template>
  <div
    class="px-6 py-24 flex flex-col justify-center items-center gap-20 bg-white"
  >
    <div class="flex w-full max-w-screen-xl flex-wrap justify-between gap-20">
      <div class="flex flex-col gap-5 max-w-xl">
        <h3 class="text-brand-950 w-full md:text-4xl text-2xl font-medium">
          Entregue mais valor com a Extat
        </h3>
        <p class="w-full text-gray-950/70">
          Nossos serviços e metologia impactam centas de empresas dos mais
          variados tamanhos e segmentos
        </p>
        <div class="flex flex-col w-full md:flex-row lg:w-auto gap-6">
          <PrimeButton
            @click="redirectToHome"
            class="w-full sm:w-fit"
            size="large"
            label="Nossos serviços"
            severity="secondary"
          />
          <PrimeButton
            @click="redirectToContact"
            class="w-full sm:w-fit"
            size="large"
            label="Quero organizar meu financeiro"
             
             
          />
        </div>
      </div>
    </div>

    <div
      class="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16 w-full"
    >
      <div v-for="(metric, index) in metrics" :key="index" class="border-l-2  border-brand-700 pl-4 gap-3 grid min-w-[280px]">
        <h2 class="text-3xl font-medium text-brand-700">{{ metric.metric }}</h2>
        <p class="font-medium  text-base text-gray-900/60">{{ metric.caption }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import PrimeButton from 'primevue/button'
import ScheduleCall from '../components/ScheduleCall.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const redirectToHome = () => {
  router.push({ path: '/' }).then(() => {
    // Adicionando um pequeno atraso de 100ms antes de rolar para o topo
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })

      // Adicionando um pequeno atraso de 300ms antes de rolar para a sessão
      setTimeout(() => {
        const element = document.getElementById('anchorScroll')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300)
    }, 100)
  })
}
const redirectToContact = () => {
  window.location.href = '/contato';
}

const metrics = [
  { metric: '+10', caption: 'anos no mercado' },
  { metric: '+70', caption: 'de 70 projetos atendidos' },
  { metric: 'R$ 1.408.104.583', caption: 'faturamento dos clientes somados' },
  { metric: 'R$ 260.689.066', caption: 'econômia gerada nos clientes' },
  { metric: '10 A 20% A.A.', caption: 'crescimento médio dos clientes' }
];

</script>
