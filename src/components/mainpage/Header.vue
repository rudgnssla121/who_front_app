<template>
  <div class= "header">
        <div class = "first_logo">
          <who-logo></who-logo>
        </div>
        <div class="menu_bar">
            <menu-bar></menu-bar>  
        </div>
        <div class = "buttons">
            <div class =  "loginbtn" >
                <login-btn></login-btn>
            </div>
            <div class = "signupbtn">
                <signup-btn></signup-btn>
            </div>
            </div>
  </div>
</template>


<script>
import WhoLogo from "../common/Whologo.vue"
import MenuBar from "../common/MenuBar.vue"
import LoginBtn from "../common/LoginBtn.vue"
import SignUpBtn from "../common/SignUpBtn.vue"
export default {
    components:{
         'who-logo' : WhoLogo,
         'menu-bar' : MenuBar,
         'login-btn' : LoginBtn,
         'signup-btn' : SignUpBtn,
    }
    
}
</script>

<style scoped>
.header{
    position: absolute;
    margin : 15px;
    width: 100%;
    top: 0%;
    height: 15%;
}
.first_logo{
    margin-left: 50px;
    margin-top: 30px;
    float: left;
}
.menu_bar{
    margin-top: 35px;
    margin-left: 200px;
    float: left;
}
.buttons{
    float: left;
    right: 13%;
    margin-top: 40px;
    margin-left: 170px;
}
.loginbtn{
    float :left;
    margin-right : 8px;
}
.signupbtn{
    float: left;
}
</style>