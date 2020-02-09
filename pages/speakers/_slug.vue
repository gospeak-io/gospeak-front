<template>
  <div>
    <div class="relative z-20 flex justify-between items-center">
      <div class="flex md:block lg:flex items-center max-w-full">
        <div
          class="mb-0 md:mb-4 lg:mb-0 flex flex-shrink-0 pr-4 md:pr-6 lg:pr-12"
        >
          <a href="" class="flex items-center no-underline">
            <img
              :src="speaker.avatar"
              :alt="speaker.firstName"
              class="h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full"
            />
          </a>
        </div>
        <div>
          <a
            class="block text-black no-underline font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight"
          >
            {{ speaker.firstName }} {{ speaker.lastName }}
          </a>
          <div
            class="hidden md:flex mt-3 lg:mt-4 uppercase tracking-wide text-xs"
          >
            <a
              :href="speaker.twitter"
              class="text-gray-500  font-semibold no-underline hover:text-black pr-4"
              >Twitter</a
            >
            <a
              :href="speaker.linkedin"
              class="text-gray-500 font-semibold no-underline hover:text-black pr-4"
              >LinkedIn</a
            >
            <a
              :href="speaker.website"
              class="text-gray-500 font-semibold no-underline hover:text-black pr-4"
              >Website</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="lg:pl-32 mt-12">
      <div class="max-w-lg">
        <h1 class="text-2xl font-extrabold text-black mb-4">
          Who am I?
        </h1>
        <div class="text-lg text-gray-800 leading-normal">
          <div class="markdown">{{ speaker.bio }}</div>
        </div>
        <div class="mt-12 spaced-y-10">
          <h1 class="text-2xl font-extrabold text-black mb-4">Talks</h1>
          <div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=MF0jFKvS4SI"
                class="text-lg text-black font-bold no-underline hover:underline"
                >Cruddy by Design</a
              >
            </div>
            <p class="text-grey-darkest text-base leading-normal mt-1">
              How forcing yourself to think in CRUD can help you write simpler
              controllers and uncover interesting domain concepts.
            </p>
            <div class="text-grey-darkest text-base leading-normal mt-2">
              <a
                href="https://www.youtube.com/watch?v=MF0jFKvS4SI"
                class="text-grey-darker hover:text-black text-sm no-underline hover:underline"
                >Watch this talk →</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\S+$/.test(params.slug)
  },
  layout: 'speakerDetail',
  data() {
    return {
      slug: this.$route.params.slug
    }
  },
  head() {
    return {
      title: this.speaker.firstName,
      meta: [
        { name: 'twitter:title', content: this.speaker.firstName },
        { name: 'twitter:description', content: this.speaker.bio },
        { name: 'twitter:image', content: this.speaker.avatar },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  },
  computed: {
    speaker() {
      return this.$store.state.speakers.all.find(
        (speaker) => speaker.slug === this.slug
      )
    }
  }
}
</script>

<style scoped></style>
