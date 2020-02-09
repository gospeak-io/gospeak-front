<template>
  <div class="bg-white">
    <div class="md:overflow-hidden">
      <div class="px-4 bg-gray-200">
        <div class="relative md:max-w-2xl md:mx-auto text-center">
          <h1
            class="font-bold text-gray-700 text-2xl md:text-5xl leading-tight mb-6"
          >
            Open Call For Proposals
          </h1>

          <p class="text-gray-600 md:text-xl md:px-18">
            Have something interesting to share? Find a corresponding CFP and
            propose a talk! Afraid of speaking? Take a look at theses getting
            started and <br />
            helpful articles and testimonials.
          </p>
          <div>
            <form class="m-6 flex ">
              <input
                class="rounded-l-lg p-2 px-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-full mx-auto"
                placeholder="your@mail.com"
              />
              <button
                class="px-8 rounded-r-lg bg-gpPink-500 text-white text-sm font-bold p-1 uppercase border-pgPink-500 border-t border-b border-r hover:bg-gpPurple-900"
              >
                Stay notified!
              </button>
            </form>
          </div>
          <p class="text-gray-600 text-xs">
            A conference is missing ?
            <a
              href="mailto:contact@gospeak.io?subject=Would like to add this CFP !&body=Don't be shy, email us :p thanks to precise website of event"
              class="text-gpPink-500 font-bold"
              >Tell us here</a
            >, we will add it!
          </p>

          <div
            class="hidden md:block h-40 w-40 rounded-full bg-gpPurpleDark-900 absolute right-0 bottom-0 -mb-32 -mr-48"
          ></div>
          <div
            class="hidden md:block h-5 w-5 rounded-full bg-gpPink-500 absolute top-0 right-0 -mr-40 mt-32"
          ></div>
        </div>
      </div>
      <svg
        class="fill-current bg-gray-200 text-white hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill-opacity="1"
          d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <div class="md:-mt-48">
        <div class="flex flex-wrap px-20">
          <nuxt-link
            v-for="cfp in cfps.data"
            :to="{ name: 'cfp-slug', params: { slug: cfp.slug } }"
            :key="cfp.slug"
            class="mx-auto py-5 px-5"
          >
            <div class="">
              <div class=" ">
                <a href="#">
                  <div
                    class="bg-white relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg"
                  >
                    <div
                      class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-gpPink-500"
                    >
                      End 31 dec 2020
                    </div>
                    <img
                      src="https://live.staticflickr.com/65535/48699248933_b921d75a0b_o.jpg"
                      class="h-32 rounded-lg w-full object-cover"
                    />
                    <div class="flex justify-center">
                      <img
                        src="https://res.cloudinary.com/gospeak/image/upload/x_4,y_0,w_291,h_291,c_crop/v1576793308/ext-cfps/Devoxx%20France%202020.png"
                        class="rounded-full -mt-6 border-4 object-center object-cover border-white mr-2 h-16 w-16"
                      />
                    </div>
                    <div class="py-2 px-2">
                      <div class=" font-bold font-title text-center">
                        {{ cfp.name }}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'cfpLanding',
  name: 'CFPsList',
  head() {
    return {
      title: 'CFPs List'
    }
  },
  async asyncData({ $axios }) {
    const cfps = await $axios.$get('cfps')
    return { cfps }
  }
}
</script>

<style scoped></style>
