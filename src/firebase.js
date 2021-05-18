import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEUydQPy6CC-0tZbaMulJ6Z_NzAiCa3rE",
    authDomain: "whatsappreactclone0.firebaseapp.com",
    projectId: "whatsappreactclone0",
    storageBucket: "whatsappreactclone0.appspot.com",
    messagingSenderId: "906370785250",
    appId: "1:906370785250:web:d5ee7efd052eb1c330a3bb",
    measurementId: "G-KPXBQV0WPC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;