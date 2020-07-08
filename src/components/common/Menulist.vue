<template>

  <div class="text-center" >
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          max-width = "100px"
          min-width = "100px"
        >
        {{title}}
        </v-btn>
      </template>
      <v-list>
        
        <v-list-item
          v-for="(item, index) in subtitle"
           :key="index"
          @click="RouterName(item.url)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>

export default {
    props:['title', 'subtitle'],
     methods:{
      RouterName ( targetName) {
      this.$router.push(targetName)
      }
    },
  data: () => ({

    }),
}

</script>

<style>
.text_center{
    position:absolute;
}
</style>