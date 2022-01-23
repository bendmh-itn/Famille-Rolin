import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

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

function FindIdPerson(numberFamilly) {
  return db
    .collection("famille")
    .where("numberFamilly", "==", numberFamilly)
    .get();
}

function generateUniqueFirestoreId() {
  // Alphanumeric characters
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let autoId = "";
  for (let i = 0; i < 20; i++) {
    autoId += chars[Math.floor(Math.random() * chars.length)];
  }
  return autoId;
}

function CreateUserFireBase(
  lastName,
  firstName,
  birthDate,
  numberFamilly,
  generation,
  pictureName,
  famillyName,
  dateMariage
) {
  let id = generateUniqueFirestoreId();
  return db.collection("famille").doc(id).set({
    firstName: firstName,
    lastName: lastName,
    generation: generation,
    birthDate: birthDate,
    numberFamilly: numberFamilly,
    pictureName: pictureName,
    famillyName: famillyName,
    dateMariage: dateMariage,
  });
}

function ModifyUserFireBase(
  id,
  lastName,
  firstName,
  birthDate,
  numberFamilly,
  generation,
  pictureName,
  famillyName,
  dateMariage
) {
  return db.collection("famille").doc(id).set({
    firstName: firstName,
    lastName: lastName,
    generation: generation,
    birthDate: birthDate,
    numberFamilly: numberFamilly,
    pictureName: pictureName,
    famillyName: famillyName,
    dateMariage: dateMariage
  });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const storage = firebase.storage();

const test = {
  findAll,
  signInWithGoogle,
  CreateUserFireBase,
  ModifyUserFireBase,
  FindIdPerson,
};

export default test;
