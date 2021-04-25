import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAHefWeH_UianNV4j09C7ICkeGGWgOPvH4",
    authDomain: "ecommerce-react-firebase-9ab93.firebaseapp.com",
    projectId: "ecommerce-react-firebase-9ab93",
    storageBucket: "ecommerce-react-firebase-9ab93.appspot.com",
    messagingSenderId: "844064843056",
    appId: "1:844064843056:web:2bb74888f4616392e554f5",
    measurementId: "G-05X1W3TQ8Q"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;