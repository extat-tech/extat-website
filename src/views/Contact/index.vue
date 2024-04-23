<template>
  <HeaderNavigation></HeaderNavigation>
  <ContactBanner title="Entre em contato conosco"></ContactBanner>
  <ContactForm></ContactForm>
  <Footer></Footer>
</template>

<script setup>
import PrimeButton from "primevue/button"
import HeaderNavigation from "../../templates/HeaderNavigation.vue"
import ContactBanner from "../../templates/ContactBanner.vue";
import ContactForm from "../../templates/ContactForm.vue";
import Footer from "../../templates/Footer.vue";

defineOptions({
  name: 'contact-view'
})
</script>

