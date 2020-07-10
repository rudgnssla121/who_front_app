<template>
  <div class= "header">
        <div class = "first_logo">
          <who-logo></who-logo>
        </div>
        <div class="menu_bar">
            <menu-bar></menu-bar>
            <div class = "btn">
                <div class =  "loginbtn" >
                    <login-btn></login-btn>
                </div>
                <div class = "signupbtn">
                    <signup-btn></signup-btn>
                </div>
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
.btn{
     position: absolute;;
     top:10%;
     right: 10%;
    float: left;
    margin-top : 15px;
    margin-left : 15px;
}
.loginbtn{
    float :left;
    margin-right: "30px";
}
.signupbtn{
    margin-left: "15px";
    float: left;
}
</style>