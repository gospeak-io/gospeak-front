<template>
  <div class="bg-white">
    <main-navbar />
    <nuxt />
  </div>
</template>
<script>
import MainNavbar from '../components/CFP/MainNavbar'
export default {
  components: { MainNavbar },
  head() {
    return {
      script: [
        {
          src:
            'https://cdn.jsdelivr.net/gh/alpinejs/alpine@v1.3.0/dist/alpine.js'
        }
      ]
    }
  }
}
</script>
