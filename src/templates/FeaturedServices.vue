<template>
  <section
    class="w-full px-6 py-24 xl:px-16 flex flex-col justify-center items-center bg-gray-50"
  >
    <!-- Container -->
    <div class="max-w-7xl flex flex-col gap-10 items-center w-full">
      <!-- Texts -->
      <div class="grid w-full justify-between gap-6 lg:gap-10">
        <h2
          class="text-brand-950 w-full lg:max-w-3xl md:text-4xl text-2xl font-medium"
        >
          {{ title }}
        </h2>
        <p
          class="md:text-xl w-full max-w-[592px] text-lg text-pretty text-gray-950/70"
        >
          {{ description }}
        </p>
        <div class="flex max-w-[592px] flex-col space-y-2 w-full">
          <span
            class="block text-brand-900 group-hover:text-white text-sm font-medium"
            >Principais segmentos</span
          >
            <ul class="flex gap-2 flex-wrap">
              <li
                class="w-fit rounded-full bg-brand-50 p-2 text-xs border text-brand-700 border-brand-200"
                v-for="(segment, index) in segments"
                :key="index"
              >
                {{ segment.name }}
              </li>
            </ul>
        </div>
      </div>
      <!-- Main Card -->
      <h4 class="font-medium text-left w-full text-xl">Serviço em destaque</h4>
      <router-link
        to="/service/consultoria-financeira"
        class="max-w-3xl self-start rounded-2xl focus:outline-none focus:ring-offset-2 focus:ring focus:ring-brand-950 group w-full p-0 cursor-pointer bg-white hover:bg-brand-700 transition-all flex flex-col justify-between"
      >
        <img
          class="w-full aspect-auto"
          src="/src/assets/img/Pages/service-thumb.png"
          alt=""
        />
        <div class="flex sm:flex-row flex-col gap-10 min-h-[320px] p-10">
          <h3
            class="text-brand-900 block group-hover:text-white text-xl md:text-3xl w-full font-semibold"
          >
            Reestruturação Financeira
          </h3>
          <p
            class="text-gray-950/70 group-hover:text-white text-sm md:text-base"
          >
            Oferecemos Reestruturação Financeira completa, incluindo diagnóstico
            financeiro, análise de mercado, planejamento financeiro e
            estruturação de fluxos de trabalho. Nosso objetivo é impulsionar o
            seu negócio com resultados tangíveis.
          </p>
          <div
            class="place-self-end rounded-full border-brand-200 border group-hover:-rotate-45 transition-all min-w-8 min-h-8 lg:min-w-16 lg:min-h-16 group-hover:bg-white bg-brand-50 text-brand-700 flex self-end mt-10 justify-center items-center"
          >
            <i class="pi pi-arrow-right"></i>
          </div>
        </div>
      </router-link>

      <h4 class="font-medium text-left block w-full text-xl">
        Outros Serviços
      </h4>
      <ServiceCarousel class="max-w-[1360px]" />
    </div>
  </section>
</template>

<script setup>
import ServiceCarousel from './ServiceCarousel.vue'

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
  }
})

const segments = [
  { name: 'Construção Civil' },
  { name: 'Transporte e Logística' },
  { name: 'Saúde e Clínica' },
  { name: 'Gráfica e Papelaria' },
  { name: 'Móveis' },
  { name: 'Estúdio de Dança' },
  { name: 'Hotéis' },
  { name: 'Restaurantes' },
  { name: 'Beleza e Estética' },
  { name: 'Drogaria' },
  { name: 'Ensino' },
  { name: 'Automotivo' },
  { name: 'Moda e Varejo' },
  { name: 'Distribuidoras' },
  { name: 'Alimentos' },
  { name: 'Associações Comerciais' },
  { name: 'Cama, Mesa e Banho' }
]
</script>
