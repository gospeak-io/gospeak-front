export default function({ $axios }) {
  $axios.onRequest((config) => {
    console.log('request to ' + config.url)
  })
}
