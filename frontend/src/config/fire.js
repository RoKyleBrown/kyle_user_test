import firebase from "firebase/app";
import "firebase/auth";
import { functions } from "firebase";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyD7r-27hE0dECM56bupYdJjL0F3XNiQCoo",
    authDomain: "kyle-streamlytics.firebaseapp.com",
    projectId: "kyle-streamlytics",
    storageBucket: "kyle-streamlytics.appspot.com",
    messagingSenderId: "958500369248",
    appId: "1:958500369248:web:9734893615da66a2e6a405"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
