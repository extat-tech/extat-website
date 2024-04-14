<template>
  <PrimeButton label="Agende uma chamada" :severity="severity" />
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
