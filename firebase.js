import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCkkquv4wciiI-GPlW_Tkz__GTNG4mPNyA",
    authDomain: "blog-website-dae71.firebaseapp.com",
    projectId: "blog-website-dae71",
    storageBucket: "blog-website-dae71.appspot.com",
    messagingSenderId: "751710909184",
    appId: "1:751710909184:web:c5a93484e36c352f5fb9e5",
    measurementId: "G-0JKESDFQBQ"
  };

 
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
 
  export {auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut}