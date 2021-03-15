import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD0PTPzd04NTEfyFtNrLOAXZ3sJXIHO1x0",
    authDomain: "signal-clone-783c0.firebaseapp.com",
    projectId: "signal-clone-783c0",
    storageBucket: "signal-clone-783c0.appspot.com",
    messagingSenderId: "971903089621",
    appId: "1:971903089621:web:58c26640b69469ea0d9b5c",
    measurementId: "G-ZZCGL5K1D0"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

