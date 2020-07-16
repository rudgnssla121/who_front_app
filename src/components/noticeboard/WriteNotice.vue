<template>
    <div class="container">
        <v-form>
            <v-container>
                <v-row>
                    제목
                </v-row>
                <v-row>
                    <v-text-field
                        :counter="50"
                        label="제목"
                        name="title"
                        required="required"
                        v-model="title"
                        maxlength="50"></v-text-field>
                </v-row>
                <v-row>
                    내용
                </v-row>
                <v-row>
                    <v-textarea
                        filled="filled"
                        name="context"
                        hint="내용을 입력해주세요."
                        v-model="context"
                        :counter="1000"
                        maxlength="1000"></v-textarea>
                </v-row>
                <v-row>
                <div class="btn">
                    <v-btn block="block" outlined="outlined" color="blue" @click="writeClick">
                        등록
                    </v-btn>
                </div>
                </v-row>
            </v-container>
        </v-form>

    </div>

</template>

<script>
import {mapActions, mapState} from 'vuex'
    export default {
        data: function(){
            return{
                title: '',
                context: '',
                data: [
                    {username:"작성자"},
                    {title:""},
                    {time:"시간"},
                    {content: ""}
                ]
            }
        },
        computed:{
            ...mapState({
                list: 'list'
            }),
            dataSet(){
                const datasetlist = this.data;
                datasetlist.title = this.title;
                datasetlist.content = this.context;
                return datasetlist;
            }
        },
        methods:{
            ...mapActions({
                init: 'listInit',
                addlist: 'listAdd'
            }),
            writeClick(){
                this.addlist(this.dataSet);
                this.init();
                // this.$router.push('/noticeboard');
            }
        },
        created(){
            this.init();
        }
        


    }
</script>

<style>
    .container {
        position: relative;
        width: 100%;
        height: 75%;
        top: 15%;
        margin: 15px;
        left: 50%; 
        transform: translateX(-50%);
    }
    .btn{
        width: 10%;
    }
</style>