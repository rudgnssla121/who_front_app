<template>

   <div class = "signupform">
    <div class = "who-logo">
      <who-logo></who-logo>
    </div>
    <div class = "signupbody">
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
      :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show ? 'text' : 'password'"
       hint="At least 8 characters"
       value=""
      class="input-group--focused"
      @click:append="show = !show"
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
   
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>
   </v-col>
    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
  </div>
  <signup-footer></signup-footer>
  </div> 
</template>


<script>
import WhoLogo from "../common/Whologo.vue"
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import SignupFooter from "../mainpage/Footer.vue"


export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      password: { required, maxLength: maxLength(10) },
      email: { required, email },

      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    name : "SignUpForm",
    components: {
      'who-logo' : WhoLogo,
      'signup-footer' : SignupFooter
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
      checkbox: false,
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
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
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
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
        this.select = null
        this.checkbox = false
      },
    },
  
}

</script>

<style scoped>
.signupform{
  width: 100%;
  height: 100%;
}
.who-logo{
  margin :35px;
}
.signupbody{
  position:relative;
  top:10%;
  left:30%;
}
</style>