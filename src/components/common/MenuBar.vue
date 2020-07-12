<template>
  <div class="menu-bar">
    <menu-list class = "menulist" v-for="(item,index) in menulist" :key="index" :title="item.main" :subtitle="item.sublist"></menu-list>
  </div>
</template>

<script>
import Menulist from "./Menulist.vue"
export default {
    components:{
        'menu-list' : Menulist
    },
    data : function(){
        return{
            test : "test",
            menulist : [
                {
                    main : "소개",
                    sublist : [
                        {title:"동아리소개",url:"/intro"},
                        {title:"사진",url:"aaa3"},
                           
                    ]
                },
                {
                    main : "해커톤",
                    sublist : [
                        {title:"공지사항",url:"/noticeboard"},
                        {title:"사진",url:"bbb2"},
                        {title:"참가신청",url:"bbb3"},
                           
                    ]
                },
                {
                   main : "공지 및 신입생신청",
                   sublist : [
                        {title:"공지사항",url:"/noticeboard"},
                        {title:"신입생신청",url:"ccc2"},
                        {title:"Q&A",url:"ccc3"},
                           
                    ]
                }
            ]
        }
    }
}
</script>

<style>
.menulist{
    margin-left: 15px;
    float: left;
}
</style>