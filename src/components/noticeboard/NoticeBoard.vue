<template>
  <div>
  <div class = "noticetable">
      <v-simple-table height="100%">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Calories</th>
              <th class="text-left">time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in paginatedData" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.title }}</td>
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
    
  </div>
  
</template>

<script>
import noticedata from "../../assets/noticedata.json"

 

export default {
    
    name: 'NoticeBoard',
    data : function() {
      return{
        noticedata: noticedata,
        pageNum : 1,
        pageSize: 10
      }
    },
    methods: {
    
  },
  computed: {
    pageCount () {
      let listLeng = this.noticedata.length,
          listSize = this.pageSize,
          page = Math.floor(listLeng / listSize);
      // if (listLeng % listSize > 0) page += 1;
      
      return page;
    },
    paginatedData () {
      const start = this.pageNum * this.pageSize,
            end = start + this.pageSize;
      return this.noticedata.slice(start, end);
    }
  }

        
        



}

    


</script>

<style>
.noticetable{
  position: absolute;
  left: 10%;
  top: 15%;
  width: 80%;
}
.paging{
  position: absolute;
  left: 28%;
  
  bottom: 10%;
}
</style>