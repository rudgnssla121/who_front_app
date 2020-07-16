import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/HelloWorld.vue";
import NoticeForm from "../components/noticeboard/NoticeForm.vue"
import LoginForm from "../components/loginpage/LoginForm.vue"
import SignUpForm from "../components/signuppage/SignUpForm.vue"
import IntroSentense from "../components/introducewho/IntroduceWho.vue"
import NoticeContent from "../components/noticeboard/NoticeContent.vue"
import WriteNotice from "../components/noticeboard/WriteNotice.vue"

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
       path: "/noticeboard/noticecontent/:index",
       component: NoticeContent,
       name: "NoticeContent",
     },
     {
       path: "/loginform",
       component: LoginForm,
       name: "LoginForm",
     },
     {
       path: "/signupform",
       component: SignUpForm,
       name: "SignUpForm",
     },
     {
       path: "/intro",
       component: IntroSentense,
       name: "IntroSentense",
     },
     {
       path: "/noticeboard/writenotice",
       component: WriteNotice,
       name: "WriteNotice",
     },
   ],
 });
