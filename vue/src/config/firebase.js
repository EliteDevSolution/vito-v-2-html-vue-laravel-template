import firebase from 'firebase'
import constant from './constant'
let dbInit
let firebaseAppInit
if (process.env.VUE_APP_FIREBASE === 'true') {
  firebaseAppInit = firebase.initializeApp(constant.firebaseConfig)

  dbInit = firebaseAppInit.firestore()
}
export const db = dbInit
export const firebaseApp = firebaseAppInit
