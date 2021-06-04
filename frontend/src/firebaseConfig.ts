import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDcmL5dIWfGHK3oho4PG9uN_Q42NzeRdJU",
  authDomain: "fir-react-lab.firebaseapp.com",
  databaseURL: "https://fir-react-lab-default-rtdb.firebaseio.com",
  projectId: "fir-react-lab",
  storageBucket: "fir-react-lab.appspot.com",
  messagingSenderId: "1015050669055",
  appId: "1:1015050669055:web:4cbc4e58cdb5a4636ff5ca",
  measurementId: "G-BKYH6VG8JR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authProvider = new firebase.auth.GoogleAuthProvider();

export function signInWithGoogle(): void {
  firebase.auth().signInWithPopup(authProvider);
}
export function signOut(): void {
  firebase.auth().signOut();
}

export default firebase;
