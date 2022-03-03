import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAHes24B7-ZdqK8XquMcjgMRIY4hQifv1A",
    authDomain: "crwn-db-87820.firebaseapp.com",
    projectId: "crwn-db-87820",
    storageBucket: "crwn-db-87820.appspot.com",
    messagingSenderId: "914157760004",
    appId: "1:914157760004:web:8d2fb6e895ca6403278f51"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firestore;



