<template>
  <HeaderNavigation></HeaderNavigation>
  <ContactBanner title="Vamos conversar?"></ContactBanner>
  <ContactForm></ContactForm>
</template>

<script setup>
import PrimeButton from "primevue/button"
import HeaderNavigation from "../../templates/HeaderNavigation.vue"
import ContactBanner from "../../templates/ContactBanner.vue";
import ContactForm from "../../templates/ContactForm.vue";

defineOptions({
  name: 'contact-view'
})
</script>

