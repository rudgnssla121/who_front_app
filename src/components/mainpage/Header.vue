<template>
  <div class= "header">
        <div class = "first_logo">
          <who-logo></who-logo>
        </div>
        <div class="menu_bar">
            <menu-bar></menu-bar>
            <div class =  "first_loginform">
                <login-btn></login-btn>
        </div>
    </div>
  </div>
</template>


<script>
import WhoLogo from "../common/Whologo.vue"
import MenuBar from "../common/MenuBar.vue"
import LoginBtn from "../common/LoginBtn.vue"
export default {
    components:{
         'who-logo' : WhoLogo,
         'menu-bar' : MenuBar,
         'login-btn' : LoginBtn,
         
    }
    
}
</script>

<style>
.header{
    margin : 30px;
}
.first_logo{
    margin : 5px;
    float: left;
}
.menu_bar{
    position: absolute;;
    left:40%;
    float: left;
    width:60%;
}
.first_loginform{
     position: absolute;;
     top:10%;
     right: 10%;
    float: left;
    margin-top : 15px;
    margin-left : 15px;
}
</style>