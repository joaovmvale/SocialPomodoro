import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDP24ZYDelNj7IMFJmSfwL9I13417X3qvg",
  authDomain: "socialpomodoro-b18de.firebaseapp.com",
  projectId: "socialpomodoro-b18de",
  storageBucket: "socialpomodoro-b18de.appspot.com",
  messagingSenderId: "300200574357",
  appId: "1:300200574357:web:bd22ff05c5a40ae1c50a9c",
  measurementId: "G-CMNVLEM0PP",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
