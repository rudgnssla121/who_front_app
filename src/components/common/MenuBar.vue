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
                    main : "aaa",
                    sublist : [
                        {title:"게시판",url:"/noticeboard"},
                        {title:"aaa2",url:"aaa2"},
                        {title:"aaa3",url:"aaa3"},
                           
                    ]
                },
                {
                    main : "bbb",
                    sublist : [
                        {title:"게시판",url:"/noticeboard"},
                        {title:"bbb2",url:"bbb2"},
                        {title:"bbb3",url:"bbb3"},
                           
                    ]
                },
                {
                   main : "ccc",
                   sublist : [
                        {title:"게시판",url:"/noticeboard"},
                        {title:"ccc2",url:"ccc2"},
                        {title:"ccc3",url:"ccc3"},
                           
                    ]
                }
            ]
        }
    }
}
</script>

<style>
.menu-bar{
    margin-top : 15px;
    margin-left: 15px;
    float: left;
}
.menulist{
    margin-left: 15px;
    float: left;
}
</style>