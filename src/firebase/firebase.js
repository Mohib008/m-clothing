import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCDHMVWZ8miSj3BpgVHa-4Xf5FSp9Llgik",
    authDomain: "m-outlite.firebaseapp.com",
    databaseURL: "https://m-outlite.firebaseio.com",
    projectId: "m-outlite",
    storageBucket: "m-outlite.appspot.com",
    messagingSenderId: "386890151869",
    appId: "1:386890151869:web:925f4d7dd11ef4ff1284d4",
    measurementId: "G-DT199CCYD6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
          });
        } catch (error) {
            console.log("upps something happened!", error.message);
        }
    } 

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 