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
                        "aa1",
                        "aaa2"
                    ]
                },
                {
                    main : "bbbb",
                    sublist : [
                        "bbb1",
                        "bbb2"
                    ]
                },
                {
                    main : "ccc",
                    sublist : [
                        "ccc1",
                        "ccc2"
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