<template>
  <div class="py-24 px-32 flex flex-col gap-16">
    <div class="flex px-8 justify-between">
      <div class="flex flex-col gap-5 max-w-xl">
        <h1 class="font-semibold text-4xl">Entregue mais valor com a Extat</h1>
        <p class="font-medium text-xl text-gray-600">
          Nossos serviços e metologia impactam centas de empresas dos mais
          variados tamanhos e segmentos
        </p>
      </div>
      <div class="flex gap-3">
        <PrimeButton label="Nossos Serviços" severity="secondary" />
        <ScheduleCall />
      </div>
    </div>
    <div class="flex flex-col lg:flex-row px-8 gap-8 w-full">
      <div class="border-l-4 border-brand-600 p-4 min-w-[280px]">
        <h2 class="text-5xl font-light text-brand-600">400+</h2>
        <p class="font-medium text-xl text-gray-900">Projects completed</p>
      </div>
      <div class="border-l-4 border-brand-600 p-4 min-w-[280px]">
        <h2 class="text-5xl font-light text-brand-600">600%</h2>
        <p class="font-medium text-xl text-gray-900">Return on investment</p>
      </div>
      <div class="border-l-4 border-brand-600 p-4 min-w-[280px]">
        <h2 class="text-5xl font-light text-brand-600">10k</h2>
        <p class="font-medium text-xl text-gray-900">Global downloads</p>
      </div>
      <div class="border-l-4 border-brand-600 p-4 min-w-[280px]">
        <h2 class="text-5xl font-light text-brand-600">200+</h2>
        <p class="font-medium text-xl text-gray-900">5-star reviews</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import PrimeButton from 'primevue/button'
import ScheduleCall from '../components/ScheduleCall.vue'
</script>
