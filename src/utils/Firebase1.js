import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQVFZ3-00JB0ycjIslMbEsqEIZf9mzQpY",
  authDomain: "projeto-bsi-ff1e2.firebaseapp.com",
  databaseURL: "https://projeto-bsi-ff1e2-default-rtdb.firebaseio.com",
  projectId: "projeto-bsi-ff1e2",
  storageBucket: "projeto-bsi-ff1e2.appspot.com",
  messagingSenderId: "847163358490",
  appId: "1:847163358490:web:37aab53032b90a5e1c00a3",
  measurementId: "G-0V4M1LSTDW",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
