import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider } from '@firebase/auth';
const app = initializeApp(firebaseConfig);

const auth = getAuth();

// Google
export const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
        .then((result) => {
            const { displayName, email } = result.user;
            console.log(result);
            const signedInUser = { name: displayName, email }
            // setLoggedInUser(signedInUser);
            return signedInUser;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
};