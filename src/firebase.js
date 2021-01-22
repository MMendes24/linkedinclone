import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCHp_CA8Ezt_xFvifu-IcQFa2rIQIXr_RA",
    authDomain: "linkedin-clone-af487.firebaseapp.com",
    projectId: "linkedin-clone-af487",
    storageBucket: "linkedin-clone-af487.appspot.com",
    messagingSenderId: "563091705455",
    appId: "1:563091705455:web:72d65069c2195a64bbc79a"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }