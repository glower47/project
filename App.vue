<template>
  <div id="app">
    <link rel="stylesheet" 
        href="node_modules/@fortawesome/fontawesome-free/css/all.css">
    <router-view></router-view>
  </div>
</template>

<script>

import LoginComp from './components/loginPage.vue';


export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    'login-comp': LoginComp
  }
}
</script>

<style scoped>

  

</style>
