// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDUUcKISEle8JpzXx4PvyVnyjWWGKAhdIA",
  authDomain: "fb-looks-portfolio.firebaseapp.com",
  projectId: "fb-looks-portfolio",
  storageBucket: "fb-looks-portfolio.appspot.com",
  messagingSenderId: "102994977737",
  appId: "1:102994977737:web:9d36b1e4303e3dd9a6be18",
  measurementId: "G-0D3HR0SG21"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider};
export default db;