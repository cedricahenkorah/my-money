import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyz5MCqoqsYxIMsnQ_xuqY_LhiEYifIIY",
  authDomain: "mymoney-2940f.firebaseapp.com",
  projectId: "mymoney-2940f",
  storageBucket: "mymoney-2940f.appspot.com",
  messagingSenderId: "615424360462",
  appId: "1:615424360462:web:818b30341546b6d243fc5f",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
