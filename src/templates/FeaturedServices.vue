<template>
  <section
    class="w-full px-6 py-24 xl:px-16 flex flex-col justify-center items-center bg-gray-50"
  >
    <!-- Container -->
    <div class="max-w-7xl justify-center flex flex-col gap-10 items-center w-full">
      <!-- Texts -->
      <div class="flex flex-col w-full justify-center items-center gap-6 lg:gap-10">
        <h2
          class="text-brand-950 w-full text-center lg:max-w-3xl md:text-4xl text-2xl font-medium"
        >
          {{ title }}
        </h2>
        <p
          class="w-full max-w-[592px] text-center text-lg text-pretty text-gray-950/60"
        >
          {{ description }}
        </p>
        <div class="flex max-w-[960px] justify-center items-center flex-col space-y-4 w-full">
          <span
            class="block text-brand-900 group-hover:text-white text-sm font-medium"
            >Principais segmentos</span
          >
            <ul class="flex gap-2  justify-center items-center flex-wrap">
              <li
                class="w-fit rounded-full bg-brand-50 p-2 text-xs border font-semibold  text-brand-700 border-brand-200"
                v-for="(segment, index) in segments"
                :key="index"
              >
                {{ segment.name }}
              </li>
            </ul>
        </div>
      </div>
      <!-- Main Card -->
      <h4 class="font-medium text-center w-full text-xl mt-10">Serviço em destaque</h4>
      <router-link
        to="/service/reestruturacao-financeira"
        class="rounded-2xl focus:outline-none focus:ring-offset-2 focus:ring focus:ring-brand-950 group w-full cursor-pointer bg-white hover:bg-brand-700 transition-all flex flex-col"
      >
        <img
          class="w-full aspect-auto"
          src="/src/assets/img/Pages/service-thumb.png"
          alt=""
        />
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
