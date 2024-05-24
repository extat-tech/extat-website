<template>
  <section class="px-6 py-24 xl:px-16 flex flex-col mx-auto w-full">
    <div class="mx-auto max-w-7xl gap-20 flex flex-col w-full">
        <span class="text-brand-950/80  w-full text-sm font-regular"> {{ title }} </span
        >
      <Carousel class="" :value="brands" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions" :autoplayInterval="1500">
        <template #item="slotProps">
          <div class="flex flex-col items-center mx-auto justify-center">
            <img :src="slotProps.data.img" alt="" class="max-w-40 w-full h-full grid place-content-center" />
          </div>
        </template>
      </Carousel>
    </div>
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
  { img: 'src/assets/img/dl-logistica.svg' },
  { img: 'src/assets/img/cachos-de-diva.svg' },
  { img: 'src/assets/img/fonomulti.svg' },
  { img: 'src/assets/img/dl-logistica.svg' },
  { img: 'src/assets/img/cachos-de-diva.svg' },
  { img: 'src/assets/img/fonomulti.svg' },
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
