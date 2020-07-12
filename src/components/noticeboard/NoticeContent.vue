<template>
  <div class = "noticecontent">
    <div class = "contentheader">
        <content-header></content-header>
    </div>
    <div class = "contentform">
        <div class = "contentname">
            <h1>  공지사항  </h1>
            <div class = "contenttime">
                <p>시간 : {{noticedata.time}}</p>
            </div>
            <hr>  
            <div class = "name">
                <h2>제목 : {{noticedata.name}}</h2>
            </div>
        </div>
        <div class = "contenttitle">
            <p>{{noticedata.title}}</p>
        </div>
    </div>
    <div calss = "contentfooter">
        <content-footer></content-footer>
    </div>
  </div>
</template>

<script>
import ContentHeader from "../mainpage/Header.vue"
import ContentFooter from "../mainpage/Footer.vue"

export default {
    data : function() {
        return{
            noticedata : []
        }
    },
    components:{
        'content-header' : ContentHeader,
        'content-footer' : ContentFooter
    },
    created() {
  // 컴포넌트 생성시 데이터를 패치한다
        this.noticedata = this.$route.params.noticedata;
    },
    
  

}

</script>

<style>
</style>