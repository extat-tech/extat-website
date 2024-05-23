<template>
  <section class="px-6 py-24 xl:px-16 gap-8 flex flex-col justify-center items-cente">
      <span class="text-brand-950/80  w-full text-sm font-regular"> {{ title }} </span
      >
    <Carousel class="" :value="brands" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions" :autoplayInterval="1500">
      <template #item="slotProps">
        <div class="flex mt-8 flex-col items-center mx-auto justify-center">
          <img :src="slotProps.data.img" alt="" class="max-w-40 w-full h-full grid place-content-center" />
        </div>
      </template>
    </Carousel>
  </section>
</template>

<script setup>

defineOptions({
  name: 'clients-carousel'
})

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

import { ref } from 'vue';
import Carousel from 'primevue/carousel'

const brands = ref([
  { img: 'dist/assets/clients/dl-logistica.svg' },
  { img: 'dist/assets/clients/cachos-de-diva.svg' },
  { img: 'dist/assets/clients/fonomulti.svg' },
  { img: 'dist/assets/clients/dl-logistica.svg' },
  { img: 'dist/assets/clients/cachos-de-diva.svg' },
  { img: 'dist/assets/clients/fonomulti.svg' },

]);

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
