import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDPEvd6vbcK_G0gBEF9bbpX_I7jeabUm5M",
  authDomain: "crwn-db-d5988.firebaseapp.com",
  projectId: "crwn-db-d5988",
  storageBucket: "crwn-db-d5988.appspot.com",
  messagingSenderId: "972015114189",
  appId: "1:972015114189:web:d51bafa8106a1cdf751684",
  measurementId: "G-QHHE0R2S2D"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;