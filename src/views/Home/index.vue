<template>
  <Banner :title="contentBanner.title" :description="contentBanner.description" />
</template>

<script setup>
import { contentBanner } from '../../utils/language'
import Banner from '../../templates/Banner.vue'

defineOptions({
  name: 'home-view'
})
</script>
