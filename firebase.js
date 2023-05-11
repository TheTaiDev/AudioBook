import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDnWEopn0Numq0GQ6l1DBopHDQgzgfxwsk",
  authDomain: "audiobook-f8af7.firebaseapp.com",
  projectId: "audiobook-f8af7",
  storageBucket: "audiobook-f8af7.appspot.com",
  messagingSenderId: "716384653675",
  appId: "1:716384653675:web:a0c7a5aa560b8998babc2e",
  measurementId: "G-SCED61HSBN",
};

let app;
if (firebaseApp.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
