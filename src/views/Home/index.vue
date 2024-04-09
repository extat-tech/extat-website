<template>
  <HeaderNavigation></HeaderNavigation>
  <Banner :title="contentBanner.title" :description="contentBanner.description" />
</template>

<script setup>
import { contentBanner } from '../../utils/language'
import Banner from '../../templates/Banner.vue'
import HeaderNavigation from '../../templates/HeaderNavigation.vue';

defineOptions({
  name: 'home-view'
})
</script>
