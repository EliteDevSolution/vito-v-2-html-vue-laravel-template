<template>
  <div>
    <h1 class="mb-0">Sign Up</h1>
    <p>Enter your email address and password to access admin panel.</p>
    <tab-nav :pills="true" class="nav-fill mb-3" id="pills-tab-1">
      <tab-nav-items :active="true" id="pills-jwt-tab-fill"
                     href="#pills-jwt-fill" ariaControls="pills-jwt-fill"
                     role="tab" :ariaSelected="true" title="JWT" />
      <tab-nav-items :active="false" id="pills-firebase-tab-fill"
                     href="#pills-firebase-fill" ariaControls="pills-firebase-fill"
                     role="tab" :ariaSelected="false" title="Firebase" />
      <tab-nav-items :active="false" id="pills-oauth0-tab-fill"
                     href="#pills-oauth0-fill" ariaControls="pills-oauth0-fill"
                     role="tab" :ariaSelected="false" title="OAuth0" />
    </tab-nav>
    <tab-content id="pills-tabContent-1" class="mt-0">
      <tab-content-item :active="true" id="pills-jwt-fill" aria-labelled-by="pills-jwt-tab-fill">
        <sign-up1-form formType="jwt"></sign-up1-form>
      </tab-content-item>
      <tab-content-item :active="false" id="pills-firebase-fill" aria-labelled-by="pills-firebase-tab-fill">
        <sign-up1-form formType="firebase"></sign-up1-form>
      </tab-content-item>
      <tab-content-item :active="false" id="pills-oauth0-fill" aria-labelled-by="pills-oauth0-tab-fill">
        <div class="height-300 pb-4 d-flex justify-content-center">
          <a href="javascript:void(0)" @click="loginOAuth0()" class="btn btn-danger align-self-center">
            OAuth0 Login
          </a>
        </div>
      </tab-content-item>
    </tab-content>
  </div>
</template>
<script>

import SignUp1Form from './Forms/SignUp1Form'
import auth0 from 'auth0-js'
import constant from '../../../config/constant'

export default {
  name: 'SignUp1',
  components: { SignUp1Form },
  data: () => ({}),
  methods: {
    loginOAuth0 () {
      new auth0.WebAuth(constant.auth0Config).authorize()
    }
  }
}
</script>
