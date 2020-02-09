<template>
  <div class="w-full text-center text-gray-200 p-8 pin-b bg-gpPurpleDark-900">
    <div
      class="container mx-auto flex md:items-center justify-between flex-col md:flex-row py-4"
    >
      <div class="text-left">
        <img src="~/static/gospeak-pink-light.svg" alt="Gospeak" class="h-4" />
        <p class="mt-2">
          <small>Dev env</small>
        </p>
      </div>
      <ul class="text-left my-4 md:m-0 list-reset">
        <li>
          Check out the
          <a
            href="https://github.com/gospeak-io/gospeak/blob/master/README.md"
            class="font-bold font-medium mr-4 hover:text-gpPink-500 "
            >Readme</a
          >
        </li>
        <li>
          Read the
          <a
            href="https://github.com/gospeak-io/gospeak/tree/master/docs"
            class="font-bold font-medium mr-4 hover:text-gpPink-500 "
            >documentation</a
          >
        </li>
      </ul>
      <ul class="text-left my-4 md:m-0 list-reset">
        <li>
          Submit
          <a
            href="https://github.com/gospeak-io/gospeak/issues"
            target="_blank"
            class="font-bold font-medium mr-4 hover:text-gpPink-500 "
            >an issue</a
          >
        </li>
        <li>
          Study the
          <a
            href="https://dev-gospeak.herokuapp.com/api"
            class="font-bold font-medium mr-4 hover:text-gpPink-500 "
            >API doc</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>

<style scoped></style>
