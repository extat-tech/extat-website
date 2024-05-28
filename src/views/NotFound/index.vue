<template>
  <section class="flex flex-col justify-center items-center gap-8 h-screen bg-brand-950">
    <svg
      class="w-10 mb-5"
      viewBox="0 0 72 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0906 13.5299L25.1121 13.5264L34.3099 27.7121L41.3695 38.7256L34.3142 49.5265L24.3962 64.9549H10.2856L27.259 38.6228L11.0906 13.5299Z"
        fill="#0042FF"
      />
      <path
        d="M58.2856 64.9549L41.4145 38.7264L57.5697 13.5264H43.4601L34.3592 27.72V49.5264L44.2773 64.9549H58.2856Z"
        fill="#0042FF"
        fill-opacity="0.6"
      />
    </svg>
    <h1
      class="w-full text-center text-7xl font-bold text-brand-50 text-pretty"
    >
      404
    </h1>
    <p class="text-brand-50/70 text-2xl">Pagina não encontrada</p>
    <PrimeButton
      @click="redirectToHome"
      label="Voltar ao inicio"
      severity="secondary"

      rounded
    />
  </section>
</template>

<script setup>
import PrimeButton from 'primevue/button'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'not-found'
})

const router = useRouter()

const redirectToHome = () => {
  router.push({ path: '/' }).then(() => {
    // Adicionando um pequeno atraso de 100ms antes de rolar para o topo
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  })
}
</script>
