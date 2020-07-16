<template>
  <div class = "noticecontent">
    
    <div class = "contentform">
        <div class = "contentname">
            <h1>  공지사항  </h1>
            <div class = "contenttime">
                <p>시간 : {{list[index].time}}</p>
            </div>
            <hr>  
            <div class = "name">
                <h2>제목 : {{list[index].name}}</h2>
            </div>
        </div>
        <div class = "contenttitle">
            <p>{{list[index].content}}</p>
        </div>
    </div>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {

    name: 'noicecontent',
    data : function() {
        return{
            index: 0,
            datalsit:[]
        }
    },
    computed:{
        ...mapState({
            list: 'list'
        }),
        
    },
    created() {
        this.index = this.$route.params.index;
        this.$store.dispatch('listInit');
    },
    
}

</script>

<style>
.contentform{
    margin:50px;
    margin-top:100px;
}
</style>