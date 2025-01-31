import { createContext, useState, useContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// context - helps to pass data through the component tree
// without having to pass props down manually at every level.
const AuthContext = createContext();
const useAuth = () => {
  return useContext(AuthContext);
};

// google provider
const googleProvider = new GoogleAuthProvider();

// AuthProvider - provides the authentication context to the app
const AuthPorvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register a user
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // sign up with google
  const signInWithGoogle = async (email, password) => {
    return await signInWithPopup(auth, googleProvider);
  };

  // log out user
  const logoutUser = async () => {
    return await signOut(auth);
  };

  // manage user state
  useEffect(() => {
    // Setting up an authentication state listener using Firebase's onAuthStateChanged
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Whenever the auth state changes (sign-in/sign-out), this callback runs
      setCurrentUser(user);
      setLoading(false);

      if (user !== null) {
        const { email, displayName, photoURL } = user;
        const userData = {
          email,
          username: displayName,
          photo: photoURL,
        };
      }
    });

    // Cleanup function (runs when the component unmounts or effect is cleaned up):
    // This removes the listener set up by onAuthStateChanged when the component
    // unmounts or before the effect runs again (if the dependency array changes).
    return () => unsubscribe(); // Unsubscribing from the auth state change listener
  }, []); // Empty dependency array means this runs only once on mount and unmount

  const value = {
    currentUser,
    registerUser,
    loginUser,
    signInWithGoogle,
    logoutUser,
    loading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export { AuthContext, useAuth, AuthPorvider };
