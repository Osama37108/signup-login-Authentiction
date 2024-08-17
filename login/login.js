import {auth, signInWithEmailAndPassword, onAuthStateChanged} from '../firebase.js'

let formFeild = document.querySelectorAll("form input");

const [loginEmail, loginPassword] = formFeild;

let loginBtn = document.getElementById("loginBtn");

const Login = ()=>{
    event.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });
    
};


loginBtn.addEventListener("click",Login);



onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "../dashboard/dash.html"
  }
});