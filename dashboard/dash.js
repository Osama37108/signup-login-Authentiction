import {auth, signOut, onAuthStateChanged} from '../firebase.js'

let logOut = document.getElementById("logout");

const LogOut = ()=>{
    // const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}


logOut.addEventListener("click",LogOut);


onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = '../login/login.html'
    }
  });
  