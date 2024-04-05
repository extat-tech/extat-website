<template>
  <section>
    <h1>{{ Title }}</h1>
    <p>{{ Description }}</p>
    <div>
      <button>{{ primaryCallToAction }}</button>
      <button>{{ secondaryCallToAction }}</button>
    </div>
  </section>
</template>

<!-- Props and Component Name -->
<script>
  export default {
    name: Banner,
    
    props: {
      title: String,
      description: String,
      primaryCallToAction: String,
      secondaryCallToAction: String
    }
  };
</script>
