import firebase from 'firebase';

// Initialize Firebase
var config = 
{
    apiKey: "AIzaSyDgnuoqOr3X_V8R-8TbwOzi3acZ9tS0qvU",
    authDomain: "e-solutions-9d5a3.firebaseapp.com",
    databaseURL: "https://e-solutions-9d5a3.firebaseio.com",
    projectId: "e-solutions-9d5a3",
    storageBucket: "e-solutions-9d5a3.appspot.com",
    messagingSenderId: "350433951985"
};

firebase.initializeApp(config);
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();