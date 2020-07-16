<template>
  <div class = "noticeboard">
    <div class = "noticetable">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Title</th>
              <th class="text-left">time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in paginatedData" :key="index">
                <td>{{ item.username }}</td>
                <td><router-link v-bind:to="`/noticeboard/noticecontent/${realpage+index}`">{{item.name}}</router-link></td>
                <td>{{ item.time }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      </div>
    <div class = "paging">
      <div class="text-xs-center">
        <v-pagination :length="pageCount" v-model="pageNum" :total-visible="10"></v-pagination>
      </div>
    </div>
    <div class = "writebtn">
      <v-btn depressed small color="primary" @click="RouterName(writeform)">글쓰기</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState , mapActions } from 'vuex'
// import EventBus from "../../EventBus"

export default {
    
    name: 'NoticeBoard',
    created() {
    this.init();
    },
    data : function() {
      return{
        pageNum : 1,
        pageSize: 10,
        writeform: '/noticeboard/writenotice',
      }
    },
    methods: {
      ...mapActions({
        init: 'listInit'
      }),
      RouterName(writeform){
        this.$router.push(writeform);
      }
    },
  computed: {
    ...mapState({
      datalist: 'list'
    }),
    realNum(){
      let num = this.pageNum;
      num = num - 1;
      return num;
    },
    realpage(){
      let listNum = ((this.pageNum-1)*this.pageSize);
      return listNum;
    },
    pageCount () {
      let listLeng = this.datalist.length,
          listSize = this.pageSize,
          page = Math.floor(listLeng / listSize);
         if (listLeng % listSize > 0) page += 1;
      return page;
    },
    paginatedData () {
      const start = this.realNum * this.pageSize,
            end = start + this.pageSize;
      return this.datalist.slice(start, end);
    },
    
  },
  


}

    


</script>

<style>
.noticeboard{
  left: 12%;
  width: 80%;
  height: 90%;
  margin-top: 20px;
  margin-left:150px;
}
.noticetable{
  width: 100%;
}
.paging{
  position: absolute;
  bottom:0%;
  left: 50%; 
  transform: translateX(-50%);
}

.v-application a{
  color:black !important;
  text-decoration:none;
}
.writebtn{
  position: absolute;
  bottom:5%;
}
</style>