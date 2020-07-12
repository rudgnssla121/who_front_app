<template>
  <div class = "introducebody">
    <div class = "introheader">
        <intro-header></intro-header>
    </div>
    <div class = "introsentense">
        <intro-sentense></intro-sentense>
    </div>
    <div class = "introfooter">
        <intro-footer></intro-footer>
    </div>
  </div>
</template>

<script>
import IntroHeader from "../mainpage/Header.vue"
import IntroFooter from "../mainpage/Footer.vue"
import IntroSentense from "./IntroduceWord.vue"

export default {
    components:{
        'intro-header' : IntroHeader,
        'intro-footer' : IntroFooter,
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