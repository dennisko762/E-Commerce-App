import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAAyHSelDCDVRLlkGD9mVABzexW3ehyV5I",
  authDomain: "clone-3cbb2.firebaseapp.com",
  databaseURL: "https://clone-3cbb2.firebaseio.com",
  projectId: "clone-3cbb2",
  storageBucket: "clone-3cbb2.appspot.com",
  messagingSenderId: "645125377957",
  appId: "1:645125377957:web:1d8f1954e860a518cda24c",
  measurementId: "G-P1695NV0MJ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth();
//const database = firebase.database();
//const admin = require("firebase-admin");
//const app = admin.initializeApp();

export { db, auth };
