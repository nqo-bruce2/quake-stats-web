<template>
  <div class="home">
    <img src="../assets/pa_logo_transparent.png">
    <Home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'Home',
  components: {
    Home
  }
}
</script>
