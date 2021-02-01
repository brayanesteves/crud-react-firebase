import firebase from 'firebase/app'
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDOPl51Y-SsSN4XeunCvSQpZd-GCFtlFWA",
    authDomain: "crud-3f60c.firebaseapp.com",
    databaseURL: "https://crud-3f60c-default-rtdb.firebaseio.com",
    projectId: "crud-3f60c",
    storageBucket: "crud-3f60c.appspot.com",
    messagingSenderId: "102495101553",
    appId: "1:102495101553:web:a8da50d46ec751a2afb1d0",
    measurementId: "G-0Y6KMH5D8W"

};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();