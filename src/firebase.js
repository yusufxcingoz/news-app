import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDUesoZ9sUfehFTAURBna0rbuG5asaqrdw",
  authDomain: "news-app-298ab.firebaseapp.com",
  databaseURL:
    "https://news-app-298ab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "news-app-298ab",
  storageBucket: "news-app-298ab.appspot.com",
  messagingSenderId: "347760817433",
  appId: "1:347760817433:web:562c59b28b02a398d48188",
  measurementId: "G-K806QMRCPB",
};

// Initialize Firebase
firebase.initializeApp(config);
const db = firebase.firestore();
export default db;
