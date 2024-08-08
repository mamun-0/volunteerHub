import { useState } from "react";
import { auth } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export function useFirebaseAuth(initialUser = null) {
  const [user, setInitialUser] = useState(initialUser);

  function setUser(user) {
    setInitialUser(user);
  }
  function signUpWithEmailAndPassword(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function loginWithEmailAndPassword(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function updateUserProfile(displayName, photoURL) {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  }
  function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  function logOut() {
    window.localStorage.removeItem("access-token"); 
    return signOut(auth);
  }
  return {
    user,
    setUser,
    signUpWithEmailAndPassword,
    loginWithEmailAndPassword,
    updateUserProfile,
    loginWithGoogle,
    logOut,
  };
}
