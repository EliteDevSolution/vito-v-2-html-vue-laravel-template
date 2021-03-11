<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="email" name="E-mail" rules="required|email" v-slot="{ errors }">
        <div class="form-group">
          <label for="emailInput">Email address</label>
          <input
            type="email"
            :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
            id="emailInput"
            aria-describedby="emailHelp"
            v-model="user.email"
            placeholder="Enter email"
            required
          />
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="password" name="Password" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="passwordInput">Password</label>
          <router-link to="/auth/password-reset1" class="float-right">Forgot password?</router-link>
          <input
            type="password"
            :class="'form-control mb-0' +(errors.length > 0 ? ' is-invalid' : '')"
            id="passwordInput"
            v-model="user.password"
            placeholder="Password"
            required
          />
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="d-inline-block w-100">
        <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
          <input type="checkbox" class="custom-control-input" :id="formType" />
          <label class="custom-control-label" :for="formType">Remember Me</label>
        </div>
        <button type="submit" class="btn btn-primary float-right">Sign in</button>
      </div>
      <div class="sign-info">
        <span class="dark-color d-inline-block line-height-2">
          Don't have an account?
          <router-link
            to="/dark/auth/sign-up1"
            class="iq-waves-effect pr-4"
            v-if="$route.meta.dark"
          >Sign up</router-link>
          <router-link to="/auth/sign-up1" class="iq-waves-effect pr-4" v-else>Sign up</router-link>
        </span>
        <social-login-form></social-login-form>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import auth from "../../../../services/auth";
import firebase from "firebase";
import SocialLoginForm from "./SocialLoginForm";
import { core } from "../../../../config/pluginInit";
import { mapGetters } from "vuex";

export default {
  name: "SignIn1Form",
  components: { SocialLoginForm },
  props: ["formType", "email", "password"],
  data: () => ({
    user: {
      email: "",
      password: ""
    }
  }),
  mounted() {
    this.user.email = this.$props.email;
    this.user.password = this.$props.password;
  },
  computed: {
    ...mapGetters({
      stateUsers: "Setting/usersState"
    })
  },
  methods: {
    onSubmit() {
      if (this.formType === "passport") {
        this.passportLogin();
      } else if (this.formType === "jwt") {
        this.jwtLogin();
      } else if (this.formType === "firebase") {
        this.firebaseLogin();
      }
    },
    passportLogin() {
      auth
        .login(this.user)
        .then(response => {
          if (response.status) {
            localStorage.setItem(
              "user",
              JSON.stringify(response.data.access_token)
            );
            localStorage.setItem("access_token", response.data.access_token);
            this.$router.push({ name: "dashboard.home-1" });
          } else if (response.data.errors.length > 0) {
            this.$refs.form.setErrors(response.data.errors);
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    jwtLogin() {
      let _this = this;
      auth.jwtLogin(this.user).then(response => {
        localStorage.setItem("user", JSON.stringify(_this.user));
        localStorage.setItem("access_token", response.data.access_token);
        this.$router.push({ name: "dashboard.home-1" });
      });
    },
    firebaseLogin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(user => {
          let firebaseUser = firebase.auth().currentUser.providerData[0];
          this.$store.dispatch("Setting/authUserAction", {
            auth: true,
            authType: "firebase",
            user: {
              id: firebaseUser.uid,
              name: firebaseUser.displayName,
              mobileNo: firebaseUser.phoneNumber,
              email: firebaseUser.email,
              profileImage: firebaseUser.photoURL
            }
          });
          localStorage.setItem("user", JSON.stringify(firebaseUser));
          this.$router.push({ name: "dashboard.home-1" });
        })
        .catch(err => {
          if (err.code === "auth/user-not-found") {
            core.showSnackbar(
              "error",
              "These credentials do not match our records."
            );
          } else {
            core.showSnackbar("error", err.message);
          }
        });
    }
  }
};
</script>
