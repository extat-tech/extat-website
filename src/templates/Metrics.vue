<template>
  <div
    class="px-8 py-24 flex flex-col justify-center items-center gap-20 bg-white"
  >
    <div class="flex w-full max-w-screen-xl flex-wrap justify-between gap-20">
      <div class="flex flex-col gap-5 max-w-xl">
        <h1 class="font-semibold text-4xl">Entregue mais valor com a Extat</h1>
        <p class="font-medium text-xl text-gray-600">
          Nossos serviços e metologia impactam centas de empresas dos mais
          variados tamanhos e segmentos
        </p>
      </div>
      <div class="flex flex-col w-full lg:flex-row lg:w-auto gap-3">
          <PrimeButton
            class="w-full lg:w-auto"
            size="large"
            label="Nossos serviços"
            severity="secondary"
          />
          <ScheduleCall />
        </div>
    </div>
    <div class="justify-center max-w-screen-xl grid grid-cols-1 xl:grid-cols-4 gap-16 w-full">
      <div class="border-l-2 border-brand-700 pl-4 gap-3 grid min-w-[280px]">
        <h2 class="text-5xl font-light text-brand-700">400+</h2>
        <p class="font-medium text-xl text-gray-900">Projects completed</p>
      </div>
      <div class="border-l-2 border-brand-700 pl-4 gap-3 grid min-w-[280px]">
        <h2 class="text-5xl font-light text-brand-700">600%</h2>
        <p class="font-medium text-xl text-gray-900">Return on investment</p>
      </div>
      <div class="border-l-2 border-brand-700 pl-4 gap-3 grid min-w-[280px]">
        <h2 class="text-5xl font-light text-brand-700">10k</h2>
        <p class="font-medium text-xl text-gray-900">Global downloads</p>
      </div>
      <div class="border-l-2 border-brand-700 pl-4 gap-3 grid min-w-[280px]">
        <h2 class="text-5xl font-light text-brand-700">200+</h2>
        <p class="font-medium text-xl text-gray-900">5-star reviews</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import PrimeButton from 'primevue/button'
import ScheduleCall from '../components/ScheduleCall.vue'
</script>
