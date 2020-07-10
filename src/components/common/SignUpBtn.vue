<template>
  <div class="signupbtn">
        <v-btn depressed small color="primary" @click="RouterName(Signupform)">회원가입</v-btn>
      </div>
</template>

<script>
export default {
  data : function(){
    return {
      Signupform : 'signupform'
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