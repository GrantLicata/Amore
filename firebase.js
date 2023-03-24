// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcFapk5s9_kxGI36MH7Ri1IbSsfqPoJZc",
  authDomain: "amore-1a691.firebaseapp.com",
  projectId: "amore-1a691",
  storageBucket: "amore-1a691.appspot.com",
  messagingSenderId: "154332204352",
  appId: "1:154332204352:web:620a3de48f6290c504fea5",
};

// Initialize Firebase only as needed

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
