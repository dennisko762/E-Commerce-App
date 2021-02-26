import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAboUhxE9jtilFdJXwwNOWcy7AddK8hj9c",
  authDomain: "webshop-67bfc.firebaseapp.com",
  projectId: "webshop-67bfc",
  storageBucket: "webshop-67bfc.appspot.com",
  messagingSenderId: "723682342386",
  appId: "1:723682342386:web:544142fa83b1fc45ade76b",
  measurementId: "G-8EKFDJ1FPT"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth();
//const database = firebase.database();
//const admin = require("firebase-admin");
//const app = admin.initializeApp();

export { db, auth };

