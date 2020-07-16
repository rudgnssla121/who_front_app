<template>
  <div class = "notice">
    <notice-board></notice-board>
  </div>
</template>

<script>
import NoticeBoard from "./NoticeBoard.vue"

export default {
    components: {
        'notice-board': NoticeBoard,
    }
}
</script>

<style scoped>
.notice{
  position: relative;
  width: 100%;
  height: 75%;
  top:10%;
  margin:15px;
}


</style>