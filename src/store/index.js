import Vue from 'vue'
import Vuex from 'vuex'
import {datalist} from "../assets/noticedata.json"

Vue.use(Vuex);


export const store = new Vuex.Store({
    state:{
        list:[]
    },
    mutations:{
        setList(state, data){
            state.list = data;
        },
        addList(state, {data}){
            state.list.push(data);
        }

    },
    actions:{
        listInit({commit}){
            const res = datalist;
            const data = res;
            commit('setList', data);
        },
        listAdd({commit},{data}){
            commit('addList', data);
        }
    },
    getters:{
        getlist: (state) => (index) => {
            return state.list.find(findlist => findlist.index === index)
        }
    }

})