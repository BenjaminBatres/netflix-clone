// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsQMo1xyIZCCLP6kfDBFWnimzrn-3s1aQ",
    authDomain: "netflix-clone-6c8bf.firebaseapp.com",
    projectId: "netflix-clone-6c8bf",
    storageBucket: "netflix-clone-6c8bf.firebasestorage.app",
    messagingSenderId: "514125320610",
    appId: "1:514125320610:web:f5edcf78c1e9cd128d22fb"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }