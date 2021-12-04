import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, updateProfile, signOut } from '@firebase/auth';
const app = initializeApp(firebaseConfig);

export const initializeLoginFrameWork = () => {
    if (initializeApp.length === 0) {
        initializeApp(firebaseConfig);
    }
};



const auth = getAuth();

// Google
export const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
        .then((result) => {
            const { displayName, email } = result.user;
            // console.log(result);
            const signedInUser = {
                isSignIn: true,
                name: displayName,
                email: email,
                success: true
            }
            return signedInUser;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
};


// Create Email & Password
export const createEmailAndPassword = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserName(name);
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
};


// Sign In With Email & Password
export const signInEmailAndPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
};


// Sign Out
export const handleSignOut = () => {
    return signOut(auth)
        .then(() => {
            const signOutUser = {
                isSignIn: false,
                name: '',
                email: '',
                password: '',
                photoURL: '',
                error: '',
                success: false
            }
            return signOutUser;
        }).catch((error) => {
            console.log(error.message);
            console.log(error);
        });
};



// Update a user's profile
const updateUserName = name => {
    updateProfile(auth.currentUser, {
        displayName: name
    }).then(() => {
        // <p>Update Name Successfully</p>
        console.log('Update Name Successfully');
    }).catch((error) => {
        console.log(error);
    });
};