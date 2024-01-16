import firebase from "firebase"

const firebaseConfig = {
    apiKey:"",
    authDomain:"",
    projectId:"",
    storageBucket:"",
    messagingSenderId:"",
    appId:"",
    measurementId:""
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.initializeApp(firebaseConfig)

const auth = firebase.auth()

export {db, auth}