import "firebase/firestore";
import "firebase/auth";

import firebase from "firebase/app";

const config = {
  apiKey: "AIzaSyCE4mgM400zTKsDjLKFnJqXhakRR7B9HKs",
  authDomain: "crwn-ecommerce-adb73.firebaseapp.com",
  databaseURL: "https://crwn-ecommerce-adb73.firebaseio.com",
  projectId: "crwn-ecommerce-adb73",
  storageBucket: "crwn-ecommerce-adb73.appspot.com",
  messagingSenderId: "649778277455",
  appId: "1:649778277455:web:7c82e9ea6e17886ca00e3a",
  measurementId: "G-S26JWNTT7N"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/**  set up google authentication utility  */
// gives access to the Google Auth Provider class
const provider = new firebase.auth.GoogleAuthProvider();

// triggers google pop-up whenever we use the google auth provider for authentication and sign in
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
