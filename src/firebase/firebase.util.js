import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/* Fire base configuration you will be getting from  firebase */
const firebaseConfig = {
  apiKey: "AIzaSyAHefWeH_UianNV4j09C7ICkeGGWgOPvH4",
  authDomain: "ecommerce-react-firebase-9ab93.firebaseapp.com",
  projectId: "ecommerce-react-firebase-9ab93",
  storageBucket: "ecommerce-react-firebase-9ab93.appspot.com",
  messagingSenderId: "844064843056",
  appId: "1:844064843056:web:2bb74888f4616392e554f5",
  measurementId: "G-05X1W3TQ8Q"
};

/* setting up the  connection to our project*/
firebase.initializeApp(firebaseConfig);
/* getting the auth and firestore object from firebase */
export const auth = firebase.auth();
export const firestore = firebase.firestore();
/*creating a auth provider Google/github/ etc */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
/* this will trigger google auth pop up subscribe below object to get the auth response */
export const signInWithGoogle = () => auth.signInWithPopup(provider);

/* user profile creation when user signin initially */
export const createUserProfileDoc = async (userAuth, otherDetails) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();


  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...otherDetails
      })
    } catch (e) {
      console.log('error while creating user', e)
    }
  }

  return userRef;
}



export default firebase;