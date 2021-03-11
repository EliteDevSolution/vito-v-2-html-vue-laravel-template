<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="name" name="Full Name" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="name">Your Full Name</label>
          <input type="text" v-model="user.name" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="name" aria-describedby="emailHelp" placeholder="Your Full Name">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="name" name="Email" rules="required|email" v-slot="{ errors }">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" v-model="user.email" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="email" aria-describedby="emailHelp" placeholder="Enter email">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="password" name="Password" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="user.password" :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
                 id="password" placeholder="Password">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="d-inline-block w-100">
        <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
          <input type="checkbox" class="custom-control-input" :id="formType">
          <label class="custom-control-label" :for="formType">I accept <a href="#">Terms and Conditions</a></label>
        </div>
        <button type="submit" class="btn btn-primary float-right">Sign Up</button>
      </div>
      <div class="sign-info">
          <span class="dark-color d-inline-block line-height-2">
            Already Have Account ?
            <router-link to="/auth/sign-in1" class="iq-waves-effect pr-4">
                Sign in
              </router-link>
          </span>
          <social-login-form></social-login-form>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import auth from '../../../../services/auth'
import firebase from 'firebase'
import SocialLoginForm from './SocialLoginForm'
import { mapGetters } from 'vuex'

export default {
  name: 'SignUp1Form',
  components: { SocialLoginForm },
  props: ['formType'],
  computed: {
    ...mapGetters({
      users: 'Setting/usersState'
    })
  },
  data: () => ({
    user: {
      email: '',
      password: ''
    }
  }),
  methods: {
    onSubmit () {
      if (this.formType === 'passport') {
        this.passportRegister()
      } else if (this.formType === 'jwt') {
        this.jwtRegister()
      } else if (this.formType === 'firebase') {
        this.firebaseRegister()
      }
    },
    jwtRegister () {
      this.$store.dispatch('Setting/addUserAction', this.user)
      this.$router.replace('/auth/sign-in1')
    },
    passportRegister () {
      auth.register(this.user).then(response => {
        if (response.status) {
          this.$router.push('/auth/sign-in1')
        } else if (response.data.errors.length > 0) {
          this.$refs.form.setErrors(response.data.errors)
        }
      }).finally(() => { this.loading = false })
    },
    firebaseRegister () {
      firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then((user) => {
        this.$router.replace('/auth/sign-in1')
        // eslint-disable-next-line handle-callback-err
      }).catch((err) => {
      })
    }
  }
}
</script>
