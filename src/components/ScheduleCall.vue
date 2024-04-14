<template>
  <PrimeButton class="w-full md:w-auto" label="Agende uma chamada" size="large" :severity="severity" />
</template>

<script setup>
import PrimeButton from 'primevue/button'

defineProps({
  severity: {
    required: false,
    type: String
  }
})
</script>
