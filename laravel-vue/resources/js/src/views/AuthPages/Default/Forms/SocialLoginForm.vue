<template>
  <ul class="iq-social-media">
    <li v-for="(socialProvider, index) in socialProviders" :key="index">
      <a href="javascript:void(0)" @click="socialLogin(socialProvider.type)">
          <i :class="socialProvider.icon"></i>
      </a>
    </li>
  </ul>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'SocialLoginForm',
  data: () => ({
    socialProviders: [
      {
        type: 'google',
        icon: 'ri-google-line'
      },
      {
        type: 'facebook',
        icon: 'ri-facebook-box-line'
      }
      /* {
        type: 'twitter',
        icon: 'ri-twitter-line'
      } */
    ]
  }),
  methods: {
    socialLogin (type) {
      let firebaseProvider = new firebase.auth.GoogleAuthProvider()
      if (type === 'facebook') {
        firebaseProvider = new firebase.auth.FacebookAuthProvider()
      } else if (type === 'twitter') {
        firebaseProvider = new firebase.auth.TwitterAuthProvider()
      }

      firebase.auth().signInWithPopup(firebaseProvider)
        .then(user => {
          let firebaseUser = firebase.auth().currentUser.providerData[0]
          this.$store.dispatch('Setting/authUserAction', {
            auth: true,
            authType: 'firebase',
            user: {
              id: firebaseUser.uid,
              name: firebaseUser.displayName,
              mobileNo: firebaseUser.phoneNumber,
              email: firebaseUser.email,
              profileImage: firebaseUser.photoURL
            }
          })
          localStorage.setItem('user', JSON.stringify(firebaseUser))
          this.$router.push({ name: 'mini.dashboard.home-1' })
        }).catch()
    }
  }
}
</script>
