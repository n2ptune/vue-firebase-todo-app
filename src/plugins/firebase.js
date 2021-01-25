import firebase from 'firebase'
import 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDZLhG1oMCOmf511yoPj2Ysly2WOCq65m4',
  authDomain: 'vue-firebase-todo-app-a354d.firebaseapp.com',
  projectId: 'vue-firebase-todo-app-a354d',
  storageBucket: 'vue-firebase-todo-app-a354d.appspot.com',
  messagingSenderId: '945026145024',
  appId: '1:945026145024:web:66f0916f63fb5fcdd6b1e5',
  measurementId: 'G-96ZGCH679D'
}

const app = firebase.initializeApp(firebaseConfig)

export default app
