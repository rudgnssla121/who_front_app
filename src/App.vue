<template>
  <v-app>
    <v-content>
      <app-header/>
      
      <router-view/>
      <app-footer/>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from "./components/mainpage/Header"
import AppFooter from "./components/mainpage/Footer"

export default {
  name: 'App',

  components: {
    'app-header' : AppHeader,
    'app-footer' : AppFooter
  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>