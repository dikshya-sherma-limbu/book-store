import { createContext, useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
export const AuthPorvider = ({ children }) => {
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

  const value = {
    currentUser,
    registerUser,
    loginUser,
    signInWithGoogle,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export { AuthContext, useAuth };
