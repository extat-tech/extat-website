<template>
  <header
    class="transition-all z-10 fixed flex w-full items-center justify-center md:px-8 pl-8 bg-white 0 h-14 md:h-20"
  >
    <div class="flex justify-between items-center max-w-7xl w-full">
      <!-- Back to Home -->
      <Logo></Logo>
      <!-- Buttons  -->
      <div class="flex items-center gap-4">
        <PrimeButton
          size="large"
          class="hidden h-14 md:block"
          @click="redirectLogin"
          label="Acesso para empresas"
        />
        <PrimeButton
          class="h-14 w-14"
          severity="secondary"
          icon="pi pi-bars"
          @click="visible = true"
        />
      </div>
    </div>
  </header>

  <!-- Navigation -->
  <SideNavigation  position="right" v-model:visible="visible" header=" ">
      <div class="flex flex-col h-full justify-between">
        <Menu :model="items" />
        <div class="p-4">
          <PrimeButton
          class="w-full"
          size="large"
          @click="redirectLogin"
          label="Acesso para empresas"
        />
        </div>
      </div>
  </SideNavigation>
</template>

<script setup>
import Logo from '../components/Logo.vue'
import PrimeButton from 'primevue/button'
import SideNavigation from 'primevue/sidebar'
import Menu from 'primevue/menu'

defineOptions({
  name: 'header-navigation'
})
import { ref } from 'vue'
const visible = ref(false)
import { useRouter } from 'vue-router'
const router = useRouter()
const redirectLogin = () => {
  window.open('https://extat.evolutto.com.br/', '_blank')
}

const items = ref([
  {
    label: 'Inicio'
  },
  {
    label: 'Serviços',
    items: [
      {
        label: 'Consultoria financeira'
      },
      {
        label: 'Indicadores e Métricas Chave'
      },
      {
        label: 'Treinamentos e Capacitação'
      }
    ]
  }
])
</script>
