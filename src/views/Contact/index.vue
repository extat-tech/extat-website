<template>
  <HeaderNavigation></HeaderNavigation>
  <ContactBanner title="Contato"></ContactBanner>
  <ContactForm></ContactForm>
  <Testimonial role="CEO - Cerne Design" client="Gabriel Lisboa" quote="Extat é uma empresa parceira e confiável para a saúde financeira do meu negócio."></Testimonial>
  <FeaturedServices
    title="Como podemos te ajudar?"
    description="Explore como nossos serviços especializados podem ser uma vantagem estratégica para alcançar seus objetivos financeiros. Nossa equipe está pronta para colaborar com você para impulsionar o sucesso de sua empresa."
    :serviceList="featuredServices"
  />
  <Footer></Footer>
</template>

<script setup>
import Testimonial from "../../templates/Testimonial.vue"
import FeaturedServices from '../../templates/FeaturedServices.vue'
import HeaderNavigation from "../../templates/HeaderNavigation.vue"
import ContactBanner from "../../templates/ContactBanner.vue";
import ContactForm from "../../templates/ContactForm.vue";
import Footer from "../../templates/Footer.vue";

const featuredServices = [
  {
    title: 'Reestruturação Financeira',
    description:
      'Oferecemos Reestruturação Financeira completa, incluindo diagnóstico financeiro, análise de mercado, planejamento financeiro e estruturação de fluxos de trabalho. Nosso objetivo é impulsionar o seu negócio com resultados tangíveis.',
    icon: 'pi pi-arrow-right',
    to: 'service/consultoria-financeira'
  },
  {
    title: 'Indicadores e Métricas Chave',
    description:
      'Com nossa expertise em indicadores e métricas chave, fornecemos relatórios financeiros personalizados sob demanda para o seu negócio. Mantenha-se informado e tome decisões estratégicas com base em dados precisos e relevantes.',
    icon: 'pi pi-arrow-right',
    to: 'service/indicadores-metricas'
  },
  {
    title: 'Treinamentos e Capacitação',
    description:
      'Capacite sua equipe para enfrentar os desafios financeiros do mercado atual com nossos programas de treinamento e capacitação. Oferecemos cursos especializados para aprimorar as habilidades financeiras de sua equipe e prepará-la para o sucesso em um ambiente competitivo.',
    icon: 'pi pi-arrow-right',
    to: 'service/treinamentos-capacitacao'
  }
]

defineOptions({
  name: 'contact-view'
})
</script>

