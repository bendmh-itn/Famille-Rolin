import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const provider = new firebase.auth.GoogleAuthProvider();
var firebaseApp;

if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyABJKs3lp_cLE6k9WX1ERcn4XlaI2BZ9wM",
    authDomain: "rolin-file.firebaseapp.com",
    projectId: "rolin-file",
    storageBucket: "rolin-file.appspot.com",
    messagingSenderId: "922531053521",
    appId: "1:922531053521:web:6cf7ea757988698a8aeaf0",
  });
} else {
  firebaseApp = firebase.app(); // if already initialized, use that one
}

export const db = firebaseApp.firestore();

function findAll() {
  return db.collection("famille").orderBy("numberFamilly", "asc").get();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
const test = {
  findAll,
  signInWithGoogle,
};

export default test;
