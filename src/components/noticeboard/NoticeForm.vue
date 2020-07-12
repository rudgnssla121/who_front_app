<template>
  <div class = "notice">
    <div class = "notice_header">
      <notice-header></notice-header>
    </div>
    <div class="notice_body">
      <notice-board></notice-board>
    </div>
    <div class="notice_footer">
     <notice-footer></notice-footer>
    </div>
  </div>
</template>

<script>
import NoticeHeader from "../mainpage/Header.vue"
import NoticeBoard from "./NoticeBoard.vue"
import NoticeFooter from "../mainpage/Footer.vue"
export default {
    components: {
        'notice-header' : NoticeHeader,
        'notice-board': NoticeBoard,
        'notice-footer' : NoticeFooter
    }
}
</script>

<style scoped>
.notice{
  position: absolute;
  height: 120%;
  width: 100%;
}
.notice_body{
  position: absolute;
  width: 100%;
  top:15%;
  height: 65%;
}

</style>