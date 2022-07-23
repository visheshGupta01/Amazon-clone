import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCx8OSiTEr71qEZTWSW5W-pCJ5CyyH57PM",
  authDomain: "clone-ddb76.firebaseapp.com",
  projectId: "clone-ddb76",
  storageBucket: "clone-ddb76.appspot.com",
  messagingSenderId: "1067194640630",
  appId: "1:1067194640630:web:632e758cdf556832f764d7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
