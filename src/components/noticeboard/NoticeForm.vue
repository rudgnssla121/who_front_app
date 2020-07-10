<template>
  <div class = "notice-body">
    <notice-header></notice-header>
    <notice-board></notice-board>
    
  </div>
</template>

<script>
import NoticeHeader from "../mainpage/Header.vue"
import NoticeBoard from "./NoticeBoard.vue"
export default {
    components: {
        'notice-header' : NoticeHeader,
        'notice-board': NoticeBoard,
        
    }
}
</script>

<style>

</style>