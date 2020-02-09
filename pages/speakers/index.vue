<template>
  <div class="flex justify-center text-center mx-auto">
    <nuxt-link
      v-for="speaker in speakers.data"
      :to="{ name: 'speakers-slug', params: { slug: speaker.slug } }"
      :key="speaker.slug"
    >
      <img
        :src="speaker.avatar"
        :alt="speaker.firstName"
        class="w-10 h-10 rounded-full mr-4"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'backend',
  name: 'index.vue',
  head() {
    return {
      title: 'Speaker List'
    }
  },
  async asyncData({ $axios }) {
    const speakers = await $axios.$get('groups/humantalks-paris/speakers')
    return { speakers }
  }
}
</script>

<style scoped></style>
