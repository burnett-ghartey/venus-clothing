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

export const createUserProfileDocument = async(userAuth, additionalData) => {
    
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
               
            })
        }catch(error){
            console.log('error creating user', error.message)
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firestore;



