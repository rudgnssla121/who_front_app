<template>
  <div class="logo">
    <img src ="../../assets/who_logo.png" @click="RouterName(main)">
  </div>
</template>

<script>
export default {
  data : function(){
    return{
      main: '/'
    }
  },
  methods: {
    RouterName (targetName) {
      this.$router.push(targetName)
    }
  }
}
</script>

<style>
.logo{
  cursor: pointer;
}
</style>