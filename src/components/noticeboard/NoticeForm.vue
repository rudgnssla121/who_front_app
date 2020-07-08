<template>
  <div class = "notice-body">
    <who-logo></who-logo>
    <notice-board></notice-board>
    <notice-pagination></notice-pagination>
  </div>
</template>

<script>
import NoticeBoard from "./NoticeBoard.vue"
import Pagination from "../common/Pagination.vue"
import WhoLogo from "../common/Whologo.vue"
export default {
    components: {
        'who-logo' : WhoLogo,
        'notice-board': NoticeBoard,
        'notice-pagination': Pagination
    }
}
</script>

<style>

</style>