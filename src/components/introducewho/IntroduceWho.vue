<template>
  <div class = "introducebody">
    
    <div class = "introsentense">
        <intro-sentense></intro-sentense>
    </div>
    
  </div>
</template>

<script>
import IntroSentense from "./IntroduceWord.vue"

export default {
    components:{
        'intro-sentense' : IntroSentense
    }

}
</script>

<style>
.introsentense{
    position: absolute;
    width: 100%;
    top:15%;
    height: 65%;
}
</style>