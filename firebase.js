import * as firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAVc2cwhi8tOPgfonTg_eqyQUEzk3hFgfQ",
    authDomain: "schedulerfirebase.firebaseapp.com",
    databaseURL: "https://schedulerfirebase-default-rtdb.firebaseio.com",
    projectId: "schedulerfirebase",
    storageBucket: "schedulerfirebase.appspot.com",
    messagingSenderId: "620574264936",
    appId: "1:620574264936:web:8baaed74bf30ec5897f5dd",
    measurementId: "G-W8BBGNSNE1"
};

firebase.initializeApp(firebaseConfig);

export { firebase };