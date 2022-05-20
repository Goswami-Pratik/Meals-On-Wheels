import firebase from 'firebase'

    var firebaseApp = firebase.initializeApp({
       
    apiKey: "AIzaSyDU8Z6EJzJxlY08saA6o3VvsOf6JSzFCG4",
    authDomain: "contact-form-e8ee5.firebaseapp.com",
    projectId: "contact-form-e8ee5",
    storageBucket: "contact-form-e8ee5.appspot.com",
    messagingSenderId: "1030211472925",
    appId: "1:1030211472925:web:48e6dcc9e1b22c004440f4"
    });

    var db = firebaseApp.firestore();

    export {db};