<template>
  <div class = "body">
    <div class="header">
      <app-header></app-header>
    </div>
     <div class = "mid_content">
       <app-mid></app-mid>
     </div>
    <div class="footer">
      <app-footer></app-footer>
    </div>
    
  </div>
</template>

<script>
import AppHeader from "./mainpage/Header.vue"
import AppMid from "./mainpage/Content.vue"
import IntroWho from "./mainpage/Footer.vue"


  export default {
    name: 'MainPage',
    components:{
      'app-header' : AppHeader,
      'app-mid' : AppMid,
      'app-footer' : IntroWho,
      
    },
    data: () => ({
       
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>

<style>


</style>