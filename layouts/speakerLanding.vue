<template>
  <div class="flex flex-col">
    <MainNavbar />
    <nuxt />
    <MainFooter />
  </div>
</template>

<script>
import MainFooter from '../components/Published/MainFooter'
import MainNavbar from '../components/Speaker/MainNavbar'

export default {
  components: {
    MainNavbar,
    MainFooter
  },
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
