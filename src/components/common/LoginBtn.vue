<template>
  <div class="loginbtn">
        <v-btn depressed small color="primary" @click="RouterName(loginform)">로그인</v-btn>
      </div>
</template>

<script>
export default {
  data : function(){
    return {
      loginform : 'loginform'
    }
  },
  methods:{
     RouterName ( targetName) {
      this.$router.push(targetName)
    }
  }
}
</script>

<style>

</style>