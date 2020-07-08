<template>
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
            <tr v-for="item in noticedata" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.time }}</td>
            </tr>
          </tbody>
        </template>
    </v-simple-table>
  </div>
</template>

<script>
import noticedata from "../../assets/noticedata.json"
 

export default {
   
    name: 'NoticeBoard',
    data : function() {
      return{
        noticedata: noticedata
      }
    }    
        
        



}

    


</script>

<style>

</style>