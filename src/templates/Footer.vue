<template>
  <footer
    class="flex flex-col w-full justify-center items-center px-6 pt-24 xl:px-16 bg-brand-950"
  >
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl w-full">
      <div class="">
        <span class="font-bold w-full text-xs text-brand-100/50"
          >Links rápidos
          <ul>
            <li>
              <PrimeButton
                @click="redirectHome"
                class="!px-0 rounded-sm !py-0 text-gray-50"
                link
                label="Inicio"
              ></PrimeButton>
            </li>
            <li>
              <PrimeButton
                @click="redirectToConsultoriaFinanceira"
                class="!px-0 rounded-sm !py-0 text-gray-50"
                link
                label="Reestruturação Financeira"
              >
              </PrimeButton>
            </li>
            <li>
              <PrimeButton
                @click="redirectToIndicadoresMetricas"
                class="!px-0 rounded-sm !py-0 text-gray-50"
                link
                label="Indicadores e Métricas Chave"
              >
              </PrimeButton>
            </li>
            <li>
              <PrimeButton
                @click="redirectToTreinamentosCapacitacao"
                class="!px-0 rounded-sm !py-0 text-gray-50"
                link
                label="Treinamentos e Capacitação"
              >
              </PrimeButton>
            </li>
            
          </ul>
        </span>
      </div>
      <div class="">
        <span class="font-bold w-full text-xs text-brand-100/50"
          >Social
          <ul>
            <li>
              <PrimeButton
                class="!px-0 rounded-sm !py-0 text-gray-50"
                link
                label="Linkedin"
              >
              </PrimeButton>
            </li>
          </ul>
        </span>
      </div>
      <span class="font-bold w-full text-xs text-brand-100/50"
        >Fale conosco
        <ul>
          <li>
              <PrimeButton
                @click="redirectToContact"
                class="!px-0 rounded-sm !py-0 text-gray-50"
                link
                label="Contato"
              >
              </PrimeButton>
            </li>
          <li>
            <PrimeButton
              class="!px-0 rounded-sm !py-0 text-gray-50"
              link
              label="+55 98 98176-7129"
            >
            </PrimeButton>
          </li>
          <li>
            <PrimeButton
              class="!px-0 rounded-sm !py-0 text-gray-50"
              link
              label="contato@extat.com.br"
            >
            </PrimeButton>
          </li>
        </ul>
      </span>
    </div>
    <div class="pt-16 flex gap-6 flex-col max-w-7xl w-full">
      <span class="text-xs w-full text-gray-500"
        >© 2024 Extat. | Todos os direitos reservados</span
      >
      <svg
        class="w-full opacity-40"
        width="1278"
        viewBox="0 0 1278 291"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.2">
          <path
            d="M226.68 197.653C217.664 205.701 194.21 234.592 131.365 223.157C102.66 217.94 83.1442 196.714 77.3286 172.278L287.164 172.244C288.117 170.136 287.969 167.827 288.467 165.068C299.566 88.402 248.242 16.3442 171.523 2.38491C92.6005 -11.972 17.5824 39.9563 3.22548 118.884C0.0111023 136.546 0.106911 154.807 3.82429 172.019C15.2063 231.679 64.519 277.14 119.719 287.181C215.753 304.652 273.559 239.837 280.841 228.048L226.68 197.653ZM80.3945 108.402C91.8868 79.7026 121.597 60.5887 151.25 63.7025C180.452 66.16 206.033 88.493 214.464 117.399L77.1322 116.929L80.3945 108.402Z"
            fill="#0042FF"
          />
          <path
            d="M973.537 4.48864V22.9989C951.093 8.41682 924.166 0 895.558 0C815.337 0 750.825 65.0733 750.825 144.734C750.825 224.394 815.337 289.472 895.558 289.472C924.166 289.472 951.093 281.055 973.537 266.468V284.983H1045.34V4.48864H973.537ZM897.8 222.152C855.73 222.152 824.875 189.615 824.875 144.734C824.875 99.8567 855.73 67.3201 897.8 67.3201C939.874 67.3201 973.537 99.8567 973.537 144.734C973.537 189.615 939.874 222.152 897.8 222.152Z"
            fill="#0042FF"
          />
          <path
            d="M753.652 4.5175V69.0304H687.458V285.012H615.473V69.0304H549.278V4.5175H753.652Z"
            fill="#0042FF"
          />
          <path
            d="M1277.08 4.5175V69.0304H1210.89V284.95H1138.91V69.0304H1072.72V4.5175H1277.08Z"
            fill="#0042FF"
          />
          <path
            d="M538.474 286.12L445.653 143.054L534.546 5.6065H457.127L407.192 83.0248L445.653 143.054L407.192 201.967L461.611 286.12H538.474Z"
            fill="#0042FF"
          />
          <path
            d="M279.516 5.62567L356.451 5.6065L406.918 82.9817L445.653 143.054L406.942 201.967L352.522 286.12H275.1L368.23 142.493L279.516 5.62567Z"
            fill="#103B9F"
          />
        </g>
      </svg>
    </div>
  </footer>
</template>

<script setup>
import PrimeButton from 'primevue/button'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'footer'
})

const redirectHome = () => {
  window.location.href = '/'
}
const redirectToContact = () => {
  window.location.href = '/contato'
}

const router = useRouter()

const redirectToConsultoriaFinanceira = () => {
  window.location.href = '/service/consultoria-financeira'
}

const redirectToIndicadoresMetricas = () => {
  window.location.href = '/service/indicadores-metricas'
}

const redirectToTreinamentosCapacitacao = () => {
  window.location.href = '/service/treinamentos-capacitacao'
}
</script>
