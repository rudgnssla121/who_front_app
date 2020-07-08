import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/HelloWorld.vue";
import NoticeForm from "../components/noticeboard/NoticeForm.vue"
import LoginForm from "../components/loginpage/LoginForm.vue"

Vue.use(VueRouter);


 export default new VueRouter({
   mode: "history",
   routes: [
     {
       path: "/",
       component: Main,
       name: "MainPage",
     },
     {
       path: "/noticeboard",
       component: NoticeForm,
       name: "NoticeBoard",
     },
     {
       path: "/loginform",
       component: LoginForm,
       name: "LoginForm",
     },
   ],
 });
