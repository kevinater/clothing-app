import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyAA6jU9WO7IbGamY3c7V4_UNfVBZ7g2MPU",
    authDomain: "clothing-db-3146c.firebaseapp.com",
    databaseURL: "https://clothing-db-3146c.firebaseio.com",
    projectId: "clothing-db-3146c",
    storageBucket: "clothing-db-3146c.appspot.com",
    messagingSenderId: "995640898179",
    appId: "1:995640898179:web:6a8aef4fc9d10bab1ce1b6",
    measurementId: "G-04J8MLR4F4"
  }

  firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account '})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;