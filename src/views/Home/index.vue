<template>
<Banner
      title="'Welcome to My Website'"
      description="'Discover amazing things here.'"
      primary-call-to-action="'Get Started'"
      secondary-call-to-action="'Learn More'"
    />
</template>

<script>
  import  { Banner } from '../../templates/Banner.vue'
  
  export default {
    components: Banner
  }
  
</script>
