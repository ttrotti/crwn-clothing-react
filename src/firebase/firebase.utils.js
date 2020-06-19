import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC5W0FHcXSBuymv04r9yiGuOvU1D6GCniA",
    authDomain: "clt-store-db.firebaseapp.com",
    databaseURL: "https://clt-store-db.firebaseio.com",
    projectId: "clt-store-db",
    storageBucket: "clt-store-db.appspot.com",
    messagingSenderId: "23423245845",
    appId: "1:23423245845:web:6e5de56931ec84a02ef81c",
    measurementId: "G-CT9YS5Z7M8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;