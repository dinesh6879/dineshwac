import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBROfY8rRT9P_Hc4K4Vyr349NGg_LFG2j0",
  authDomain: "dinesh-6d772.firebaseapp.com",
  projectId: "dinesh-6d772",
  storageBucket: "dinesh-6d772.appspot.com",
  messagingSenderId: "263967240199",
  appId: "1:263967240199:web:3b6ad2ccd32515e4ebbaa2",
  measurementId: "G-5VJW273Z2T"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
