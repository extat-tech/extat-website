<template>
  <Button class="w-auto !px-0 !ring-0 !ring-transparent !focus:ring-transparent !focus:ring-offset-0  border-transparent rounded-sm hover:bg-transparent bg-transparent">
    <Logo />
  </Button>
</template>

<script setup>
import Logo from '../assets/img/Logo.vue'

defineOptions({
  name: 'header'
})
</script>
