// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtg8zzvMGW86rwmWed98fkSjYcEs07Q1w",
  authDomain: "vetcalendar-database.firebaseapp.com",
  projectId: "vetcalendar-database",
  storageBucket: "vetcalendar-database.appspot.com",
  messagingSenderId: "432326466899",
  appId: "1:432326466899:web:abafbe9b4a2e2904d055a6",
  measurementId: "G-T6D1BV1H33"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// login click
function login() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    
    const enter = auth.signInWithEmailAndPassword(email.value, password.value);

    enter.catch(e => alert(e.message));
}

// signup click
function signUp() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    const register = auth.createUserWithEmailAndPassword(email.value, password.value);
    
    register.catch(e => alert(e.message));
    alert('Cadastro feito com sucesso!');
}

// active user to homepage
firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        window.location = 'home.html';
    } else {
        alert('Erro no login, verifique email e senha');
    }
})
