<template>
  <div clas="bg-gray-200 text-gray-900 leading-normal;">
    <MainNavbar />
    <div
      class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5 mx-auto"
    >
      <div class="flex">
        <div class="pt-24 pb-16 lg:pt-28 w-full">
          <div class="max-w-3xl mx-auto">
            <nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainNavbar from '../components/Backend/MainNavbar'
export default {
  components: {
    MainNavbar
  }
}
</script>
