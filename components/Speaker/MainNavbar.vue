<template>
  <div class="bg-gpPurpleDark-900 px-4 py-4">
    <div
      class="md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between"
      x-cloak
      x-data="{ open: false }"
    >
      <div class="flex justify-between items-center">
        <a class="inline-block py-2 text-white text-xl font-bold" href="#">
          <img
            alt="Gospeak"
            class="h-4"
            src="~/static/gospeak-pink-light.svg"
          />
        </a>
        <div
          class="inline-block cursor-pointer md:hidden"
          x-on:click="open = true"
        >
          <div class="bg-gray-400 w-8 mb-2" style="height: 2px;"></div>
          <div class="bg-gray-400 w-8 mb-2" style="height: 2px;"></div>
          <div class="bg-gray-400 w-8" style="height: 2px;"></div>
        </div>
      </div>

      <div x-on:click.away="open = false" x-show="open">
        <a class="block py-2 text-gray-100" href="#">Home</a>
        <nuxt-link
          :to="{ name: 'index' }"
          class="block py-2 text-indigo-300 hover:text-gray-100"
        >
          CFPs
        </nuxt-link>
        <nuxt-link
          :to="{ name: 'cfps' }"
          class="block py-2 text-indigo-300 hover:text-gray-100"
        >
          CFPs
        </nuxt-link>
        <a class="block py-2 text-indigo-300 hover:text-gray-100" href="#"
          >Speakers</a
        >

        <div class="flex items-center justify-between pt-4">
          <a
            class="w-1/2 inline-block py-2 px-4 text-gray-600 hover:text-gpPink-00 bg-gray-100 hover:bg-gray-200 rounded-lg text-center mr-2 font-bold"
            href="#"
            >Login</a
          >
          <a
            class="w-1/2 inline-block py-2 px-4 text-white bg-red-500 hover:bg-red-600 rounded-lg text-center font-bold"
            href="#"
            >Sign Up</a
          >
        </div>
      </div>

      <div>
        <div class="hidden md:block">
          <nuxt-link
            :to="{ name: 'index' }"
            class="inline-block py-1 md:py-4 text-gray-100 mr-6 font-bold"
          >
            Home
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'cfps' }"
            class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100 mr-6"
          >
            CFPs
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'speakers' }"
            class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100"
          >
            Speakers
          </nuxt-link>
        </div>
      </div>
      <div class="hidden md:block">
        <a
          class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100 mr-6"
          href="#"
          >Login</a
        >
        <a
          class="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gpPink-500 hover:text-gray-200 rounded-lg"
          href="#"
          >Sign Up</a
        >
      </div>
    </div>
  </div>
</template>
<script></script>
