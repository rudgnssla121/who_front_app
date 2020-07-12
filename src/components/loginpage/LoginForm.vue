<template>

   <div class = "loginform">
    <div class = "who-logo">
      <who-logo></who-logo>
    </div>
    <div class = "loginbody">
   <form>
   <v-col
          cols="12"
          md="4"
        >
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
     <v-text-field
      v-model="password"
      :error-messages="passwordErrors"
      label="PassWord"
      required
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show ? 'text' : 'password'"
       hint="At least 8 characters"
       value=""
      class="input-group--focused"
      @click:append="show = !show"
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>
    
   </v-col>
    <v-btn class="mr-4" @click="submit">로그인</v-btn>
  </form>
  </div>
  <login-footer></login-footer>
  </div> 
</template>


<script>
import WhoLogo from "../common/Whologo.vue"
import { validationMixin } from 'vuelidate'
import { required, maxLength} from 'vuelidate/lib/validators'
import LoginFooter from "../mainpage/Footer.vue"


export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      password: { required, maxLength: maxLength(10) },

      
    },

    name : "LoginForm",
    components: {
      'who-logo' : WhoLogo,
      'login-footer' : LoginFooter
    },
    data: () => ({
      name: '',
      email: '',
      show: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
    }),

    computed: {
      
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.maxLength && errors.push('password must be at most 10 characters long')
        !this.$v.password.required && errors.push('password is required.')
        return errors
      },
      
    },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
      },
    },
  
}

</script>

<style scoped>
.loginform{
  width: 100%;
  height: 100%;
}
.who-logo{
  margin :35px;
}
.loginbody{
  position:relative;
  top:15%;
  left:30%;
}
</style>