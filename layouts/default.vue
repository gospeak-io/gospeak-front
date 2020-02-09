<template>
  <div class="flex flex-col h-full bg-gray-100">
    <MainNavbar />
    <nuxt />
    <MainFooter />
  </div>
</template>

<script>
import MainNavbar from '../components/Backend/MainNavbar'
import MainFooter from '../components/Published/MainFooter'
export default {
  components: {
    MainFooter,
    MainNavbar
  }
}
</script>
