// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getStorage} from 'firebase/storage';

import {getAuth, 
    signInWithRedirect,
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBB-Kcdj6sfedpog7Q2FiJMRkuy4Toox4g",
    authDomain: "adospados-f673b.firebaseapp.com",
    projectId: "adospados-f673b",
    storageBucket: "adospados-f673b.appspot.com",
    messagingSenderId: "851484351678",
    appId: "1:851484351678:web:cb9b1d171f2206801252ef"
};

// Initialize Firebase
const firebaseApp =initializeApp(firebaseConfig);

export const storage=getStorage(firebaseApp);

const provider=new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth, provider);
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth, provider);

export const db=getFirestore()

export const createUserDocumentFromAuth=async(
    userAuth,
    additionalInformation={}
    ) =>{
    if(!userAuth) return;
    const userDocRef=doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email}=userAuth;
        const createdAt=new Date();

        try{
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInformation
            });
        } catch(error){
            console.log('Error creating the user', error.message);
        }
    }
    return userDocRef;
      
};

export const signInAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password)return;

    return await signInWithEmailAndPassword(auth, email, password);
};


export const createAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password)return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signOutUser= async ()=>await signOut(auth);
//observer listener for centralising the auth change
export const onAuthStateChangedListener=(callback)=>
    onAuthStateChanged(auth, callback)

export const diaryUser=auth;