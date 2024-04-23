<template>
  <header
    class="transition-all z-10 fixed flex w-full items-center justify-center bg-white pl-6 h-14 shadow-sm border-brand-200"
  >
    <div class="flex justify-between items-center w-full">
      <!-- Back to Home -->
      <Logo></Logo>
      <!-- Buttons  -->
      <div class="flex items-center">
        <PrimeButton
          size="large"
          class="hidden h-[54px] md:block"
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
  <SideNavigation position="right" v-model:visible="visible" header=" ">
    <div class="flex flex-col h-full justify-between">
      <Menu :model="items">
        <template #item ="{item}">
          <router-link :to="item.route">
            <span class="flex items-center py-3 px-3 font-semibold">{{ item.label }}</span>
          </router-link>
        </template>
      </Menu>
      <div class="">
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
import { ref } from 'vue'

const visible = ref(false)

const redirectLogin = () => {
  window.open('https://extat.evolutto.com.br/', '_blank')
}

const items = ref([
  {
    label: 'Inicio',
    route: '/'
  },
  {
    label: 'Contato',
    route: '/contato'
  },
  {
    label: 'Serviços',
    items: [
      {
        label: 'Consultoria financeira',
        route: '/service/consultoria-financeira'
      },
      {
        label: 'Indicadores e Métricas Chave',
        route: '/service/indicadores-metricas'
      },
      {
        label: 'Treinamentos e Capacitação',
        route: '/service/treinamentos-capacitacao'
      }
    ]
  }
])
</script>
