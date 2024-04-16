<template>
  <header
    class="transition-all z-10 fixed flex w-full items-center justify-center md:px-8 pl-6 bg-white 0 h-14 md:h-20"
  >
    <div class="flex justify-between items-center max-w-7xl w-full">
      <!-- Back to Home -->
      <Logo></Logo>
      <!-- Buttons  -->
      <div class="flex items-center gap-4">
        <PrimeButton class="hidden  md:block" @click="redirectLogin" label="Acesso para empresas" />
        <PrimeButton
          class="h-14 w-14 md:h-11 md:w-11"
          severity="secondary"
          icon="pi pi-bars"
          @click="visible = true"
        />
      </div>
    </div>
  </header>
  <!-- Navigation -->
  <SideNavigation
    class=""
    position="right"
    v-model:visible="visible"
    header="Em construção"
  >
  </SideNavigation>
</template>

<script setup>
import Logo from '../components/Logo.vue'
import PrimeButton from 'primevue/button'
import SideNavigation from 'primevue/sidebar'
import { onMounted } from 'vue'

defineOptions({
  name: 'header-navigation'
})
import { ref } from 'vue'
const visible = ref(false)
const redirectLogin = () => {
  window.open('https://extat.evolutto.com.br/', '_blank')
}

</script>
